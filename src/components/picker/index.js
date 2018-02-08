'use strict';
import './index.less';
import tpl from './index.html';
import Class from '@components/class';
import util from '@common/util';
import Scroller from '@common/util/scroller';
var defaultOption = {
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
  paging: true,
  // 是否捕捉用户可用的整数像素值
  snapping: true,
  // 是否开启缩放功能
  zooming: false,
  // 缩放最小值
  minZoom: 0.5,
  // 缩放最大值
  maxZoom: 3,
  // 数据
  data: []
};
var EasyScroller = Class.extend({
  _className: 'EasyScroller',
  init: function (wrapper, option) {
    this._super();
    this._createEvent('onCreate onScroll onScrollOver');
    this.option = util.merge({}, defaultOption, option);
    this._initDom(wrapper);
    // create Scroller instance
    this._initScroller();
    // bind events
    this._bindEvents();
    // the content element needs a correct transform origin for zooming
    this.content.style[defaultOption.vendorPrefix + 'TransformOrigin'] = 'left top';
    // reflow for the first time
    this.reflow();
    this._currentIndex = 0;
    var me = this;
    window.setTimeout(function () {
      me.dispatch('onCreate');
    }, 0);
  },
  _initDom: function (wrapper) {
    this.wrapper = wrapper;
    this.wrapper.innerHTML = util.render(tpl, this.option);
    this.container = this.wrapper.firstElementChild.firstElementChild;
    this.content = this.container.firstElementChild;
  },
  _initScroller: function () {
    var me = this;
    this.option.scrollingComplete = function () {
      me.dispatch('onScrollOver');
    };
    this.scroller = new Scroller(function (left, top, zoom) {
      var height = me.container.clientHeight,
        index = parseInt(top / height, 10);
      me._currentIndex = index;
      me.dispatch('onScroll', me._currentIndex, me.option.data[me._currentIndex]);
      me._render(left, top, zoom);
    }, this.option);
  },
  setDimensions: function (clientWidth, clientHeight, contentWidth, contentHeight) {
    this.scroller.setDimensions(clientWidth, clientHeight, contentWidth, contentHeight);
  },
  _render: (function () {
    var docStyle = document.documentElement.style;
    var engine;
    if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
      engine = 'presto';
    } else if ('MozAppearance' in docStyle) {
      engine = 'gecko';
    } else if ('WebkitAppearance' in docStyle) {
      engine = 'webkit';
    } else if (typeof navigator.cpuClass === 'string') {
      engine = 'trident';
    }
    var vendorPrefix = (defaultOption.vendorPrefix = {
      trident: 'ms',
      gecko: 'Moz',
      webkit: 'Webkit',
      presto: 'O'
    }[engine]);
    var helperElem = document.createElement('div');
    var undef;
    var perspectiveProperty = vendorPrefix + 'Perspective';
    var transformProperty = vendorPrefix + 'Transform';
    if (helperElem.style[perspectiveProperty] !== undef) {
      return function (left, top, zoom) {
        this.content.style[transformProperty] = 'translate3d(' + -left + 'px,' + -top + 'px,0) scale(' + zoom + ')';
      };
    }
    if (helperElem.style[transformProperty] !== undef) {
      return function (left, top, zoom) {
        this.content.style[transformProperty] = 'translate(' + -left + 'px,' + -top + 'px) scale(' + zoom + ')';
      };
    }
    return function (left, top, zoom) {
      this.content.style.marginLeft = left ? -left / zoom + 'px' : '';
      this.content.style.marginTop = top ? -top / zoom + 'px' : '';
      this.content.style.zoom = zoom || '';
    };
  }()),
  _bindEvents: function () {
    var me = this;
    // reflow handling
    window.addEventListener(
      'resize',
      function () {
        me.reflow();
      },
      false
    );
    // touch devices bind touch events
    if ('ontouchstart' in window) {
      this.container.parentNode.addEventListener(
        'touchstart',
        function (e) {
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
      this.container.parentNode.addEventListener(
        'touchmove',
        function (e) {
          e.preventDefault();
          me.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
        },
        false
      );
      this.container.parentNode.addEventListener(
        'touchend',
        function (e) {
          me.scroller.doTouchEnd(e.timeStamp);
        },
        false
      );
      this.container.parentNode.addEventListener(
        'touchcancel',
        function (e) {
          me.scroller.doTouchEnd(e.timeStamp);
        },
        false
      );
      // non-touch bind mouse events
    } else {
      var mousedown = false;
      this.container.parentNode.addEventListener(
        'mousedown',
        function (e) {
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
        function (e) {
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
        function (e) {
          if (!mousedown) {
            return;
          }
          me.scroller.doTouchEnd(e.timeStamp);
          mousedown = false;
        },
        false
      );
      this.container.parentNode.addEventListener(
        'mousewheel',
        function (e) {
          if (me.option.zooming) {
            me.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
            e.preventDefault();
          }
        },
        false
      );
    }
  },
  reflow: function () {
    // set the right scroller dimensions
    this.scroller.setDimensions(
      this.container.clientWidth,
      this.container.clientHeight,
      this.content.offsetWidth,
      this.content.offsetHeight
    );
    // refresh the position for zooming purposes
    var rect = this.container.getBoundingClientRect();
    this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop);
  }
});
export default EasyScroller;
