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
/******/ 	return __webpack_require__(__webpack_require__.s = "MjHY");
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

/***/ "MjHY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("lUdw");

var _index = __webpack_require__("kbIk");

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__("vG4S");

var _popbase = __webpack_require__("oiW4");

var _popbase2 = _interopRequireDefault(_popbase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultOptions = {
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

var Spin = function (_Popbase) {
  _inherits(Spin, _Popbase);

  function Spin(options) {
    _classCallCheck(this, Spin);

    var newOptions = (0, _util.merge)({}, defaultOptions, options);

    var _this = _possibleConstructorReturn(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, newOptions));

    _this._className = 'Spin';
    return _this;
  }

  // 初始化dom


  _createClass(Spin, [{
    key: '_initDom',
    value: function _initDom() {
      this.container = document.createElement('div');
      this.container.className = 'lmui-spin ' + this.containerClass;
      this.container.innerHTML = (0, _util.render)(_index2.default, this);
      this.warp.appendChild(this.container);
    }
  }, {
    key: '_onOpen',
    value: function _onOpen() {
      var _this2 = this;

      this.transition = true;
      (0, _util.addClass)(this.container, 'lmui-spin-enter');
      window.setTimeout(function () {
        _this2.transition = false;
        _this2._doAfterOpen();
      }, 300);
    }
  }, {
    key: '_onClose',
    value: function _onClose() {
      var _this3 = this;

      this.transition = true;
      (0, _util.removeClass)(this.container, 'lmui-spin-enter');
      window.setTimeout(function () {
        _this3.transition = false;
        _this3._doAfterClose();
      }, 300);
    }
  }, {
    key: 'setType',
    value: function setType(type) {
      (0, _util.addClass)(this.container.firstElementChild, type);
      (0, _util.removeClass)(this.container.firstElementChild, this.type);
      this.type = type;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      if (text) {
        this.container.lastElementChild.style.display = 'block';
      } else {
        this.container.lastElementChild.style.display = 'none';
      }
      this.container.lastElementChild.innerHTML = text;
      this.text = text;
    }
  }]);

  return Spin;
}(_popbase2.default);

exports.default = Spin;
module.exports = exports['default'];

/***/ }),

/***/ "ONyo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @namespace
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name ClassManager
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _util = __webpack_require__("vG4S");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClassManager = function ClassManager() {
  var instanceId = 0 | Math.random() * 998;
  this.getNewInstanceId = function () {
    return instanceId++;
  };
};
var classManager = new ClassManager();

var ClassBase = function () {
  function ClassBase(options) {
    _classCallCheck(this, ClassBase);

    (0, _util.merge)(this, options);
    this._className = 'ClassBase';
    this._instanceId = classManager.getNewInstanceId();
  }

  _createClass(ClassBase, [{
    key: 'className',
    value: function className() {
      return this._className;
    }
  }, {
    key: 'instanceId',
    value: function instanceId() {
      return this._instanceId;
    }
  }]);

  return ClassBase;
}();

var EventClass = function (_ClassBase) {
  _inherits(EventClass, _ClassBase);

  function EventClass(options) {
    _classCallCheck(this, EventClass);

    var _this = _possibleConstructorReturn(this, (EventClass.__proto__ || Object.getPrototypeOf(EventClass)).call(this, options));

    _this._className = 'EventClass';
    _this._handlers = {};
    _this._eventCache = {};
    return _this;
  }

  // 绑定监听一次


  _createClass(EventClass, [{
    key: 'one',
    value: function one(eventName, handler, context) {
      if (!eventName || !handler) {
        return this;
      }
      var _handlers = this._handlers;

      if (!_handlers[eventName]) {
        _handlers[eventName] = [];
      }
      _handlers[eventName].push({
        context: context || this,
        handler: handler,
        one: true
      });
      return this;
    }

    // 绑定监听

  }, {
    key: 'bind',
    value: function bind(eventName, handler, context) {
      if (!eventName || !handler) {
        return this;
      }
      var _handlers = this._handlers;

      if (!_handlers[eventName]) {
        _handlers[eventName] = [];
      }
      _handlers[eventName].push({
        context: context || this,
        handler: handler,
        one: false
      });
      return this;
    }

    // 接触绑定

  }, {
    key: 'unbind',
    value: function unbind(eventName, handler) {
      var _handlers = this._handlers;

      if (!eventName) {
        this._handlers = {};
        return this;
      }
      if (handler) {
        if (_handlers[eventName]) {
          var newList = [];
          for (var i = 0, l = _handlers[eventName].length; i < l; i++) {
            if (_handlers[eventName][i]['handler'] !== handler) {
              newList.push(_handlers[eventName][i]);
            }
          }
          _handlers[eventName] = newList;
        }
        if (_handlers[eventName] && _handlers[eventName].length === 0) {
          delete _handlers[eventName];
        }
      } else {
        delete _handlers[eventName];
      }
      return this;
    }

    // 事件派发

  }, {
    key: 'dispatch',
    value: function dispatch(eventName) {
      var falseNum = 0;
      if (!eventName) {
        return falseNum === 0;
      }
      var _handler = this._handlers[eventName];
      if (_handler) {
        // const args = Array.prototype.slice.call(arguments, 1);
        var len = _handler.length;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        for (var i = 0; i < len;) {
          if (_handler[i]['handler'].apply(_handler[i]['context'], args) === false) {
            falseNum++;
          }
          if (_handler[i]['one']) {
            _handler.splice(i, 1);
            len--;
          } else {
            i++;
          }
        }
      }
      return falseNum === 0;
    }

    // 指定上下文的事件派发

  }, {
    key: 'dispatchWithContext',
    value: function dispatchWithContext(eventName, context) {
      var falseNum = 0;
      if (!eventName) {
        return falseNum === 0;
      }
      var _handler = this._handlers[eventName];
      if (this._handler[eventName]) {
        // const context = arguments[arguments.length - 1];
        // const args = Array.prototype.slice.call(arguments, 1, arguments.length - 1);
        var len = _handler.length;

        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        for (var i = 0; i < len;) {
          if (_handler[i]['handler'].apply(context, args) === false) {
            falseNum++;
          }
          if (_handler[i]['one']) {
            _handler.splice(i, 1);
            len--;
          } else {
            i++;
          }
        }
      }
      return falseNum === 0;
    }

    // 动态添加自定义事件缓存
    // eventNames 仅仅支持字符串类型数据，空格分割的函数名称，建议事件名都添加 on/before/after 等明显前缀

  }, {
    key: '_createEvent',
    value: function _createEvent(eventNames) {
      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      if (typeof eventNames !== 'string') {
        return;
      }
      var me = this;
      var cache = me._eventCache;
      var eventList = eventNames.split(' ');
      var len = eventList.length;
      for (var i = 0; i < len; i++) {
        var eventName = eventList[i];
        cache[eventName] = cache[eventName] || [];
        me[eventName] = function (ename) {
          return function (fn) {
            if (Object.prototype.toString.call(fn) === '[object Function]') {
              me.bind(ename, fn);
              return me;
            }
            return me.dispatch.apply(me, _toConsumableArray([ename].concat(Array.prototype.slice.call(args, 0))));
          };
        }(eventName);
      }
    }
  }]);

  return EventClass;
}(ClassBase);

exports.default = EventClass;
module.exports = exports['default'];

/***/ }),

/***/ "ZXKU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kbIk":
/***/ (function(module, exports) {

module.exports = "<div class=\"lmui-spin-container <%=type%>\">\n    <svg class=\"loadding\" viewBox=\"0 0 200 200\">\n        <circle cx=\"100\" cy=\"100\" r=\"95\"></circle>\n        <g class=\"right\">\n            <path d=\"m85,132l61,-74\" />\n            <path d=\"m85,132l-36,-42\" />\n        </g>\n        <g class=\"wrong\">\n            <path d=\"m100,100l-34,-34\" />\n            <path d=\"m100,100l34,34\" />\n            <path d=\"m100,100l-34,34\" />\n            <path d=\"m100,100l34,-34\" />\n        </g>\n    </svg>\n</div>\n<p class=\"lmui-spin-text\" <% if(!text) { %>style=\"display:none;\"<% } %>><%=text%></p>\n";

/***/ }),

/***/ "lUdw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "oiW4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("vG4S");

var _eventclass = __webpack_require__("ONyo");

var _eventclass2 = _interopRequireDefault(_eventclass);

var _popManager = __webpack_require__("DbvC");

var _popManager2 = _interopRequireDefault(_popManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultOptions = {
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

var Popbase = function (_EventClass) {
  _inherits(Popbase, _EventClass);

  function Popbase(options) {
    _classCallCheck(this, Popbase);

    var newOptions = (0, _util.merge)({}, defaultOptions, options);

    var _this = _possibleConstructorReturn(this, (Popbase.__proto__ || Object.getPrototypeOf(Popbase)).call(this, newOptions));

    _this._className = 'Popbase';
    _popManager2.default.register(_this.instanceId(), _this);
    _this._createEvent('onCreate onBeforeShow onShow onBeforeClose onClose onDestory');
    _this._initDom();
    _this._initEvent();
    window.setTimeout(function () {
      _this.dispatch('onCreate');
      if (_this.autoShow) {
        _this.show();
      }
    }, 0);
    return _this;
  }

  // 初始化dom 该方法需要继承


  _createClass(Popbase, [{
    key: '_initDom',
    value: function _initDom() {
      this.container = null;
    }

    // 初始化事件 该方法需要继承

  }, {
    key: '_initEvent',
    value: function _initEvent() {
      console.log(this);
    }

    // 显示pop

  }, {
    key: 'show',
    value: function show() {
      // 如果已经开启状态 或者 onBeforeShow 返回 false 则不会打开
      if (this.isOpened || this.dispatch('onBeforeShow') === false) {
        return;
      }
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
    }

    // 执行显示pop

  }, {
    key: '_doOpen',
    value: function _doOpen() {
      var _this2 = this;

      if (this.willShow && !this.willShow()) {
        return;
      }
      this.isOpening = true;
      var container = this.container,
          modal = this.modal,
          zIndex = this.zIndex;

      if (zIndex) {
        _popManager2.default.zIndex = zIndex;
      }
      if (modal) {
        if (this.isClosing) {
          // 如果正在执行关闭，则立刻关闭
          _popManager2.default.closePop(this.instanceId());
          this.isClosing = false;
        }
        var fixOverlay = this.fixOverlay;

        var nextZIndex = _popManager2.default.nextZIndex();
        // 打开遮罩层
        _popManager2.default.openOverlay(this.instanceId(), fixOverlay ? undefined : nextZIndex, this.modalAppendToBody ? undefined : this.warp, this.modalClass, this.modalFade);
        if (this.lockScroll) {
          // 滚动锁定
          if (!this.bodyOverflow) {
            // this.bodyPaddingRight = document.body.style.paddingRight;
            this.bodyOverflow = document.body.style.overflow;
          }
          // scrollBarWidth = getScrollBarWidth();
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
      container.style.zIndex = _popManager2.default.nextZIndex();
      // 各个子类自己定义_onOpen
      this._onOpen && this._onOpen();
      this.dispatch('onShow');
      if (this.timeout) {
        // 如果有定时关闭
        this._timeout = window.setTimeout(function () {
          _this2.close();
          _this2._timeout = null;
        }, this.timeout);
      }
      if (!this.transition) {
        // 如果有过渡
        this._doAfterOpen();
      }
    }

    // 打开完毕后操作

  }, {
    key: '_doAfterOpen',
    value: function _doAfterOpen() {
      this.isOpening = false;
    }

    // 关闭

  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

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
        this._closeTimer = window.setTimeout(function () {
          _this3._closeTimer = null;
          _this3._doClose();
        }, closeDelay);
      } else {
        this._doClose();
      }
    }

    // 执行关闭

  }, {
    key: '_doClose',
    value: function _doClose() {
      var _this4 = this;

      if (this.willClose && !this.willClose()) {
        return;
      }
      this.isClosing = true;
      if (this.lockScroll) {
        window.setTimeout(function () {
          if (_this4.modal && _this4.bodyOverflow !== 'hidden') {
            document.body.style.overflow = _this4.bodyOverflow;
            // document.body.style.paddingRight = this.bodyPaddingRight;
          }
          _this4.bodyOverflow = null;
          // this.bodyPaddingRight = null;
        }, 300);
      }
      this._onClose && this._onClose();
      this.isOpened = false;
      this.dispatch('onClose');
      if (!this.transition) {
        this._doAfterClose();
      }
    }

    // 关闭完毕后操作

  }, {
    key: '_doAfterClose',
    value: function _doAfterClose() {
      _popManager2.default.closeOverlay(this.instanceId());
      this.isClosing = false;
      if (this.destoryOnClose) {
        this.destory();
      }
    }

    // 销毁

  }, {
    key: 'destory',
    value: function destory() {
      this.dispatch('onDestory');
      _popManager2.default.deregister(this.instanceId());
      _popManager2.default.closeOverlay(this.instanceId());
      if (this.modal && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
        document.body.style.overflow = this.bodyOverflow;
        // document.body.style.paddingRight = this.bodyPaddingRight;
      }
      this.bodyOverflow = null;
      // this.bodyPaddingRight = null;
      if (this.container) {
        this.container.parentNode.removeChild(this.container);
      }
      delete this.container;
      delete this;
    }
  }]);

  return Popbase;
}(_eventclass2.default);

exports.default = Popbase;
module.exports = exports['default'];

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
//# sourceMappingURL=spin.js.map