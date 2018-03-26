(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lmfe.ui", [], factory);
	else if(typeof exports === 'object')
		exports["lmfe.ui"] = factory();
	else
		root["lmfe.ui"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "DbvC");
/******/ })
/************************************************************************/
/******/ ({

/***/ "DbvC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * PopupManager
 */


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("ZXKU");

var _util = __webpack_require__("vG4S");

var initZ = 300;
var popManager = {
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
  getInstance: function getInstance(id) {
    return this.instances[id];
  },
  // 注册弹出对象
  register: function register(id, instance) {
    if (id && instance) {
      this.instances[id] = instance;
    }
  },
  // 注销弹出对象
  deregister: function deregister(id) {
    if (id) {
      this.instances[id] = null;
      delete this.instances[id];
    }
  },
  // 获取zIndex
  nextZIndex: function nextZIndex() {
    return this.zIndex++;
  },
  // 背景dom被点击 关闭最新创建popup
  closeCurrentPop: function closeCurrentPop() {
    var currentPop = this.popStack[this.popStack.length - 1];
    if (!currentPop) {
      return;
    }
    var instance = this.getInstance(currentPop.id);
    if (instance && instance.closeOnClickModal) {
      instance.close();
    }
  },
  // 打开一个遮罩层
  openOverlay: function openOverlay(id, zIndex, dom, modalClass, modalFade) {
    if (!id /* || zIndex === undefined */) {
        return;
      }
    // 判断id唯一性
    for (var i = 0, popLength = this.popStack.length; i < popLength; i++) {
      var popItem = this.popStack[i];
      if (popItem.id === id) {
        return;
      }
    }
    this.modalFade = modalFade;
    var overlayDom = this.getOverlay();
    (0, _util.addClass)(overlayDom, 'lmui-overlay');
    if (this.modalFade && !this.hasOverlay) {
      (0, _util.addClass)(overlayDom, 'lmui-overlay-enter');
    }
    if (modalClass) {
      var classArr = modalClass.trim().split(/\s+/);
      var classArrLength = classArr.length;
      for (var calssIndex = 0; calssIndex < classArrLength; calssIndex++) {
        var classItem = classArr[calssIndex];
        (0, _util.addClass)(overlayDom, classItem);
      }
    }
    window.setTimeout(function () {
      (0, _util.removeClass)(overlayDom, 'lmui-overlay-enter');
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
  closeOverlay: function closeOverlay(id) {
    var popStack = this.popStack;

    var overlayDom = this.getOverlay();
    if (popStack.length > 0) {
      var currentPop = popStack[popStack.length - 1];
      if (currentPop.id === id) {
        if (currentPop.modalClass) {
          var classArr = currentPop.modalClass.trim().split(/\s+/);
          var classArrLength = classArr.length;
          for (var i = 0; i < classArrLength; i++) {
            var item = classArr[i];
            (0, _util.removeClass)(overlayDom, item);
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
        for (var _i = popStack.length - 1; _i >= 0; _i--) {
          if (popStack[_i].id === id) {
            popStack.splice(_i, 1);
            break;
          }
        }
      }
    }
    if (popStack.length === 0) {
      if (this.modalFade) {
        (0, _util.addClass)(overlayDom, 'lmui-overlay-leave');
      }
      var me = this;
      window.setTimeout(function () {
        if (popStack.length === 0) {
          if (overlayDom.parentNode) {
            overlayDom.parentNode.removeChild(overlayDom);
          }
          overlayDom.style.display = 'none';
          // 为了避免在300ms内调用新的getOverlay这里需要强调为me.
          me.overlayDom = null;
        }
        (0, _util.removeClass)(overlayDom, 'lmui-overlay-leave');
      }, 300);
    }
  },
  // 获取遮罩层dom 如果没有则创建
  getOverlay: function getOverlay() {
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
  if (event.keyCode === 27) {
    // ESC
    if (popManager.popStack.length > 0) {
      var currentPop = popManager.popStack[popManager.popStack.length - 1];
      if (!currentPop) {
        return;
      }
      var instance = popManager.getInstance(currentPop.id);
      if (instance.closeOnPressEscape) {
        instance.close();
      }
    }
  }
});

exports.default = popManager;
module.exports = exports['default'];

/***/ }),

/***/ "ZXKU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vG4S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Util = {
  merge: function merge(target) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    for (var i = 0, j = args.length; i < j; i++) {
      var source = args[i] || {};
      for (var prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          var value = source[prop];
          if (value !== undefined) {
            target[prop] = value;
          }
        }
      }
    }
    return target;
  },
  hasClass: function hasClass(el, cls) {
    if (!el || !cls) {
      return false;
    }
    if (cls.indexOf(' ') !== -1) {
      throw new Error('className should not contain space.');
    }
    if (el.classList) {
      return el.classList.contains(cls);
    }
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  },
  addClass: function addClass(el, cls) {
    if (!el) {
      return;
    }
    var curClass = el.className;
    var classes = (cls || '').split(' ');
    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName) {
        continue;
      }

      if (el.classList) {
        el.classList.add(clsName);
      } else if (!this.hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
    if (!el.classList) {
      el.className = curClass;
    }
  },
  removeClass: function removeClass(el, cls) {
    if (!el || !cls) {
      return;
    }
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';

    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName) {
        continue;
      }

      if (el.classList) {
        el.classList.remove(clsName);
      } else if (this.hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
    if (!el.classList) {
      el.className = String.prototype.trim.call(curClass);
    }
  },
  scrollBarWidth: undefined,
  getScrollBarWidth: function getScrollBarWidth() {
    if (this.scrollBarWidth !== undefined) {
      return this.scrollBarWidth;
    }

    var outer = document.createElement('div');
    // outer.className = 'el-scrollbar__wrap';
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    var inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  },
  render: function render(tpl, data) {
    var code = 'var p=[];with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, "',$1,'").split('\t').join("');").split('%>').join("p.push('").split('\r').join("\\'") + '\');}return p.join(\'\');';
    return new Function(code).apply(data);
  }
};
exports.default = Util;
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=popManager.js.map