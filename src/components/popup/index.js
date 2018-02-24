'use strict';
import './index.less';
import { merge, addClass, removeClass } from '@common/util';
import Popbase from '@components/popbase';
const defaultOptions = {
  // 是否默认打开
  autoShow: true,
  // 外包容器class
  containerClass: 'lmui-popup-normal',
  // 位置 left right top bottom
  placement: 'bottom',
  // 长度
  width: 'auto',
  // 宽度
  height: 'auto',
  // 弹出内容
  content: '',
  // 关闭class
  closeClass: 'close',
  // 内容定位方式
  contentPosition: '', // h v hv
  // 是否是模态
  modal: true,
  // 模态关闭
  backClose: true,
  // overlay的zIndex固定
  fixOverlay: true,
  // 是否关闭时销毁
  destoryOnClose: false
};
export default class Popup extends Popbase {
  constructor(options) {
    const newOptions = merge({}, defaultOptions, options);
    newOptions.closeOnClickModal = newOptions.backClose;
    super(newOptions);
    this._className = 'Popup';
  }

  _initDom() {
    this.container = document.createElement('div');
    this.container.className = `${this.containerClass} lmui-popup-container lmui-popup-${this.placement}`;
    this.width === 'auto' ? '' : (this.container.style.width = this.width);
    this.height === 'auto' ? '' : (this.container.style.height = this.height);
    this.container.innerHTML = this.content;
    this.warp.appendChild(this.container);
    if (this.contentPosition) {
      const clist = this.container.children;
      for (let i = 0; i < clist.length; i++) {
        addClass(clist[i], `lmui-popup-${this.contentPosition}`);
      }
    }
  }

  _initEvent() {
    const me = this;
    this.container.addEventListener(
      'click',
      (e) => {
        if (e.target.className.indexOf(me.closeClass) >= 0) {
          me.close();
          return false;
        }
      },
      false
    );
  }

  _onOpen() {
    this.transition = true;
    addClass(this.container, `lmui-popup-${this.placement}-enter`);
    window.setTimeout(() => {
      this.transition = false;
      this._doAfterOpen();
    }, 300);
  }

  _onClose() {
    this.transition = true;
    removeClass(this.container, `lmui-popup-${this.placement}-enter`);
    window.setTimeout(() => {
      this.transition = false;
      this._doAfterClose();
    }, 300);
  }
}
