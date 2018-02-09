'use strict';
import './index.less';
import tpl from './index.html';
import { merge, render, addClass, removeClass } from '@common/util';
import Popbase from '@components/popbase';
var defaultOption = {
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
var Actionsheet = Popbase.extend({
  _className: 'Actionsheet',
  init: function (option) {
    var obj = merge({}, defaultOption, option);
    obj.closeOnClickModal = obj.backClose;
    this._super(obj);
    this._createEvent('onBtnClick');
  },
  _initDom: function () {
    this.container = document.createElement('div');
    this.container.className = this.containerClass + ' lmui-popup-container lmui-popup-' + this.placement;
    this.container.innerHTML = render(tpl, this);
    this.warp.appendChild(this.container);
  },
  _initEvent: function () {
    var me = this;
    this.container.addEventListener(
      'click',
      function (e) {
        if (e.target.dataset.index) {
          var index = parseInt(e.target.dataset.index, 10);
          if (me.dispatch('onBtnClick', index, me.data[index]) != false) {
            me.close();
          }
        }
        if (e.target.className.indexOf(me.closeClass) >= 0) {
          me.close();
          return false;
        }
      },
      false
    );
  },
  _onOpen: function () {
    this.transition = true;
    addClass(this.container, 'lmui-popup-' + this.placement + '-enter');
    var me = this;
    window.setTimeout(function () {
      me.transition = false;
      me._doAfterOpen();
    }, 300);
  },
  _onClose: function () {
    this.transition = true;
    removeClass(this.container, 'lmui-popup-' + this.placement + '-enter');
    var me = this;
    window.setTimeout(function () {
      me.transition = false;
      me._doAfterClose();
    }, 300);
  }
});
export default Actionsheet;
