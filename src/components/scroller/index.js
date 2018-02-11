'use strict';
import EventClass from '@components/eventclass';
import { merge } from '@common/util';
import Scroller from '@common/util/scroller';
const defaultOption = {
  // 是否支持横向滚动
  scrollingX: false,
  // 是否支持竖向滚动
  scrollingY: true,
  // 是否开启补间动画（减速，回弹，缩放和滚动动画）
  animating: true,
  // 动画时长
  animationDuration: 250,
  // 是否开启弹性（无弹性不下拉刷新）
  bouncing: true,
  // 是否锁定（如果用户在开始时只轻微移动其中一个，则启用锁定到主轴）
  locking: true,
  // 是否启用翻页模式类似于轮播图
  paging: false,
  // 是否捕捉用户可用的整数像素值
  snapping: false,
  // 是否开启缩放功能
  zooming: false,
  // 缩放最小值
  minZoom: 0.5,
  // 缩放最大值
  maxZoom: 3,
  // 启用下拉刷新
  PullToRefresh: false,
  // 下拉刷新高度（像素）
  PullToRefreshHeight: 50
};

const renderScroll = (function () {
  const docStyle = document.documentElement.style;
  let engine;
  if (window.opera && Object.prototype.toString.call(window.opera) === '[object Opera]') {
    engine = 'presto';
  } else if ('MozAppearance' in docStyle) {
    engine = 'gecko';
  } else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
  } else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
  }
  const vendorPrefix = (defaultOption.vendorPrefix = {
    trident: 'ms',
    gecko: 'Moz',
    webkit: 'Webkit',
    presto: 'O'
  }[engine]);
  const helperElem = document.createElement('div');
  let undef;
  const perspectiveProperty = `${vendorPrefix}Perspective`;
  const transformProperty = `${vendorPrefix}Transform`;
  if (helperElem.style[perspectiveProperty] !== undef) {
    return function (content, left, top, zoom) {
      content.style[transformProperty] = `translate3d(${-left}px,${-top}px,0) scale(${zoom})`;
    };
  }
  if (helperElem.style[transformProperty] !== undef) {
    return function (content, left, top, zoom) {
      content.style[transformProperty] = `translate(${-left}px,${-top}px) scale(${zoom})`;
    };
  }
  return function (content, left, top, zoom) {
    content.style.marginLeft = left ? `${-left / zoom}px` : '';
    content.style.marginTop = top ? `${-top / zoom}px` : '';
    content.style.zoom = zoom || '';
  };
}());

class EasyScroller extends EventClass {
  constructor (content, option) {
    super();
    this._className = 'Scroller';
    this._createEvent('onCreate onScroll onScrollOver onRefreshLess onRefresh onRefreshMore');
    this.content = content;
    // 默认会把父节点当成滚动的外部容器
    this.container = content.parentNode;
    this.option = merge({}, defaultOption, option);
    // create Scroller instance
    this.initScroller();
    // bind events
    this.bindEvents();
    // the content element needs a correct transform origin for zooming
    this.content.style[`${defaultOption.vendorPrefix}TransformOrigin`] = 'left top';
    // reflow for the first time
    this.reflow();
    window.setTimeout(() => {
      this.dispatch('onCreate');
    }, 0);
  }
  initScroller () {
    this.option.scrollingComplete = () => {
      this.dispatch('onScrollOver');
    };
    this.scroller = new Scroller((left, top, zoom) => {
      this.dispatch('onScroll', left, top, zoom);
      this._render(left, top, zoom);
    }, this.option);
    if (this.option.PullToRefresh) {
      this.scroller.activatePullToRefresh(
        this.option.PullToRefreshHeight,
        () => {
          this.dispatch('onRefreshMore');
        },
        () => {
          this.dispatch('onRefreshLess');
        },
        () => {
          this.dispatch('onRefresh');
        }
      );
    }
  }
  finishPullToRefresh () {
    this.option.PullToRefresh && this.scroller.finishPullToRefresh();
  }
  setDimensions (clientWidth, clientHeight, contentWidth, contentHeight) {
    this.scroller.setDimensions(clientWidth, clientHeight, contentWidth, contentHeight);
  }
  _render (left, top, zoom) {
    renderScroll(this.content, left, top, zoom);
  }
  bindEvents () {
    const me = this;
    // reflow handling
    window.addEventListener(
      'resize',
      () => {
        me.reflow();
      },
      false
    );
    // touch devices bind touch events
    if ('ontouchstart' in window) {
      this.container.addEventListener(
        'touchstart',
        (e) => {
          // Don't react if initial down happens on a form element
          if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
            return;
          }
          // reflow since the container may have changed
          me.reflow();
          me.scroller.doTouchStart(e.touches, e.timeStamp);
        },
        false
      );
      this.container.addEventListener(
        'touchmove',
        (e) => {
          e.preventDefault();
          me.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
        },
        false
      );
      this.container.addEventListener(
        'touchend',
        (e) => {
          me.scroller.doTouchEnd(e.timeStamp);
        },
        false
      );
      this.container.addEventListener(
        'touchcancel',
        (e) => {
          me.scroller.doTouchEnd(e.timeStamp);
        },
        false
      );
      // non-touch bind mouse events
    } else {
      let mousedown = false;
      this.container.addEventListener(
        'mousedown',
        (e) => {
          if (e.target.tagName.match(/input|textarea|select/i)) {
            return;
          }
          me.scroller.doTouchStart(
            [
              {
                pageX: e.pageX,
                pageY: e.pageY
              }
            ],
            e.timeStamp
          );
          mousedown = true;
          // reflow since the container may have changed
          me.reflow();
          e.preventDefault();
        },
        false
      );
      document.addEventListener(
        'mousemove',
        (e) => {
          if (!mousedown) {
            return;
          }
          me.scroller.doTouchMove(
            [
              {
                pageX: e.pageX,
                pageY: e.pageY
              }
            ],
            e.timeStamp
          );
          mousedown = true;
        },
        false
      );
      document.addEventListener(
        'mouseup',
        (e) => {
          if (!mousedown) {
            return;
          }
          me.scroller.doTouchEnd(e.timeStamp);
          mousedown = false;
        },
        false
      );
      this.container.addEventListener(
        'mousewheel',
        (e) => {
          if (me.option.zooming) {
            me.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
            e.preventDefault();
          }
        },
        false
      );
    }
  }
  reflow () {
    // set the right scroller dimensions
    this.scroller.setDimensions(
      this.container.clientWidth,
      this.container.clientHeight,
      this.content.offsetWidth,
      this.option.PullToRefresh ? this.content.offsetHeight - 50 : this.content.offsetHeight
    );
    // refresh the position for zooming purposes
    const rect = this.container.getBoundingClientRect();
    this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop);
  }
}

export default EasyScroller;
