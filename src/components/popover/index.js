'use strict';
import './index.less';
import { merge, addClass, removeClass } from '@common/util';
import Popbase from '@components/popbase';
const defaultOptions = {
  // 目标元素dom
  target: null,
  // 触发行为 hover focus click
  action: 'hover',
  // distance 根元素具体target的距离
  distance: 4,
  // 是否默认打开
  autoShow: false,
  // 外包容器class
  containerClass: 'lmui-popover-normal',
  // 位置 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
  placement: 'top',
  // 长度
  width: 'auto',
  // 宽度
  height: 'auto',
  // 弹出内容
  content: '',
  // 关闭class
  closeClass: 'close',
  // 是否是模态
  modal: false,
  // 模态关闭
  backClose: false,
  // overlay的zIndex固定
  fixOverlay: true,
  // 是否关闭时销毁
  destoryOnClose: false
};
export default class Popover extends Popbase {
  constructor(options) {
    const newOptions = merge({}, defaultOptions, options);
    super(newOptions);
    this._className = 'Popover';
  }

  _initDom() {
    this.root = document.createElement('div');
    this.root.className = 'lmui-popover-root';
    document.body.appendChild(this.root);
    this.container = document.createElement('div');
    this.container.className = `${this.containerClass} lmui-popover-container lmui-popover-${this.placement}`;
    this.container.innerHTML = [
      '<div class="lmui-popover-content">',
      '<div class="lmui-popover-arrow"></div>',
      '<div class="lmui-popover-inner">',
      this.content,
      '</div>',
      '</div>'
    ].join('');
    this.root.appendChild(this.container);
  }

  _initEvent() {
    const me = this;
    if (this.action === 'click') {
      this.target.addEventListener(
        'click',
        () => {
          me.show();
        },
        false
      );
      window.addEventListener(
        'click',
        (e) => {
          if (e.target !== me.target) {
            me.close();
          }
        },
        false
      );
    } else if (this.action === 'focus') {
      this.target.addEventListener(
        'focus',
        () => {
          me.show();
        },
        false
      );
      this.target.addEventListener(
        'blur',
        () => {
          me.close();
        },
        false
      );
    } else {
      this.target.addEventListener(
        'mouseenter',
        () => {
          me.show();
        },
        false
      );
      this.target.addEventListener(
        'mouseout',
        () => {
          me.close();
        },
        false
      );
    }
  }

  _position() {
    const targetRect = this.target.getClientRects()[0];
    const containerRect = this.container.getClientRects()[0];
    if (this.placement.indexOf('right') === 0) {
      this.container.style.left = `${targetRect.right + this.distance}px`;
      this.container.style.top = `${targetRect.top + targetRect.height / 2}px`;
    } else if (this.placement.indexOf('bottom') === 0) {
      this.container.style.left = `${targetRect.left + targetRect.width / 2}px`;
      this.container.style.top = `${targetRect.top + targetRect.height + this.distance}px`;
    } else if (this.placement.indexOf('left') === 0) {
      this.container.style.left = `${targetRect.left - containerRect.width - this.distance}px`;
      this.container.style.top = `${targetRect.top + targetRect.height / 2}px`;
    } else {
      // top
      this.container.style.left = `${targetRect.left + targetRect.width / 2}px`;
      this.container.style.top = `${targetRect.top - containerRect.height - this.distance}px`;
    }
  }

  _onOpen() {
    this._position();
    addClass(this.container, `lmui-popover-${this.placement}-enter`);
  }

  _onClose() {
    removeClass(this.container, `lmui-popover-${this.placement}-enter`);
  }
}
