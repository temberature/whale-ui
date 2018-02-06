'use strict';
import Class from '@js/class';
import util from '@js/util';
import popManager from '@js/popManager';
var defaultOption = {
  // 是否默认打开
  autoShow: false,
  // 外包容器
  warp: document.body,
  // 延时打开
  openDelay: 0,
  // 延时关闭
  closeDelay: 0,
  // 默认zIndex值
  zIndex: 0,
  // 是否是模态
  modal: false,
  // 模态遮罩动画是否开启
  modalFade: true,
  // 模态遮罩是否添加到body上
  modalAppendToBody: true,
  // 是否锁定滚动
  lockScroll: false,
  // 键盘Esc触发关闭
  closeOnPressEscape: false,
  // 点击模态遮罩是否触发关闭
  closeOnClickModal: false,
  // 是否关闭时销毁
  destoryOnClose: true,
  // 模态遮罩className
  modalClass: '',
  // 自动关闭时间
  timeout: 0,
  // overlay的zIndex固定
  fixOverlay: false
};
var uuid = 1;
var scrollBarWidth;
var Popbase = Class.extend({
  _className: 'Popbase',
  init: function (option) {
    // 扩展/覆盖私有属性
    util.merge(this, defaultOption, option);
    this._super();
    this._createEvent('onCreate onBeforeShow onShow onBeforeClose onClose onDestory');
    // this._popupId = 'popup-' + uuid++;
    popManager.register(this.instanceId(), this);
    this._initDom();
    this._initEvent();
    var me = this;
    window.setTimeout(function () {
      me.dispatch('onCreate');
      if (me.autoShow) {
        me.show();
      }
    }, 0);
  },
  // 初始化dom 该方法需要继承
  _initDom: function () {
    this.container = null;
  },
  // 初始化事件 该方法需要继承
  _initEvent: function () {},
  // 显示pop
  show: function () {
    // 如果已经开启状态 或者 onBeforeShow 返回 false 则不会打开
    if (this.isOpened || this.dispatch('onBeforeShow') === false) {return;}
    if (this._closeTimer) {
      window.clearTimeout(this._closeTimer);
      this._closeTimer = null;
    }
    window.clearTimeout(this._openTimer);
    var openDelay = Number(this.openDelay);
    if (openDelay > 0) {
      // 执行延迟打开逻辑
      var me = this;
      this._openTimer = window.setTimeout(function () {
        me._openTimer = null;
        me._doOpen();
      }, openDelay);
    } else {
      this._doOpen();
    }
  },
  // 执行显示pop
  _doOpen: function () {
    if (this.willShow && !this.willShow()) {return;}
    this.isOpening = true;
    var container = this.container;
    var modal = this.modal;
    var zIndex = this.zIndex;
    if (zIndex) {
      popManager.zIndex = zIndex;
    }
    if (modal) {
      if (this.isClosing) {
        // 如果正在执行关闭，则立刻关闭
        popManager.closePop(this.instanceId());
        this.isClosing = false;
      }
      var fixOverlay = this.fixOverlay;
      var nextZIndex = popManager.nextZIndex();
      // 打开遮罩层
      popManager.openOverlay(
        this.instanceId(),
        fixOverlay ? undefined : nextZIndex,
        this.modalAppendToBody ? undefined : this.warp,
        this.modalClass,
        this.modalFade
      );
      if (this.lockScroll) {
        // 滚动锁定
        if (!this.bodyOverflow) {
          // this.bodyPaddingRight = document.body.style.paddingRight;
          this.bodyOverflow = document.body.style.overflow;
        }
        // scrollBarWidth = util.getScrollBarWidth();
        // var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
        // if (scrollBarWidth > 0 && bodyHasOverflow) {
        //     document.body.style.paddingRight = scrollBarWidth + 'px';
        // }
        document.body.style.overflow = 'hidden';
      }
    }
    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'absolute';
    }
    this.isOpened = true;
    container.style.zIndex = popManager.nextZIndex();
    // 各个子类自己定义_onOpen
    this._onOpen && this._onOpen();
    this.dispatch('onShow');
    if (this.timeout) {
      // 如果有定时关闭
      var me = this;
      this._timeout = window.setTimeout(function () {
        me.close();
        me._timeout = null;
      }, this.timeout);
    }
    if (!this.transition) {
      // 如果有过渡
      this._doAfterOpen();
    }
  },
  // 打开完毕后操作
  _doAfterOpen: function () {
    this.isOpening = false;
  },
  // 关闭
  close: function () {
    if (!this.isOpened || this.dispatch('onBeforeClose') === false) {
      return;
    }
    if (this._openTimer !== null) {
      window.clearTimeout(this._openTimer);
      this._openTimer = null;
    }
    window.clearTimeout(this._closeTimer);
    window.clearTimeout(this._timeout);
    var closeDelay = Number(this.closeDelay);
    if (closeDelay > 0) {
      var me = this;
      this._closeTimer = window.setTimeout(function () {
        me._closeTimer = null;
        me._doClose();
      }, closeDelay);
    } else {
      this._doClose();
    }
  },
  // 执行关闭
  _doClose: function () {
    if (this.willClose && !this.willClose()) {return;}
    this.isClosing = true;
    if (this.lockScroll) {
      var me = this;
      window.setTimeout(function () {
        if (me.modal && me.bodyOverflow !== 'hidden') {
          document.body.style.overflow = me.bodyOverflow;
          // document.body.style.paddingRight = me.bodyPaddingRight;
        }
        me.bodyOverflow = null;
        // me.bodyPaddingRight = null;
      }, 300);
    }
    this._onClose && this._onClose();
    this.isOpened = false;
    this.dispatch('onClose');
    if (!this.transition) {
      this._doAfterClose();
    }
  },
  // 关闭完毕后操作
  _doAfterClose: function () {
    popManager.closeOverlay(this.instanceId());
    this.isClosing = false;
    this.destoryOnClose ? this.destory() : '';
  },
  // 销毁
  destory: function () {
    this.dispatch('onDestory');
    popManager.deregister(this.instanceId());
    popManager.closeOverlay(this.instanceId());
    if (this.modal && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
      document.body.style.overflow = this.bodyOverflow;
      // document.body.style.paddingRight = this.bodyPaddingRight;
    }
    this.bodyOverflow = null;
    // this.bodyPaddingRight = null;
    if (this.container) {this.container.parentNode.removeChild(this.container);}
    delete this.container;
    delete this;
  }
});
export default Popbase;
