/**
 * PopupManager
 */
'use strict';
import Style from './index.less';
import Util from '@js/util';
var initZ = 300;
var popManager = {
    //初始z值
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
    getInstance: function (id) {
        return this.instances[id];
    },
    // 注册弹出对象
    register: function (id, instance) {
        if (id && instance) {
            this.instances[id] = instance;
        }
    },
    // 注销弹出对象
    deregister: function (id) {
        if (id) {
            this.instances[id] = null;
            delete this.instances[id];
        }
    },
    // 获取zIndex
    nextZIndex: function () {
        return this.zIndex++;
    },
    // 背景dom被点击 关闭最新创建popup 
    closeCurrentPop: function () {
        var currentPop = this.popStack[this.popStack.length - 1];
        if (!currentPop) return;
        var instance = this.getInstance(currentPop.id);
        if (instance && instance.closeOnClickModal) {
            instance.close();
        }
    },
    // 打开一个遮罩层
    openOverlay: function (id, zIndex, dom, modalClass, modalFade) {
        if (!id /* || zIndex === undefined */ ) return;
        // 判断id唯一性
        for (var i = 0, j = this.popStack.length; i < j; i++) {
            var item = this.popStack[i];
            if (item.id === id) {
                return;
            }
        }
        this.modalFade = modalFade;
        var overlayDom = this.getOverlay();
        Util.addClass(overlayDom, 'lmui-overlay');
        if (this.modalFade && !this.hasOverlay) {
            Util.addClass(overlayDom, 'lmui-overlay-enter');
        }
        if (modalClass) {
            var classArr = modalClass.trim().split(/\s+/),
                classArrLength = classArr.length;
            for (var i = 0; i < classArrLength; i++) {
                var item = classArr[i];
                Util.addClass(overlayDom, item)
            }
        }
        window.setTimeout(function () {
            Util.removeClass(overlayDom, 'lmui-overlay-enter');
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
    closeOverlay: function (id) {
        var popStack = this.popStack;
        var overlayDom = this.getOverlay();
        if (popStack.length > 0) {
            var currentPop = popStack[popStack.length - 1];
            if (currentPop.id === id) {
                if (currentPop.modalClass) {
                    var classArr = currentPop.modalClass.trim().split(/\s+/),
                        classArrLength = classArr.length;
                    for (var i = 0; i < classArrLength; i++) {
                        var item = classArr[i];
                        Util.removeClass(overlayDom, item)
                    }
                }
                popStack.pop();
                if (popStack.length > 0) {
                    var pop = popStack[popStack.length - 1];
                    if (pop.fixOverlay) {
                        overlayDom.style.zIndex = initZ;
                    } else {
                        overlayDom.style.zIndex = popStack[popStack.length - 1].zIndex;
                    }
                }
            } else {
                for (var i = popStack.length - 1; i >= 0; i--) {
                    if (popStack[i].id === id) {
                        popStack.splice(i, 1);
                        break;
                    }
                }
            }
        }
        if (popStack.length === 0) {
            if (this.modalFade) {
                Util.addClass(overlayDom, 'lmui-overlay-leave');
            }
            window.setTimeout(function () {
                if (popStack.length === 0) {
                    if (overlayDom.parentNode) overlayDom.parentNode.removeChild(overlayDom);
                    overlayDom.style.display = 'none';
                    this.overlayDom = undefined;
                }
                Util.removeClass(overlayDom, 'lmui-overlay-leave');
            }, 300);
        }
    },
    // 获取遮罩层dom 如果没有则创建
    getOverlay: function () {
        var overlayDom = this.overlayDom;
        if (overlayDom) {
            this.hasOverlay = true;
        } else {
            this.hasOverlay = false;
            overlayDom = document.createElement('div');
            this.overlayDom = overlayDom;
            overlayDom.addEventListener('touchmove', function (event) {
                event.preventDefault();
                event.stopPropagation();
            });
            var me = this;
            overlayDom.addEventListener('click', function () {
                me.closeCurrentPop && me.closeCurrentPop();
            });
        }
        return overlayDom;
    }
};

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) { // ESC
        if (popManager.popStack.length > 0) {
            var currentPop = popManager.popStack[popManager.popStack.length - 1];
            if (!currentPop) return;
            var instance = popManager.getInstance(currentPop.id);
            if (instance.closeOnPressEscape) {
                instance.close();
            }
        }
    }
});
// window.popManager = popManager;
export default popManager;

