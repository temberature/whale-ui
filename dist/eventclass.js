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
/******/ 	return __webpack_require__(__webpack_require__.s = "ONyo");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=eventclass.js.map