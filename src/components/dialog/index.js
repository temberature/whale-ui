'use strict';
import './index.less';
import { merge, addClass, removeClass } from '@common/util';
import Popbase from '@components/popbase';
const defaultOptions = {
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

class Dialog extends Popbase {
  constructor(options) {
    const newOptions = merge({}, defaultOptions, options);
    super(newOptions);
    this._className = 'Dialog';
  }

  _initDom() {
    this.container = document.createElement('div');
    this.container.className = `${this.containerClass} lmui-dialog-container lmui-dialog-${this.placement}`;
    this.width === 'auto' ? '' : (this.container.style.width = this.width);
    this.height === 'auto' ? '' : (this.container.style.height = this.height);
    const { title, button } = this;
    const html = [
      (function() {
        let btnhtml = '';
        if (title) {
          btnhtml = [
            '<div class="lmui-dialog-head">',
            title ? `<div class="lmui-dialog-title">${title}</div>` : '',
            // '<span class="icon icon-mid"><span class="icodispatchWithContextn-plus"></span></span>',
            '</div>'
          ].join('');
        }
        return btnhtml;
      })(),
      `<div class="lmui-dialog-body">${this.content}</div>`,
      (function() {
        let btnhtml = '';
        const size = button.length;
        if (size) {
          const { btnCssMap, getBtnRetId } = Dialog.GlobalConf;
          btnhtml += '<div class="lmui-dialog-foot">';
          for (let i = 0; i < size; i++) {
            let btnText = button[i];
            const mapCss = btnCssMap[btnText.slice(0, 1)];
            const btnRetId = `${getBtnRetId(i, size)}`.replace(/\"/g, '&quot;');
            btnText = mapCss ? btnText.slice(1) : btnText;
            btnhtml += `<button data-action="btn" data-retid="${btnRetId}" class="${btnCssMap.def}${
              mapCss ? ` ${mapCss}` : ''
            }">${btnText}</button>`;
          }
          btnhtml += '</div>';
        }
        return btnhtml;
      })()
    ].join('');
    this.container.innerHTML = html;
    this.warp.appendChild(this.container);
  }

  _initEvent() {
    const me = this;
    this.container.addEventListener(
      'click',
      (e) => {
        if (e.target.className.indexOf(me.closeClass) >= 0) {
          if (me.dispatch('onBtnClick', 0) !== false) {
            me.close();
          }
          return false;
        }
        if ((e.target.dataset && e.target.dataset.action === 'btn') || e.target.getAttribute('data-action') === 'btn') {
          me.dispatch('onBtnClick', e.target.dataset ? e.target.dataset.retid : e.target.getAttribute('data-retid'));
        }
      },
      false
    );
  }

  _onOpen() {
    this.transition = true;
    addClass(this.container, `lmui-dialog-${this.placement}-enter`);
    window.setTimeout(() => {
      this.transition = false;
      this._doAfterOpen();
    }, 300);
  }

  _onClose() {
    this.transition = true;
    removeClass(this.container, `lmui-dialog-${this.placement}-enter`);
    window.setTimeout(() => {
      this.transition = false;
      this._doAfterClose();
    }, 300);
  }
}
Dialog.GlobalConf = {
  btnCssMap: {
    'def': 'btn',
    '~': 'btn-default',
    '#': 'btn-normal',
    '*': 'btn-primary',
    '$': 'btn-success',
    '%': 'btn-info',
    '@': 'btn-link',
    '^': 'btn-warning',
    '!': 'btn-danger'
  },
  // 按钮retId编码方法
  getBtnRetId: function(i) {
    return i + 1;
  }
};
export default Dialog;
