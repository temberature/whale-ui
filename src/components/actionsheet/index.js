'use strict';
import './index.less';
import tpl from './index.html';
import { merge, render, addClass, removeClass } from '@common/util';
import Popbase from '@components/popbase';
const defaultOption = {
  // 是否默认打开
  autoShow: true,
  // 外包容器class
  containerClass: 'lmui-popup-normal',
  // 位置 left right top bottom
  placement: 'bottom',
  // 关闭class
  closeClass: 'lmui-actionsheet-item',
  // 是否是模态
  modal: true,
  // 模态关闭
  backClose: true,
  // overlay的zIndex固定
  fixOverlay: true,
  // 是否关闭时销毁
  destoryOnClose: true,
  // 配置数据
  data: [],
  // 取消按钮配置
  cancelText: '取消'
};

class Actionsheet extends Popbase {
  constructor(option) {
    const obj = merge({}, defaultOption, option);
    obj.closeOnClickModal = obj.backClose;
    super(obj);
    this._className = 'Actionsheet';
    this._createEvent('onBtnClick');
  }

  _initDom() {
    this.container = document.createElement('div');
    this.container.className = `${this.containerClass} lmui-popup-container lmui-popup-${this.placement}`;
    this.container.innerHTML = render(tpl, this);
    this.warp.appendChild(this.container);
  }

  _initEvent() {
    this.container.addEventListener(
      'click',
      (e) => {
        if (e.target.dataset.index) {
          const index = parseInt(e.target.dataset.index, 10);
          if (this.dispatch('onBtnClick', index, this.data[index]) !== false) {
            this.close();
          }
        }
        if (e.target.className.indexOf(this.closeClass) >= 0) {
          this.close();
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
export default Actionsheet;
