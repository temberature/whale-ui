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
/******/ 	return __webpack_require__(__webpack_require__.s = "DUT/");
/******/ })
/************************************************************************/
/******/ ({

/***/ "DUT/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventclass = __webpack_require__("ONyo");

var _eventclass2 = _interopRequireDefault(_eventclass);

var _util = __webpack_require__("vG4S");

var _scroller = __webpack_require__("S3dB");

var _scroller2 = _interopRequireDefault(_scroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultOptions = {
  // 是否支持横向滚动
  scrollingX: false,
  // 是否支持竖向滚动
  scrollingY: true,
  // 是否开启补间动画（减速，回弹，缩放和滚动动画）
  animating: true,
  // 动画时长
  animationDuration: 250,
  // 是否开启弹性（无弹性不下拉刷新）
  bouncing: true,
  // 是否锁定（如果用户在开始时只轻微移动其中一个，则启用锁定到主轴）
  locking: true,
  // 是否启用翻页模式类似于轮播图
  paging: false,
  // 是否捕捉用户可用的整数像素值
  snapping: false,
  // 是否开启缩放功能
  zooming: false,
  // 缩放最小值
  minZoom: 0.5,
  // 缩放最大值
  maxZoom: 3,
  // 启用下拉刷新
  PullToRefresh: false,
  // 下拉刷新高度（像素）
  PullToRefreshHeight: 50
};

var renderScroll = function () {
  var docStyle = document.documentElement.style;
  var engine = void 0;
  if (window.opera && Object.prototype.toString.call(window.opera) === '[object Opera]') {
    engine = 'presto';
  } else if ('MozAppearance' in docStyle) {
    engine = 'gecko';
  } else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
  } else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
  }
  var vendorPrefix = defaultOptions.vendorPrefix = {
    trident: 'ms',
    gecko: 'Moz',
    webkit: 'Webkit',
    presto: 'O'
  }[engine];
  var helperElem = document.createElement('div');
  var undef = void 0;
  var perspectiveProperty = vendorPrefix + 'Perspective';
  var transformProperty = vendorPrefix + 'Transform';
  if (helperElem.style[perspectiveProperty] !== undef) {
    return function (content, left, top, zoom) {
      content.style[transformProperty] = 'translate3d(' + -left + 'px,' + -top + 'px,0) scale(' + zoom + ')';
    };
  }
  if (helperElem.style[transformProperty] !== undef) {
    return function (content, left, top, zoom) {
      content.style[transformProperty] = 'translate(' + -left + 'px,' + -top + 'px) scale(' + zoom + ')';
    };
  }
  return function (content, left, top, zoom) {
    content.style.marginLeft = left ? -left / zoom + 'px' : '';
    content.style.marginTop = top ? -top / zoom + 'px' : '';
    content.style.zoom = zoom || '';
  };
}();

var EasyScroller = function (_EventClass) {
  _inherits(EasyScroller, _EventClass);

  function EasyScroller(content, options) {
    _classCallCheck(this, EasyScroller);

    var _this = _possibleConstructorReturn(this, (EasyScroller.__proto__ || Object.getPrototypeOf(EasyScroller)).call(this));

    _this._className = 'Scroller';
    _this._createEvent('onCreate onScroll onScrollOver onRefreshLess onRefresh onRefreshMore');
    _this.content = content;
    // 默认会把父节点当成滚动的外部容器
    _this.container = content.parentNode;
    _this.options = (0, _util.merge)({}, defaultOptions, options);
    // create Scroller instance
    _this.initScroller();
    // bind events
    _this.bindEvents();
    // the content element needs a correct transform origin for zooming
    _this.content.style[defaultOptions.vendorPrefix + 'TransformOrigin'] = 'left top';
    // reflow for the first time
    _this.reflow();
    window.setTimeout(function () {
      _this.dispatch('onCreate');
    }, 0);
    return _this;
  }

  _createClass(EasyScroller, [{
    key: 'initScroller',
    value: function initScroller() {
      var _this2 = this;

      this.options.scrollingComplete = function () {
        _this2.dispatch('onScrollOver');
      };
      this.scroller = new _scroller2.default(function (left, top, zoom) {
        _this2.dispatch('onScroll', left, top, zoom);
        _this2._render(left, top, zoom);
      }, this.options);
      if (this.options.PullToRefresh) {
        this.scroller.activatePullToRefresh(this.options.PullToRefreshHeight, function () {
          _this2.dispatch('onRefreshMore');
        }, function () {
          _this2.dispatch('onRefreshLess');
        }, function () {
          _this2.dispatch('onRefresh');
        });
      }
    }
  }, {
    key: 'finishPullToRefresh',
    value: function finishPullToRefresh() {
      this.options.PullToRefresh && this.scroller.finishPullToRefresh();
    }
  }, {
    key: 'setDimensions',
    value: function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {
      this.scroller.setDimensions(clientWidth, clientHeight, contentWidth, contentHeight);
    }
  }, {
    key: '_render',
    value: function _render(left, top, zoom) {
      renderScroll(this.content, left, top, zoom);
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var me = this;
      // reflow handling
      window.addEventListener('resize', function () {
        me.reflow();
      }, false);
      // touch devices bind touch events
      if ('ontouchstart' in window) {
        this.container.addEventListener('touchstart', function (e) {
          // Don't react if initial down happens on a form element
          if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
            return;
          }
          // reflow since the container may have changed
          me.reflow();
          me.scroller.doTouchStart(e.touches, e.timeStamp);
        }, false);
        this.container.addEventListener('touchmove', function (e) {
          e.preventDefault();
          me.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
        }, false);
        this.container.addEventListener('touchend', function (e) {
          me.scroller.doTouchEnd(e.timeStamp);
        }, false);
        this.container.addEventListener('touchcancel', function (e) {
          me.scroller.doTouchEnd(e.timeStamp);
        }, false);
        // non-touch bind mouse events
      } else {
        var mousedown = false;
        this.container.addEventListener('mousedown', function (e) {
          if (e.target.tagName.match(/input|textarea|select/i)) {
            return;
          }
          me.scroller.doTouchStart([{
            pageX: e.pageX,
            pageY: e.pageY
          }], e.timeStamp);
          mousedown = true;
          // reflow since the container may have changed
          me.reflow();
          e.preventDefault();
        }, false);
        document.addEventListener('mousemove', function (e) {
          if (!mousedown) {
            return;
          }
          me.scroller.doTouchMove([{
            pageX: e.pageX,
            pageY: e.pageY
          }], e.timeStamp);
          mousedown = true;
        }, false);
        document.addEventListener('mouseup', function (e) {
          if (!mousedown) {
            return;
          }
          me.scroller.doTouchEnd(e.timeStamp);
          mousedown = false;
        }, false);
        this.container.addEventListener('mousewheel', function (e) {
          if (me.option.zooming) {
            me.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
            e.preventDefault();
          }
        }, false);
      }
    }
  }, {
    key: 'reflow',
    value: function reflow() {
      // set the right scroller dimensions
      this.scroller.setDimensions(this.container.clientWidth, this.container.clientHeight, this.content.offsetWidth, this.options.PullToRefresh ? this.content.offsetHeight - 50 : this.content.offsetHeight);
      // refresh the position for zooming purposes
      var rect = this.container.getBoundingClientRect();
      this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop);
    }
  }]);

  return EasyScroller;
}(_eventclass2.default);

exports.default = EasyScroller;
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

/***/ "S3dB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animate = __webpack_require__("Z4Qv");

var _animate2 = _interopRequireDefault(_animate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOOP = function NOOP() {};

/**
 * A pure logic 'component' for 'virtual' scrolling/zooming.
 */
var Scroller = function Scroller(callback, options) {
  this.__callback = callback;

  this.options = {
    /** Enable scrolling on x-axis */
    scrollingX: true,

    /** Enable scrolling on y-axis */
    scrollingY: true,

    /** Enable animations for deceleration, snap back, zooming and scrolling */
    animating: true,

    /** duration for animations triggered by scrollTo/zoomTo */
    animationDuration: 250,

    /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
    bouncing: true,

    /** Enable locking to the main axis if user moves only slightly on one of them at start */
    locking: true,

    /** Enable pagination mode (switching between full page content panes) */
    paging: false,

    /** Enable snapping of content to a configured pixel grid */
    snapping: false,

    /** Enable zooming of content via API, fingers and mouse wheel */
    zooming: false,

    /** Minimum zoom level */
    minZoom: 0.5,

    /** Maximum zoom level */
    maxZoom: 3,

    /** Multiply or decrease scrolling speed **/
    speedMultiplier: 1,

    /** Callback that is fired on the later of touch end or deceleration end,
            provided that another scrolling action has not begun. Used to know
            when to fade out a scrollbar. */
    scrollingComplete: NOOP,

    /** This configures the amount of change applied to deceleration when reaching boundaries  **/
    penetrationDeceleration: 0.03,

    /** This configures the amount of change applied to acceleration when reaching boundaries  **/
    penetrationAcceleration: 0.08
  };

  for (var key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      this.options[key] = options[key];
    }
  }
};

// Easing Equations (c) 2003 Robert Penner, all rights reserved.
// Open source under the BSD License.

/**
 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
 **/
var easeOutCubic = function easeOutCubic(pos) {
  return Math.pow(pos - 1, 3) + 1;
};

/**
 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
 **/
var easeInOutCubic = function easeInOutCubic(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3);
  }

  return 0.5 * (Math.pow(pos - 2, 3) + 2);
};

var members = {
  /*
    ---------------------------------------------------------------------------
        INTERNAL FIELDS :: STATUS
    ---------------------------------------------------------------------------
    */

  /** {Boolean} Whether only a single finger is used in touch handling */
  __isSingleTouch: false,

  /** {Boolean} Whether a touch event sequence is in progress */
  __isTracking: false,

  /** {Boolean} Whether a deceleration animation went to completion. */
  __didDecelerationComplete: false,

  /**
   * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when
   * a gesturestart event happens. This has higher priority than dragging.
   */
  __isGesturing: false,

  /**
   * {Boolean} Whether the user has moved by such a distance that we have enabled
   * dragging mode. Hint: It's only enabled after some pixels of movement to
   * not interrupt with clicks etc.
   */
  __isDragging: false,

  /**
   * {Boolean} Not touching and dragging anymore, and smoothly animating the
   * touch sequence using deceleration.
   */
  __isDecelerating: false,

  /**
   * {Boolean} Smoothly animating the currently configured change
   */
  __isAnimating: false,

  /*
    ---------------------------------------------------------------------------
        INTERNAL FIELDS :: DIMENSIONS
    ---------------------------------------------------------------------------
    */

  /** {Integer} Available outer left position (from document perspective) */
  __clientLeft: 0,

  /** {Integer} Available outer top position (from document perspective) */
  __clientTop: 0,

  /** {Integer} Available outer width */
  __clientWidth: 0,

  /** {Integer} Available outer height */
  __clientHeight: 0,

  /** {Integer} Outer width of content */
  __contentWidth: 0,

  /** {Integer} Outer height of content */
  __contentHeight: 0,

  /** {Integer} Snapping width for content */
  __snapWidth: 100,

  /** {Integer} Snapping height for content */
  __snapHeight: 100,

  /** {Integer} Height to assign to refresh area */
  __refreshHeight: null,

  /** {Boolean} Whether the refresh process is enabled when the event is released now */
  __refreshActive: false,

  /** {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release */
  __refreshActivate: null,

  /** {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled */
  __refreshDeactivate: null,

  /** {Function} Callback to execute to start the actual refresh. Call {@link #refreshFinish} when done */
  __refreshStart: null,

  /** {Number} Zoom level */
  __zoomLevel: 1,

  /** {Number} Scroll position on x-axis */
  __scrollLeft: 0,

  /** {Number} Scroll position on y-axis */
  __scrollTop: 0,

  /** {Integer} Maximum allowed scroll position on x-axis */
  __maxScrollLeft: 0,

  /** {Integer} Maximum allowed scroll position on y-axis */
  __maxScrollTop: 0,

  /* {Number} Scheduled left position (final position when animating) */
  __scheduledLeft: 0,

  /* {Number} Scheduled top position (final position when animating) */
  __scheduledTop: 0,

  /* {Number} Scheduled zoom level (final scale when animating) */
  __scheduledZoom: 0,

  /*
    ---------------------------------------------------------------------------
        INTERNAL FIELDS :: LAST POSITIONS
    ---------------------------------------------------------------------------
    */

  /** {Number} Left position of finger at start */
  __lastTouchLeft: null,

  /** {Number} Top position of finger at start */
  __lastTouchTop: null,

  /** {Date} Timestamp of last move of finger. Used to limit tracking range for deceleration speed. */
  __lastTouchMove: null,

  /** {Array} List of positions, uses three indexes for each state: left, top, timestamp */
  __positions: null,

  /*
    ---------------------------------------------------------------------------
        INTERNAL FIELDS :: DECELERATION SUPPORT
    ---------------------------------------------------------------------------
    */

  /** {Integer} Minimum left scroll position during deceleration */
  __minDecelerationScrollLeft: null,

  /** {Integer} Minimum top scroll position during deceleration */
  __minDecelerationScrollTop: null,

  /** {Integer} Maximum left scroll position during deceleration */
  __maxDecelerationScrollLeft: null,

  /** {Integer} Maximum top scroll position during deceleration */
  __maxDecelerationScrollTop: null,

  /** {Number} Current factor to modify horizontal scroll position with on every step */
  __decelerationVelocityX: null,

  /** {Number} Current factor to modify vertical scroll position with on every step */
  __decelerationVelocityY: null,

  /*
    ---------------------------------------------------------------------------
        PUBLIC API
    ---------------------------------------------------------------------------
    */

  /**
   * Configures the dimensions of the client (outer) and content (inner) elements.
   * Requires the available space for the outer element and the outer size of the inner element.
   * All values which are falsy (null or zero etc.) are ignored and the old value is kept.
   *
   * @param clientWidth {Integer ? null} Inner width of outer element
   * @param clientHeight {Integer ? null} Inner height of outer element
   * @param contentWidth {Integer ? null} Outer width of inner element
   * @param contentHeight {Integer ? null} Outer height of inner element
   */
  setDimensions: function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {
    var me = this;

    // Only update values which are defined
    if (clientWidth === +clientWidth) {
      me.__clientWidth = clientWidth;
    }

    if (clientHeight === +clientHeight) {
      me.__clientHeight = clientHeight;
    }

    if (contentWidth === +contentWidth) {
      me.__contentWidth = contentWidth;
    }

    if (contentHeight === +contentHeight) {
      me.__contentHeight = contentHeight;
    }

    // Refresh maximums
    me.__computeScrollMax();

    // Refresh scroll position
    me.scrollTo(me.__scrollLeft, me.__scrollTop, true);
  },

  /**
   * Sets the client coordinates in relation to the document.
   *
   * @param left {Integer ? 0} Left position of outer element
   * @param top {Integer ? 0} Top position of outer element
   */
  setPosition: function setPosition(left, top) {
    var me = this;

    me.__clientLeft = left || 0;
    me.__clientTop = top || 0;
  },

  /**
   * Configures the snapping (when snapping is active)
   *
   * @param width {Integer} Snapping width
   * @param height {Integer} Snapping height
   */
  setSnapSize: function setSnapSize(width, height) {
    var me = this;

    me.__snapWidth = width;
    me.__snapHeight = height;
  },

  /**
   * Activates pull-to-refresh. A special zone on the top of the list to start a list refresh whenever
   * the user event is released during visibility of this zone. This was introduced by some apps on iOS like
   * the official Twitter client.
   *
   * @param height {Integer} Height of pull-to-refresh zone on top of rendered list
   * @param activateCallback {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release.
   * @param deactivateCallback {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled.
   * @param startCallback {Function} Callback to execute to start the real async refresh action. Call {@link #finishPullToRefresh} after finish of refresh.
   */
  activatePullToRefresh: function activatePullToRefresh(height, activateCallback, deactivateCallback, startCallback) {
    var me = this;

    me.__refreshHeight = height;
    me.__refreshActivate = activateCallback;
    me.__refreshDeactivate = deactivateCallback;
    me.__refreshStart = startCallback;
  },

  /**
   * Starts pull-to-refresh manually.
   */
  triggerPullToRefresh: function triggerPullToRefresh() {
    // Use publish instead of scrollTo to allow scrolling to out of boundary position
    // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
    this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);

    if (this.__refreshStart) {
      this.__refreshStart();
    }
  },

  /**
   * Signalizes that pull-to-refresh is finished.
   */
  finishPullToRefresh: function finishPullToRefresh() {
    var me = this;

    me.__refreshActive = false;
    if (me.__refreshDeactivate) {
      me.__refreshDeactivate();
    }

    me.scrollTo(me.__scrollLeft, me.__scrollTop, true);
  },

  /**
   * Returns the scroll position and zooming values
   *
   * @return {Map} `left` and `top` scroll position and `zoom` level
   */
  getValues: function getValues() {
    var me = this;

    return {
      left: me.__scrollLeft,
      top: me.__scrollTop,
      zoom: me.__zoomLevel
    };
  },

  /**
   * Returns the maximum scroll values
   *
   * @return {Map} `left` and `top` maximum scroll values
   */
  getScrollMax: function getScrollMax() {
    var me = this;

    return {
      left: me.__maxScrollLeft,
      top: me.__maxScrollTop
    };
  },

  /**
   * Zooms to the given level. Supports optional animation. Zooms
   * the center when no coordinates are given.
   *
   * @param level {Number} Level to zoom to
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? null} Zoom in at given left coordinate
   * @param originTop {Number ? null} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomTo: function zoomTo(level, animate, originLeft, originTop, callback) {
    var me = this;

    if (!me.options.zooming) {
      throw new Error('Zooming is not enabled!');
    }

    // Add callback if exists
    if (callback) {
      me.__zoomComplete = callback;
    }

    // Stop deceleration
    if (me.__isDecelerating) {
      _animate2.default.stop(me.__isDecelerating);
      me.__isDecelerating = false;
    }

    var oldLevel = me.__zoomLevel;

    // Normalize input origin to center of viewport if not defined
    if (originLeft == null) {
      originLeft = me.__clientWidth / 2;
    }

    if (originTop == null) {
      originTop = me.__clientHeight / 2;
    }

    // Limit level according to configuration
    level = Math.max(Math.min(level, me.options.maxZoom), me.options.minZoom);

    // Recompute maximum values while temporary tweaking maximum scroll ranges
    me.__computeScrollMax(level);

    // Recompute left and top coordinates based on new zoom level
    var left = (originLeft + me.__scrollLeft) * level / oldLevel - originLeft;
    var top = (originTop + me.__scrollTop) * level / oldLevel - originTop;

    // Limit x-axis
    if (left > me.__maxScrollLeft) {
      left = me.__maxScrollLeft;
    } else if (left < 0) {
      left = 0;
    }

    // Limit y-axis
    if (top > me.__maxScrollTop) {
      top = me.__maxScrollTop;
    } else if (top < 0) {
      top = 0;
    }

    // Push values out
    me.__publish(left, top, level, animate);
  },

  /**
   * Zooms the content by the given factor.
   *
   * @param factor {Number} Zoom by given factor
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? 0} Zoom in at given left coordinate
   * @param originTop {Number ? 0} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomBy: function zoomBy(factor, animate, originLeft, originTop, callback) {
    var me = this;

    me.zoomTo(me.__zoomLevel * factor, animate, originLeft, originTop, callback);
  },

  /**
   * Scrolls to the given position. Respect limitations and snapping automatically.
   *
   * @param left {Number?null} Horizontal scroll position, keeps current if value is <code>null</code>
   * @param top {Number?null} Vertical scroll position, keeps current if value is <code>null</code>
   * @param animate {Boolean?false} Whether the scrolling should happen using an animation
   * @param zoom {Number?null} Zoom level to go to
   */
  scrollTo: function scrollTo(left, top, animate, zoom) {
    var me = this;

    // Stop deceleration
    if (me.__isDecelerating) {
      _animate2.default.stop(me.__isDecelerating);
      me.__isDecelerating = false;
    }

    // Correct coordinates based on new zoom level
    if (zoom != null && zoom !== me.__zoomLevel) {
      if (!me.options.zooming) {
        throw new Error('Zooming is not enabled!');
      }

      left *= zoom;
      top *= zoom;

      // Recompute maximum values while temporary tweaking maximum scroll ranges
      me.__computeScrollMax(zoom);
    } else {
      // Keep zoom when not defined
      zoom = me.__zoomLevel;
    }

    if (!me.options.scrollingX) {
      left = me.__scrollLeft;
    } else if (me.options.paging) {
      left = Math.round(left / me.__clientWidth) * me.__clientWidth;
    } else if (me.options.snapping) {
      left = Math.round(left / me.__snapWidth) * me.__snapWidth;
    }

    if (!me.options.scrollingY) {
      top = me.__scrollTop;
    } else if (me.options.paging) {
      top = Math.round(top / me.__clientHeight) * me.__clientHeight;
    } else if (me.options.snapping) {
      top = Math.round(top / me.__snapHeight) * me.__snapHeight;
    }

    // Limit for allowed ranges
    left = Math.max(Math.min(me.__maxScrollLeft, left), 0);
    top = Math.max(Math.min(me.__maxScrollTop, top), 0);

    // Don't animate when no change detected, still call publish to make sure
    // that rendered position is really in-sync with internal data
    if (left === me.__scrollLeft && top === me.__scrollTop) {
      animate = false;
    }

    // Publish new values
    if (!me.__isTracking) {
      me.__publish(left, top, zoom, animate);
    }
  },

  /**
   * Scroll by the given offset
   *
   * @param left {Number ? 0} Scroll x-axis by given offset
   * @param top {Number ? 0} Scroll x-axis by given offset
   * @param animate {Boolean ? false} Whether to animate the given change
   */
  scrollBy: function scrollBy(left, top, animate) {
    var me = this;

    var startLeft = me.__isAnimating ? me.__scheduledLeft : me.__scrollLeft;
    var startTop = me.__isAnimating ? me.__scheduledTop : me.__scrollTop;

    me.scrollTo(startLeft + (left || 0), startTop + (top || 0), animate);
  },

  /*
    ---------------------------------------------------------------------------
        EVENT CALLBACKS
    ---------------------------------------------------------------------------
    */

  /**
   * Mouse wheel handler for zooming support
   */
  doMouseZoom: function doMouseZoom(wheelDelta, timeStamp, pageX, pageY) {
    var me = this;
    var change = wheelDelta > 0 ? 0.97 : 1.03;

    return me.zoomTo(me.__zoomLevel * change, false, pageX - me.__clientLeft, pageY - me.__clientTop);
  },

  /**
   * Touch start handler for scrolling support
   */
  doTouchStart: function doTouchStart(touches, timeStamp) {
    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error('Invalid touch list: ' + touches);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp);
    }

    var me = this;

    // Reset interruptedAnimation flag
    me.__interruptedAnimation = true;

    // Stop deceleration
    if (me.__isDecelerating) {
      _animate2.default.stop(me.__isDecelerating);
      me.__isDecelerating = false;
      me.__interruptedAnimation = true;
    }

    // Stop animation
    if (me.__isAnimating) {
      _animate2.default.stop(me.__isAnimating);
      me.__isAnimating = false;
      me.__interruptedAnimation = true;
    }

    // Use center point when dealing with two fingers
    var currentTouchLeft = void 0;
    var currentTouchTop = void 0;
    var isSingleTouch = touches.length === 1;
    if (isSingleTouch) {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    } else {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    }

    // Store initial positions
    me.__initialTouchLeft = currentTouchLeft;
    me.__initialTouchTop = currentTouchTop;

    // Store current zoom level
    me.__zoomLevelStart = me.__zoomLevel;

    // Store initial touch positions
    me.__lastTouchLeft = currentTouchLeft;
    me.__lastTouchTop = currentTouchTop;

    // Store initial move time stamp
    me.__lastTouchMove = timeStamp;

    // Reset initial scale
    me.__lastScale = 1;

    // Reset locking flags
    me.__enableScrollX = !isSingleTouch && me.options.scrollingX;
    me.__enableScrollY = !isSingleTouch && me.options.scrollingY;

    // Reset tracking flag
    me.__isTracking = true;

    // Reset deceleration complete flag
    me.__didDecelerationComplete = false;

    // Dragging starts directly with two fingers, otherwise lazy with an offset
    me.__isDragging = !isSingleTouch;

    // Some features are disabled in multi touch scenarios
    me.__isSingleTouch = isSingleTouch;

    // Clearing data structure
    me.__positions = [];
  },

  /**
   * Touch move handler for scrolling support
   */
  doTouchMove: function doTouchMove(touches, timeStamp, scale) {
    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error('Invalid touch list: ' + touches);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp);
    }

    var me = this;

    // Ignore event when tracking is not enabled (event might be outside of element)
    if (!me.__isTracking) {
      return;
    }

    var currentTouchLeft = void 0;
    var currentTouchTop = void 0;

    // Compute move based around of center of fingers
    if (touches.length === 2) {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    } else {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    }

    var positions = me.__positions;

    // Are we already is dragging mode?
    if (me.__isDragging) {
      // Compute move distance
      var moveX = currentTouchLeft - me.__lastTouchLeft;
      var moveY = currentTouchTop - me.__lastTouchTop;

      // Read previous scroll position and zooming
      var scrollLeft = me.__scrollLeft;
      var scrollTop = me.__scrollTop;
      var level = me.__zoomLevel;

      // Work with scaling
      if (scale != null && me.options.zooming) {
        var oldLevel = level;

        // Recompute level based on previous scale and new scale
        level = level / me.__lastScale * scale;

        // Limit level according to configuration
        level = Math.max(Math.min(level, me.options.maxZoom), me.options.minZoom);

        // Only do further compution when change happened
        if (oldLevel !== level) {
          // Compute relative event position to container
          var currentTouchLeftRel = currentTouchLeft - me.__clientLeft;
          var currentTouchTopRel = currentTouchTop - me.__clientTop;

          // Recompute left and top coordinates based on new zoom level
          scrollLeft = (currentTouchLeftRel + scrollLeft) * level / oldLevel - currentTouchLeftRel;
          scrollTop = (currentTouchTopRel + scrollTop) * level / oldLevel - currentTouchTopRel;

          // Recompute max scroll values
          me.__computeScrollMax(level);
        }
      }

      if (me.__enableScrollX) {
        scrollLeft -= moveX * this.options.speedMultiplier;
        var maxScrollLeft = me.__maxScrollLeft;

        if (scrollLeft > maxScrollLeft || scrollLeft < 0) {
          // Slow down on the edges
          if (me.options.bouncing) {
            scrollLeft += moveX / 2 * this.options.speedMultiplier;
          } else if (scrollLeft > maxScrollLeft) {
            scrollLeft = maxScrollLeft;
          } else {
            scrollLeft = 0;
          }
        }
      }

      // Compute new vertical scroll position
      if (me.__enableScrollY) {
        scrollTop -= moveY * this.options.speedMultiplier;
        var maxScrollTop = me.__maxScrollTop;

        if (scrollTop > maxScrollTop || scrollTop < 0) {
          // Slow down on the edges
          if (me.options.bouncing) {
            scrollTop += moveY / 2 * this.options.speedMultiplier;

            // Support pull-to-refresh (only when only y is scrollable)
            if (!me.__enableScrollX && me.__refreshHeight != null) {
              if (!me.__refreshActive && scrollTop <= -me.__refreshHeight) {
                me.__refreshActive = true;
                if (me.__refreshActivate) {
                  me.__refreshActivate();
                }
              } else if (me.__refreshActive && scrollTop > -me.__refreshHeight) {
                me.__refreshActive = false;
                if (me.__refreshDeactivate) {
                  me.__refreshDeactivate();
                }
              }
            }
          } else if (scrollTop > maxScrollTop) {
            scrollTop = maxScrollTop;
          } else {
            scrollTop = 0;
          }
        }
      }

      // Keep list from growing infinitely (holding min 10, max 20 measure points)
      if (positions.length > 60) {
        positions.splice(0, 30);
      }

      // Track scroll movement for decleration
      positions.push(scrollLeft, scrollTop, timeStamp);

      // Sync scroll position
      me.__publish(scrollLeft, scrollTop, level);

      // Otherwise figure out whether we are switching into dragging mode now.
    } else {
      var minimumTrackingForScroll = me.options.locking ? 3 : 0;
      var minimumTrackingForDrag = 5;

      var distanceX = Math.abs(currentTouchLeft - me.__initialTouchLeft);
      var distanceY = Math.abs(currentTouchTop - me.__initialTouchTop);

      me.__enableScrollX = me.options.scrollingX && distanceX >= minimumTrackingForScroll;
      me.__enableScrollY = me.options.scrollingY && distanceY >= minimumTrackingForScroll;

      positions.push(me.__scrollLeft, me.__scrollTop, timeStamp);

      me.__isDragging = (me.__enableScrollX || me.__enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);
      if (me.__isDragging) {
        me.__interruptedAnimation = false;
      }
    }

    // Update last touch positions and time stamp for next event
    me.__lastTouchLeft = currentTouchLeft;
    me.__lastTouchTop = currentTouchTop;
    me.__lastTouchMove = timeStamp;
    me.__lastScale = scale;
  },

  /**
   * Touch end handler for scrolling support
   */
  doTouchEnd: function doTouchEnd(timeStamp) {
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp);
    }

    var me = this;

    // Ignore event when tracking is not enabled (no touchstart event on element)
    // This is required as this listener ('touchmove') sits on the document and not on the element itme.
    if (!me.__isTracking) {
      return;
    }

    // Not touching anymore (when two finger hit the screen there are two touch end events)
    me.__isTracking = false;

    // Be sure to reset the dragging flag now. Here we also detect whether
    // the finger has moved fast enough to switch into a deceleration animation.
    if (me.__isDragging) {
      // Reset dragging flag
      me.__isDragging = false;

      // Start deceleration
      // Verify that the last move detected was in some relevant time frame
      if (me.__isSingleTouch && me.options.animating && timeStamp - me.__lastTouchMove <= 100) {
        // Then figure out what the scroll position was about 100ms ago
        var positions = me.__positions;
        var endPos = positions.length - 1;
        var startPos = endPos;

        // Move pointer to position measured 100ms ago
        for (var i = endPos; i > 0 && positions[i] > me.__lastTouchMove - 100; i -= 3) {
          startPos = i;
        }

        // If start and stop position is identical in a 100ms timeframe,
        // we cannot compute any useful deceleration.
        if (startPos !== endPos) {
          // Compute relative movement between these two points
          var timeOffset = positions[endPos] - positions[startPos];
          var movedLeft = me.__scrollLeft - positions[startPos - 2];
          var movedTop = me.__scrollTop - positions[startPos - 1];

          // Based on 50ms compute the movement to apply for each render step
          me.__decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);
          me.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60);

          // How much velocity is required to start the deceleration
          var minVelocityToStartDeceleration = me.options.paging || me.options.snapping ? 4 : 1;

          // Verify that we have enough velocity to start deceleration
          if (Math.abs(me.__decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(me.__decelerationVelocityY) > minVelocityToStartDeceleration) {
            // Deactivate pull-to-refresh when decelerating
            if (!me.__refreshActive) {
              me.__startDeceleration(timeStamp);
            }
          } else {
            me.options.scrollingComplete();
          }
        } else {
          me.options.scrollingComplete();
        }
      } else if (timeStamp - me.__lastTouchMove > 100) {
        me.options.scrollingComplete();
      }
    }

    // If this was a slower move it is per default non decelerated, but this
    // still means that we want snap back to the bounds which is done here.
    // This is placed outside the condition above to improve edge case stability
    // e.g. touchend fired without enabled dragging. This should normally do not
    // have modified the scroll positions or even showed the scrollbars though.
    if (!me.__isDecelerating) {
      if (me.__refreshActive && me.__refreshStart) {
        // Use publish instead of scrollTo to allow scrolling to out of boundary position
        // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
        me.__publish(me.__scrollLeft, -me.__refreshHeight, me.__zoomLevel, true);

        if (me.__refreshStart) {
          me.__refreshStart();
        }
      } else {
        if (me.__interruptedAnimation || me.__isDragging) {
          me.options.scrollingComplete();
        }
        me.scrollTo(me.__scrollLeft, me.__scrollTop, true, me.__zoomLevel);

        // Directly signalize deactivation (nothing todo on refresh?)
        if (me.__refreshActive) {
          me.__refreshActive = false;
          if (me.__refreshDeactivate) {
            me.__refreshDeactivate();
          }
        }
      }
    }

    // Fully cleanup list
    me.__positions.length = 0;
  },

  /*
    ---------------------------------------------------------------------------
        PRIVATE API
    ---------------------------------------------------------------------------
    */

  /**
   * Applies the scroll position to the content element
   *
   * @param left {Number} Left scroll position
   * @param top {Number} Top scroll position
   * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates
   */
  __publish: function __publish(left, top, zoom, animate) {
    var me = this;

    // Remember whether we had an animation, then we try to continue based on the current "drive" of the animation
    var wasAnimating = me.__isAnimating;
    if (wasAnimating) {
      _animate2.default.stop(wasAnimating);
      me.__isAnimating = false;
    }

    if (animate && me.options.animating) {
      // Keep scheduled positions for scrollBy/zoomBy functionality
      me.__scheduledLeft = left;
      me.__scheduledTop = top;
      me.__scheduledZoom = zoom;

      var oldLeft = me.__scrollLeft;
      var oldTop = me.__scrollTop;
      var oldZoom = me.__zoomLevel;

      var diffLeft = left - oldLeft;
      var diffTop = top - oldTop;
      var diffZoom = zoom - oldZoom;

      var step = function step(percent, now, render) {
        if (render) {
          me.__scrollLeft = oldLeft + diffLeft * percent;
          me.__scrollTop = oldTop + diffTop * percent;
          me.__zoomLevel = oldZoom + diffZoom * percent;

          // Push values out
          if (me.__callback) {
            me.__callback(me.__scrollLeft, me.__scrollTop, me.__zoomLevel);
          }
        }
      };

      var verify = function verify(id) {
        return me.__isAnimating === id;
      };

      var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
        if (animationId === me.__isAnimating) {
          me.__isAnimating = false;
        }
        if (me.__didDecelerationComplete || wasFinished) {
          me.options.scrollingComplete();
        }

        if (me.options.zooming) {
          me.__computeScrollMax();
          if (me.__zoomComplete) {
            me.__zoomComplete();
            me.__zoomComplete = null;
          }
        }
      };

      // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
      me.__isAnimating = _animate2.default.start(step, verify, completed, me.options.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
    } else {
      me.__scheduledLeft = me.__scrollLeft = left;
      me.__scheduledTop = me.__scrollTop = top;
      me.__scheduledZoom = me.__zoomLevel = zoom;

      // Push values out
      if (me.__callback) {
        me.__callback(left, top, zoom);
      }

      // Fix max scroll ranges
      if (me.options.zooming) {
        me.__computeScrollMax();
        if (me.__zoomComplete) {
          me.__zoomComplete();
          me.__zoomComplete = null;
        }
      }
    }
  },

  /**
   * Recomputes scroll minimum values based on client dimensions and content dimensions.
   */
  __computeScrollMax: function __computeScrollMax(zoomLevel) {
    var me = this;

    if (zoomLevel == null) {
      zoomLevel = me.__zoomLevel;
    }

    me.__maxScrollLeft = Math.max(me.__contentWidth * zoomLevel - me.__clientWidth, 0);
    me.__maxScrollTop = Math.max(me.__contentHeight * zoomLevel - me.__clientHeight, 0);
  },

  /*
    ---------------------------------------------------------------------------
        ANIMATION (DECELERATION) SUPPORT
    ---------------------------------------------------------------------------
    */

  /**
   * Called when a touch sequence end and the speed of the finger was high enough
   * to switch into deceleration mode.
   */
  __startDeceleration: function __startDeceleration(timeStamp) {
    var me = this;

    if (me.options.paging) {
      var scrollLeft = Math.max(Math.min(me.__scrollLeft, me.__maxScrollLeft), 0);
      var scrollTop = Math.max(Math.min(me.__scrollTop, me.__maxScrollTop), 0);
      var clientWidth = me.__clientWidth;
      var clientHeight = me.__clientHeight;

      // We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.
      // Each page should have exactly the size of the client area.
      me.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
      me.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
      me.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
      me.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
    } else {
      me.__minDecelerationScrollLeft = 0;
      me.__minDecelerationScrollTop = 0;
      me.__maxDecelerationScrollLeft = me.__maxScrollLeft;
      me.__maxDecelerationScrollTop = me.__maxScrollTop;
    }

    // Wrap class method
    var step = function step(percent, now, render) {
      me.__stepThroughDeceleration(render);
    };

    // How much velocity is required to keep the deceleration running
    var minVelocityToKeepDecelerating = me.options.snapping ? 4 : 0.001;

    // Detect whether it's still worth to continue animating steps
    // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.
    var verify = function verify() {
      var shouldContinue = Math.abs(me.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(me.__decelerationVelocityY) >= minVelocityToKeepDecelerating;
      if (!shouldContinue) {
        me.__didDecelerationComplete = true;
      }
      return shouldContinue;
    };

    var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
      me.__isDecelerating = false;
      if (me.__didDecelerationComplete) {
        me.options.scrollingComplete();
      }

      // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions
      me.scrollTo(me.__scrollLeft, me.__scrollTop, me.options.snapping);
    };

    // Start animation and switch on flag
    me.__isDecelerating = _animate2.default.start(step, verify, completed);
  },

  /**
   * Called on every step of the animation
   *
   * @param inMemory {Boolean?false} Whether to not render the current step, but keep it in memory only. Used internally only!
   */
  __stepThroughDeceleration: function __stepThroughDeceleration(render) {
    var me = this;

    //
    // COMPUTE NEXT SCROLL POSITION
    //

    // Add deceleration to scroll position
    var scrollLeft = me.__scrollLeft + me.__decelerationVelocityX;
    var scrollTop = me.__scrollTop + me.__decelerationVelocityY;

    //
    // HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE
    //

    if (!me.options.bouncing) {
      var scrollLeftFixed = Math.max(Math.min(me.__maxDecelerationScrollLeft, scrollLeft), me.__minDecelerationScrollLeft);
      if (scrollLeftFixed !== scrollLeft) {
        scrollLeft = scrollLeftFixed;
        me.__decelerationVelocityX = 0;
      }

      var scrollTopFixed = Math.max(Math.min(me.__maxDecelerationScrollTop, scrollTop), me.__minDecelerationScrollTop);
      if (scrollTopFixed !== scrollTop) {
        scrollTop = scrollTopFixed;
        me.__decelerationVelocityY = 0;
      }
    }

    //
    // UPDATE SCROLL POSITION
    //

    if (render) {
      me.__publish(scrollLeft, scrollTop, me.__zoomLevel);
    } else {
      me.__scrollLeft = scrollLeft;
      me.__scrollTop = scrollTop;
    }

    //
    // SLOW DOWN
    //

    // Slow down velocity on every iteration
    if (!me.options.paging) {
      // This is the factor applied to every iteration of the animation
      // to slow down the process. This should emulate natural behavior where
      // objects slow down when the initiator of the movement is removed
      var frictionFactor = 0.95;

      me.__decelerationVelocityX *= frictionFactor;
      me.__decelerationVelocityY *= frictionFactor;
    }

    //
    // BOUNCING SUPPORT
    //

    if (me.options.bouncing) {
      var scrollOutsideX = 0;
      var scrollOutsideY = 0;

      // This configures the amount of change applied to deceleration/acceleration when reaching boundaries
      var _me$options = me.options,
          penetrationDeceleration = _me$options.penetrationDeceleration,
          penetrationAcceleration = _me$options.penetrationAcceleration;

      // Check limits

      if (scrollLeft < me.__minDecelerationScrollLeft) {
        scrollOutsideX = me.__minDecelerationScrollLeft - scrollLeft;
      } else if (scrollLeft > me.__maxDecelerationScrollLeft) {
        scrollOutsideX = me.__maxDecelerationScrollLeft - scrollLeft;
      }

      if (scrollTop < me.__minDecelerationScrollTop) {
        scrollOutsideY = me.__minDecelerationScrollTop - scrollTop;
      } else if (scrollTop > me.__maxDecelerationScrollTop) {
        scrollOutsideY = me.__maxDecelerationScrollTop - scrollTop;
      }

      // Slow down until slow enough, then flip back to snap position
      if (scrollOutsideX !== 0) {
        if (scrollOutsideX * me.__decelerationVelocityX <= 0) {
          me.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
        } else {
          me.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
        }
      }

      if (scrollOutsideY !== 0) {
        if (scrollOutsideY * me.__decelerationVelocityY <= 0) {
          me.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
        } else {
          me.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration;
        }
      }
    }
  }
};

// Copy over members to prototype
for (var key in members) {
  if (Object.prototype.hasOwnProperty.call(members, key)) {
    Scroller.prototype[key] = members[key];
  }
}
exports.default = Scroller;
module.exports = exports['default'];

/***/ }),

/***/ "Z4Qv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var time = Date.now || function () {
  return +new Date();
};
var desiredFrames = 60;
var millisecondsPerSecond = 1000;
var running = {};
var counter = 1;

var Animate = {
  /**
   * A requestAnimationFrame wrapper / polyfill.
   *
   * @param callback {Function} The callback to be invoked before the next repaint.
   * @param root {HTMLElement} The root element for the repaint
   */
  requestAnimationFrame: function () {
    // Check for request animation Frame support
    var requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame;
    var isNative = !!requestFrame;

    if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
      isNative = false;
    }

    if (isNative) {
      return function (callback, root) {
        requestFrame(callback, root);
      };
    }

    var TARGET_FPS = 60;
    var requests = {};
    var requestCount = 0;
    var rafHandle = 1;
    var intervalHandle = null;
    var lastActive = +new Date();

    return function (callback, root) {
      var callbackHandle = rafHandle++;

      // Store callback
      requests[callbackHandle] = callback;
      requestCount++;

      // Create timeout at first request
      if (intervalHandle === null) {
        intervalHandle = setInterval(function () {
          var now = +new Date();
          var currentRequests = requests;

          // Reset data structure before executing callbacks
          requests = {};
          requestCount = 0;

          for (var key in currentRequests) {
            if (Object.prototype.hasOwnProperty.call(currentRequests, key)) {
              currentRequests[key](now);
              lastActive = now;
            }
          }

          // Disable the timeout when nothing happens for a certain
          // period of time
          if (now - lastActive > 2500) {
            clearInterval(intervalHandle);
            intervalHandle = null;
          }
        }, 1000 / TARGET_FPS);
      }

      return callbackHandle;
    };
  }(),

  /**
   * Stops the given animation.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation was stopped (aka, was running before)
   */
  stop: function stop(id) {
    var cleared = running[id] != null;
    if (cleared) {
      running[id] = null;
    }

    return cleared;
  },

  /**
   * Whether the given animation is still running.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation is still running
   */
  isRunning: function isRunning(id) {
    return running[id] != null;
  },

  /**
   * Start the animation.
   *
   * @param stepCallback {Function} Pointer to function which is executed on every step.
   *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
   * @param verifyCallback {Function} Executed before every animation step.
   *   Signature of the method should be `function() { return continueWithAnimation; }`
   * @param completedCallback {Function}
   *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
   * @param duration {Integer} Milliseconds to run the animation
   * @param easingMethod {Function} Pointer to easing function
   *   Signature of the method should be `function(percent) { return modifiedValue; }`
   * @param root {Element ? document.body} Render root, when available. Used for internal
   *   usage of requestAnimationFrame.
   * @return {Integer} Identifier of animation. Can be used to stop it any time.
   */
  start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {
    var start = time();
    var lastFrame = start;
    var percent = 0;
    var dropCounter = 0;
    var id = counter++;

    if (!root) {
      root = document.body;
    }

    // Compacting running db automatically every few new animations
    if (id % 20 === 0) {
      var newRunning = {};
      for (var usedId in running) {
        if (Object.prototype.hasOwnProperty.call(running, usedId)) {
          newRunning[usedId] = true;
        }
      }
      running = newRunning;
    }

    // This is the internal step method which is called every few milliseconds
    var step = function step(virtual) {
      // Normalize virtual value
      var render = virtual !== true;

      // Get current time
      var now = time();

      // Verification is executed before next animation step
      if (!running[id] || verifyCallback && !verifyCallback(id)) {
        running[id] = null;
        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, false);
        return;
      }

      // For the current rendering to apply let's update omitted steps in memory.
      // This is important to bring internal state variables up-to-date with progress in time.
      if (render) {
        var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
        for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
          step(true);
          dropCounter++;
        }
      }

      // Compute percent value
      if (duration) {
        percent = (now - start) / duration;
        if (percent > 1) {
          percent = 1;
        }
      }

      // Execute step callback, then...
      var value = easingMethod ? easingMethod(percent) : percent;
      if ((stepCallback(value, now, render) === false || percent === 1) && render) {
        running[id] = null;
        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, percent === 1 || duration == null);
      } else if (render) {
        lastFrame = now;
        Animate.requestAnimationFrame(step, root);
      }
    };

    // Mark as running
    running[id] = true;

    // Init first step
    Animate.requestAnimationFrame(step, root);

    // Return unique animation ID
    return id;
  }
};
exports.default = Animate;
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
//# sourceMappingURL=scroller.js.map