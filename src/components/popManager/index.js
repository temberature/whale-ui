/**
 * PopupManager
 */
'use strict';
import './index.less';
import { addClass, removeClass } from '../../common/util';
const initZ = 300;
const popManager = {
  // 初始z值
  zIndex: initZ,
  // 是否模态
  modalFade: true,
  // 弹出层实例对象
  instances: {},
  // 弹出层实例对象
  popStack: [],
  // 是否显示了遮罩层
  hasOverlay: false,
  // 遮罩层dom对象
  overlayDom: null,
  // id获取实例
  getInstance: function(id) {
    return this.instances[id];
  },
  // 注册弹出对象
  register: function(id, instance) {
    if (id && instance) {
      this.instances[id] = instance;
    }
  },
  // 注销弹出对象
  deregister: function(id) {
    if (id) {
      this.instances[id] = null;
      delete this.instances[id];
    }
  },
  // 获取zIndex
  nextZIndex: function() {
    return this.zIndex++;
  },
  // 背景dom被点击 关闭最新创建popup
  closeCurrentPop: function() {
    const currentPop = this.popStack[this.popStack.length - 1];
    if (!currentPop) {
      return;
    }
    const instance = this.getInstance(currentPop.id);
    if (instance && instance.closeOnClickModal) {
      instance.close();
    }
  },
  // 打开一个遮罩层
  openOverlay: function(id, zIndex, dom, modalClass, modalFade) {
    if (!id /* || zIndex === undefined */) {
      return;
    }
    // 判断id唯一性
    for (let i = 0, popLength = this.popStack.length; i < popLength; i++) {
      const popItem = this.popStack[i];
      if (popItem.id === id) {
        return;
      }
    }
    this.modalFade = modalFade;
    const overlayDom = this.getOverlay();
    addClass(overlayDom, 'lmui-overlay');
    if (this.modalFade && !this.hasOverlay) {
      addClass(overlayDom, 'lmui-overlay-enter');
    }
    if (modalClass) {
      const classArr = modalClass.trim().split(/\s+/);
      const classArrLength = classArr.length;
      for (let calssIndex = 0; calssIndex < classArrLength; calssIndex++) {
        const classItem = classArr[calssIndex];
        addClass(overlayDom, classItem);
      }
    }
    window.setTimeout(() => {
      removeClass(overlayDom, 'lmui-overlay-enter');
    }, 300);
    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(overlayDom);
    } else {
      document.body.appendChild(overlayDom);
    }
    overlayDom.style.zIndex = zIndex || initZ;
    overlayDom.style.display = '';
    this.popStack.push({
      id: id,
      zIndex: zIndex || initZ,
      modalClass: modalClass
    });
  },
  // 关闭一个遮罩层
  closeOverlay: function(id) {
    const { popStack } = this;
    const overlayDom = this.getOverlay();
    if (popStack.length > 0) {
      const currentPop = popStack[popStack.length - 1];
      if (currentPop.id === id) {
        if (currentPop.modalClass) {
          const classArr = currentPop.modalClass.trim().split(/\s+/);
          const classArrLength = classArr.length;
          for (let i = 0; i < classArrLength; i++) {
            const item = classArr[i];
            removeClass(overlayDom, item);
          }
        }
        popStack.pop();
        if (popStack.length > 0) {
          const pop = popStack[popStack.length - 1];
          if (pop.fixOverlay) {
            overlayDom.style.zIndex = initZ;
          } else {
            overlayDom.style.zIndex = popStack[popStack.length - 1].zIndex;
          }
        }
      } else {
        for (let i = popStack.length - 1; i >= 0; i--) {
          if (popStack[i].id === id) {
            popStack.splice(i, 1);
            break;
          }
        }
      }
    }
    if (popStack.length === 0) {
      if (this.modalFade) {
        addClass(overlayDom, 'lmui-overlay-leave');
      }
      const me = this;
      window.setTimeout(() => {
        if (popStack.length === 0) {
          if (overlayDom.parentNode) {
            overlayDom.parentNode.removeChild(overlayDom);
          }
          overlayDom.style.display = 'none';
          // 为了避免在300ms内调用新的getOverlay这里需要强调为me.
          me.overlayDom = null;
        }
        removeClass(overlayDom, 'lmui-overlay-leave');
      }, 300);
    }
  },
  // 获取遮罩层dom 如果没有则创建
  getOverlay: function() {
    let { overlayDom } = this;
    if (overlayDom) {
      this.hasOverlay = true;
    } else {
      this.hasOverlay = false;
      overlayDom = document.createElement('div');
      this.overlayDom = overlayDom;
      overlayDom.addEventListener('touchmove', (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
      const me = this;
      overlayDom.addEventListener('click', () => {
        me.closeCurrentPop && me.closeCurrentPop();
      });
    }
    return overlayDom;
  }
};

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    // ESC
    if (popManager.popStack.length > 0) {
      const currentPop = popManager.popStack[popManager.popStack.length - 1];
      if (!currentPop) {
        return;
      }
      const instance = popManager.getInstance(currentPop.id);
      if (instance.closeOnPressEscape) {
        instance.close();
      }
    }
  }
});

export default popManager;
