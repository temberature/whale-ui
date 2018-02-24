'use strict';
import './index.less';
import tpl from './index.html';
import { merge, addClass, removeClass, render } from '@common/util';
import Popbase from '@components/popbase';
const defaultOptions = {
  // 是否默认打开
  autoShow: true,
  // 外包容器class
  containerClass: 'lmui-spin-normal',
  // overlay的zIndex固定
  fixOverlay: true,
  // 说明文案
  text: '',
  // 类型
  type: ''
};
class Spin extends Popbase {
  constructor(options) {
    const newOptions = merge({}, defaultOptions, options);
    super(newOptions);
    this._className = 'Spin';
  }

  // 初始化dom
  _initDom() {
    this.container = document.createElement('div');
    this.container.className = `lmui-spin ${this.containerClass}`;
    this.container.innerHTML = render(tpl, this);
    this.warp.appendChild(this.container);
  }

  _onOpen() {
    this.transition = true;
    addClass(this.container, 'lmui-spin-enter');
    window.setTimeout(() => {
      this.transition = false;
      this._doAfterOpen();
    }, 300);
  }

  _onClose() {
    this.transition = true;
    removeClass(this.container, 'lmui-spin-enter');
    window.setTimeout(() => {
      this.transition = false;
      this._doAfterClose();
    }, 300);
  }

  setType(type) {
    addClass(this.container.firstElementChild, type);
    removeClass(this.container.firstElementChild, this.type);
    this.type = type;
  }

  setText(text) {
    if (text) {
      this.container.lastElementChild.style.display = 'block';
    } else {
      this.container.lastElementChild.style.display = 'none';
    }
    this.container.lastElementChild.innerHTML = text;
    this.text = text;
  }
}

export default Spin;
