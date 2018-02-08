'use strict';
import './index.less';
import util from '@common/util';
import Popbase from '@components/popbase';
var defaultOption = {
  // 是否默认打开
  autoShow: true,
  // 外包容器class
  containerClass: 'lmui-dialog-normal',
  // 弹出
  placement: 'center', // left right top bottom    // 外包容器className
  // 长度
  width: 'auto',
  // 宽度
  height: 'auto',
  // 弹出内容
  content: '',
  // 关闭class
  closeClass: 'close',
  // 是否是模态
  modal: true,
  // 键盘Esc触发关闭
  closeOnPressEscape: false,
  // 点击模态遮罩是否触发关闭
  closeOnClickModal: false,
  // 自动关闭时间
  timeout: 0,
  // 对话框标题
  title: '',
  // 对话按钮组
  button: ['*我知道了']
};

var Dialog = Popbase.extend({
  _className: 'Dialog',
  init: function (option) {
    var obj = util.merge({}, defaultOption, option);
    this._super(obj);
    this._createEvent('onBtnClick');
  },
  _initDom: function () {
    this.container = document.createElement('div');
    this.container.className = this.containerClass + ' lmui-dialog-container lmui-dialog-' + this.placement;
    this.width == 'auto' ? '' : (this.container.style.width = this.width);
    this.height == 'auto' ? '' : (this.container.style.height = this.height);
    var title = this.title;
    var button = this.button;
    var html = [
      (function () {
        var btnhtml = '';
        if (title) {
          btnhtml = [
            '<div class="lmui-dialog-head">',
            title ? '<div class="lmui-dialog-title">' + title + '</div>' : '',
            // '<span class="icon icon-mid"><span class="icodispatchWithContextn-plus"></span></span>',
            '</div>'
          ].join('');
        }
        return btnhtml;
      }()),
      '<div class="lmui-dialog-body">' + this.content + '</div>',
      (function () {
        var btnhtml = '';
        var size = button.length;
        if (size) {
          var btnCssMap = Dialog.GlobalConf.btnCssMap;
          var getBtnRetId = Dialog.GlobalConf.getBtnRetId;
          btnhtml += '<div class="lmui-dialog-foot">';
          for (var i = 0; i < size; i++) {
            var btnText = button[i];
            var mapCss = btnCssMap[btnText.slice(0, 1)];
            var btnRetId = (getBtnRetId(i, size) + '').replace(/\"/g, '&quot;');
            btnText = mapCss ? btnText.slice(1) : btnText;
            btnhtml +=
              '<button data-action="btn" data-retid="' +
              btnRetId +
              '" class="' +
              btnCssMap.def +
              (mapCss ? ' ' + mapCss : '') +
              '">' +
              btnText +
              '</button>';
          }
          btnhtml += '</div>';
        }
        return btnhtml;
      }())
    ].join('');
    this.container.innerHTML = html;
    this.warp.appendChild(this.container);
  },
  _initEvent: function () {
    var me = this;
    this.container.addEventListener(
      'click',
      function (e) {
        if (e.target.className.indexOf(me.closeClass) >= 0) {
          if (me.dispatch('onBtnClick', 0) != false) {
            me.close();
          }
          return false;
        }
        if ((e.target.dataset && e.target.dataset.action == 'btn') || e.target.getAttribute('data-action') == 'btn') {
          me.dispatch('onBtnClick', e.target.dataset ? e.target.dataset.retid : e.target.getAttribute('data-retid'));
        }
      },
      false
    );
  },
  _onOpen: function () {
    this.transition = true;
    util.addClass(this.container, 'lmui-dialog-' + this.placement + '-enter');
    var me = this;
    window.setTimeout(function () {
      me.transition = false;
      me._doAfterOpen();
    }, 300);
  },
  _onClose: function () {
    this.transition = true;
    util.removeClass(this.container, 'lmui-dialog-' + this.placement + '-enter');
    var me = this;
    window.setTimeout(function () {
      me.transition = false;
      me._doAfterClose();
    }, 300);
  }
});
Dialog.GlobalConf = {
  btnCssMap: {
    def: 'btn',
    '~': 'btn-default',
    '#': 'btn-normal',
    '*': 'btn-primary',
    $: 'btn-success',
    '%': 'btn-info',
    '@': 'btn-link',
    '^': 'btn-warning',
    '!': 'btn-danger'
  },
  // 按钮retId编码方法
  getBtnRetId: function (i, n) {
    return i + 1;
  }
};
export default Dialog;
