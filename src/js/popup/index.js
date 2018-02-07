'use strict';
import './index.less';
import util from '@js/util';
import Popbase from '@js/popbase';
var defaultOption = {
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
var Popup = Popbase.extend({
  _className: 'Popup',
  init: function (option) {
    var obj = util.merge({}, defaultOption, option);
    obj.closeOnClickModal = obj.backClose;
    this._super(obj);
  },
  _initDom: function () {
    this.container = document.createElement('div');
    this.container.className = this.containerClass + ' lmui-popup-container lmui-popup-' + this.placement;
    this.width == 'auto' ? '' : (this.container.style.width = this.width);
    this.height == 'auto' ? '' : (this.container.style.height = this.height);
    this.container.innerHTML = this.content;
    this.warp.appendChild(this.container);
    if (this.contentPosition) {
      var clist = this.container.children;
      for (var i = 0; i < clist.length; i++) {
        util.addClass(clist[i], 'lmui-popup-' + this.contentPosition);
      }
    }
  },
  _initEvent: function () {
    var me = this;
    this.container.addEventListener(
      'click',
      function (e) {
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
    util.addClass(this.container, 'lmui-popup-' + this.placement + '-enter');
    var me = this;
    window.setTimeout(function () {
      me.transition = false;
      me._doAfterOpen();
    }, 300);
  },
  _onClose: function () {
    this.transition = true;
    util.removeClass(this.container, 'lmui-popup-' + this.placement + '-enter');
    var me = this;
    window.setTimeout(function () {
      me.transition = false;
      me._doAfterClose();
    }, 300);
  }
});
export default Popup;
