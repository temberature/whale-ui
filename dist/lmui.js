(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lmfe.ui", [], factory);
	else if(typeof exports === 'object')
		exports["lmfe.ui"] = factory();
	else
		root["LMUI"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "lVK7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4fqs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4nvX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zepto = __webpack_require__("rOWA");

var _zepto2 = _interopRequireDefault(_zepto);

var _checklist = __webpack_require__("TSkf");

var _checklist2 = _interopRequireDefault(_checklist);

var _eventclass = __webpack_require__("ONyo");

var _eventclass2 = _interopRequireDefault(_eventclass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentManger = function (_EventClass) {
  _inherits(ComponentManger, _EventClass);

  function ComponentManger() {
    _classCallCheck(this, ComponentManger);

    var _this = _possibleConstructorReturn(this, (ComponentManger.__proto__ || Object.getPrototypeOf(ComponentManger)).call(this));

    _this.workers = [];
    return _this;
  }

  _createClass(ComponentManger, [{
    key: 'get',
    value: function get(selector) {
      var ret = void 0;
      if (selector[0] === '#') {
        ret = this.workers.filter(function (worker) {
          return worker.$wrapper.attr('id') === selector.slice(1);
        });
      } else if (selector[0] === '.') {
        ret = this.workers.filter(function (worker) {
          return worker.$wrapper.hasClass(selector.slice(1));
        });
      }
      return ret;
    }
  }, {
    key: 'add',
    value: function add(worker) {
      return this.workers.push(worker);
    }
  }, {
    key: 'ready',
    value: function ready(callback) {
      if ((0, _zepto2.default)('body').data('constructed') === 1) {
        callback();
      } else {
        this.callback = callback;
      }
    }
  }]);

  return ComponentManger;
}(_eventclass2.default);

var componentManger = new ComponentManger();

(0, _zepto2.default)('.lmui-checklist').each(function (index, item) {
  if (+(0, _zepto2.default)(item).data('constructed') !== 1) {
    var checklist = new _checklist2.default(item);
    componentManger.add(checklist);
    console.log(componentManger);
  }
});
(0, _zepto2.default)('body').data('constructed', 1);
componentManger.callback && componentManger.callback();

exports.default = componentManger;
module.exports = exports['default'];

/***/ }),

/***/ "8stO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "AcNR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zepto = __webpack_require__("rOWA");

var _zepto2 = _interopRequireDefault(_zepto);

var _eventclass = __webpack_require__("ONyo");

var _eventclass2 = _interopRequireDefault(_eventclass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-invalid-this: "off"*/


var defaultOptions = new Map();

var RadioList = function (_EventClass) {
  _inherits(RadioList, _EventClass);

  function RadioList(wrapper) {
    _classCallCheck(this, RadioList);

    var _this = _possibleConstructorReturn(this, (RadioList.__proto__ || Object.getPrototypeOf(RadioList)).call(this));

    var $wrapper = _this._initDom(wrapper);
    _this.id = $wrapper.attr('id');
    _this._className = 'RadioList';
    _this._createEvent('onCreate onChange');
    var options = new Map();
    [].concat(_toConsumableArray(defaultOptions.keys())).forEach(function (key) {
      options.set(key, $wrapper.data(key) || defaultOptions.get(key));
    });
    _this.options = options;
    _this._bindEvents();

    $wrapper.data('constructed', 1);
    window.setTimeout(function () {
      _this.dispatch('onCreate');
    }, 0);
    return _this;
  }

  _createClass(RadioList, [{
    key: '_initDom',
    value: function _initDom(wrapper) {
      return this.$wrapper = (0, _zepto2.default)(wrapper);
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var me = this;

      me.$wrapper.on('change', function () {
        var selected = (0, _zepto2.default)(this).find('.lmui-cell input').filter(function () {
          return (0, _zepto2.default)(this).prop('checked');
        }).map(function (index, item) {
          return (0, _zepto2.default)(item).val();
        }).reduce(function (memo, item) {
          return '' + memo + item + ',';
        }, '');

        var old = (0, _zepto2.default)(this).data('selected');

        (0, _zepto2.default)(this).data('selected', selected);

        me.dispatch('onChange', selected, old);
      });
      me.$wrapper.find('input').on('click', function (e) {
        me.$wrapper.find('input').prop('checked', false);
        (0, _zepto2.default)(this).prop('checked', true);
      });
    }
  }]);

  return RadioList;
}(_eventclass2.default);

exports.default = RadioList;
module.exports = exports['default'];

/***/ }),

/***/ "ChPx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Ci3j":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

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

/***/ "O4UQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "Q0dT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("4fqs");

var _index = __webpack_require__("Rl4w");

var _index2 = _interopRequireDefault(_index);

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
  paging: true,
  // 是否捕捉用户可用的整数像素值
  snapping: true,
  // 是否开启缩放功能
  zooming: false,
  // 缩放最小值
  minZoom: 0.5,
  // 缩放最大值
  maxZoom: 3,
  // 数据
  data: []
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

var Picker = function (_EventClass) {
  _inherits(Picker, _EventClass);

  function Picker(wrapper, options) {
    _classCallCheck(this, Picker);

    var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this));

    _this._className = 'Picker';
    _this._createEvent('onCreate onScroll onScrollOver');
    _this.options = (0, _util.merge)({}, defaultOptions, options);
    _this._initDom(wrapper);
    // create Scroller instance
    _this._initScroller();
    // bind events
    _this._bindEvents();
    // the content element needs a correct transform origin for zooming
    _this.content.style[defaultOptions.vendorPrefix + 'TransformOrigin'] = 'left top';
    // reflow for the first time
    _this.reflow();
    _this._currentIndex = 0;
    window.setTimeout(function () {
      _this.dispatch('onCreate');
    }, 0);
    return _this;
  }

  _createClass(Picker, [{
    key: '_initDom',
    value: function _initDom(wrapper) {
      this.wrapper = wrapper;
      this.wrapper.innerHTML = (0, _util.render)(_index2.default, this.options);
      this.container = this.wrapper.firstElementChild.firstElementChild;
      this.content = this.container.firstElementChild;
    }
  }, {
    key: '_initScroller',
    value: function _initScroller() {
      var _this2 = this;

      this.options.scrollingComplete = function () {
        _this2.dispatch('onScrollOver');
      };
      this.scroller = new _scroller2.default(function (left, top, zoom) {
        var height = _this2.container.clientHeight;
        var index = parseInt(top / height, 10);
        _this2._currentIndex = index;
        _this2.dispatch('onScroll', _this2._currentIndex, _this2.options.data[_this2._currentIndex]);
        _this2._render(left, top, zoom);
      }, this.options);
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
    key: '_bindEvents',
    value: function _bindEvents() {
      var me = this;
      // reflow handling
      window.addEventListener('resize', function () {
        me.reflow();
      }, false);
      // touch devices bind touch events
      if ('ontouchstart' in window) {
        this.container.parentNode.addEventListener('touchstart', function (e) {
          // Don't react if initial down happens on a form element
          if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
            return;
          }
          // reflow since the container may have changed
          me.reflow();
          me.scroller.doTouchStart(e.touches, e.timeStamp);
        }, false);
        this.container.parentNode.addEventListener('touchmove', function (e) {
          e.preventDefault();
          me.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
        }, false);
        this.container.parentNode.addEventListener('touchend', function (e) {
          me.scroller.doTouchEnd(e.timeStamp);
        }, false);
        this.container.parentNode.addEventListener('touchcancel', function (e) {
          me.scroller.doTouchEnd(e.timeStamp);
        }, false);
        // non-touch bind mouse events
      } else {
        var mousedown = false;
        this.container.parentNode.addEventListener('mousedown', function (e) {
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
        this.container.parentNode.addEventListener('mousewheel', function (e) {
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
      this.scroller.setDimensions(this.container.clientWidth, this.container.clientHeight, this.content.offsetWidth, this.content.offsetHeight);
      // refresh the position for zooming purposes
      var rect = this.container.getBoundingClientRect();
      this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop);
    }
  }]);

  return Picker;
}(_eventclass2.default);

exports.default = Picker;
module.exports = exports['default'];

/***/ }),

/***/ "Rl4w":
/***/ (function(module, exports) {

module.exports = "<div class=\"lmui-picker\">\n  <div class=\"lmui-picker-container\">\n      <div class=\"lmui-picker-content\">\n      <% for(var i = 0; i < data.length; i++) { %>\n        <div class=\"lmui-picker-item\"><%=data[i].text%></div>\n      <% } %>\n      </div>\n  </div>\n  <div class=\"lmui-picker-mask\"></div>\n</div>";

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

/***/ "TSkf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zepto = __webpack_require__("rOWA");

var _zepto2 = _interopRequireDefault(_zepto);

var _eventclass = __webpack_require__("ONyo");

var _eventclass2 = _interopRequireDefault(_eventclass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-invalid-this: "off"*/


var defaultOptions = new Map([['max', -1]]);

var CheckList = function (_EventClass) {
  _inherits(CheckList, _EventClass);

  function CheckList(wrapper) {
    _classCallCheck(this, CheckList);

    var _this = _possibleConstructorReturn(this, (CheckList.__proto__ || Object.getPrototypeOf(CheckList)).call(this));

    var $wrapper = _this._initDom(wrapper);
    _this.id = $wrapper.attr('id');
    _this._className = 'CheckList';
    _this._createEvent('onCreate onChange');
    var options = new Map();
    [].concat(_toConsumableArray(defaultOptions.keys())).forEach(function (key) {
      options.set(key, $wrapper.data(key) || defaultOptions.get(key));
    });
    _this.options = options;
    _this._bindEvents();

    $wrapper.data('constructed', 1);
    window.setTimeout(function () {
      _this.dispatch('onCreate');
    }, 0);
    return _this;
  }

  _createClass(CheckList, [{
    key: '_initDom',
    value: function _initDom(wrapper) {
      return this.$wrapper = (0, _zepto2.default)(wrapper);
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var me = this;

      var $checklist = me.$wrapper;
      $checklist.on('change', function () {
        var selected = (0, _zepto2.default)(this).find('.lmui-cell input').filter(function () {
          return (0, _zepto2.default)(this).prop('checked');
        }).map(function (index, item) {
          return (0, _zepto2.default)(item).val();
        }).reduce(function (memo, item) {
          return '' + memo + item + ',';
        }, '');

        var old = (0, _zepto2.default)(this).data('selected');

        (0, _zepto2.default)(this).data('selected', selected);

        me.dispatch('onChange', selected, old);
      });
      $checklist.find('input').on('click', function (e) {
        var $checkedElements = $checklist.find('.lmui-cell input').filter(function () {
          return (0, _zepto2.default)(this).prop('checked');
        });

        if ($checkedElements.length - 1 === $checklist.data('max')) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      });
    }
  }]);

  return CheckList;
}(_eventclass2.default);

exports.default = CheckList;
module.exports = exports['default'];

/***/ }),

/***/ "Tr66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("Z+Km");

var _index = __webpack_require__("d0mR");

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
  containerClass: 'lmui-popup-normal',
  // 位置 left right top bottom
  placement: 'bottom',
  // 关闭class
  closeClass: 'lmui-actionsheet-item',
  // 是否是模态
  modal: true,
  // 模态关闭
  backClose: true,
  // overlay的zIndex固定
  fixOverlay: true,
  // 是否关闭时销毁
  destoryOnClose: true,
  // 配置数据
  data: [],
  // 取消按钮配置
  cancelText: '取消'
};

var Actionsheet = function (_Popbase) {
  _inherits(Actionsheet, _Popbase);

  function Actionsheet(options) {
    _classCallCheck(this, Actionsheet);

    var newOptions = (0, _util.merge)({}, defaultOptions, options);
    newOptions.closeOnClickModal = newOptions.backClose;

    var _this = _possibleConstructorReturn(this, (Actionsheet.__proto__ || Object.getPrototypeOf(Actionsheet)).call(this, newOptions));

    _this._className = 'Actionsheet';
    _this._createEvent('onBtnClick');
    return _this;
  }

  _createClass(Actionsheet, [{
    key: '_initDom',
    value: function _initDom() {
      this.container = document.createElement('div');
      this.container.className = this.containerClass + ' lmui-popup-container lmui-popup-' + this.placement;
      this.container.innerHTML = (0, _util.render)(_index2.default, this);
      this.warp.appendChild(this.container);
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      var _this2 = this;

      this.container.addEventListener('click', function (e) {
        if (e.target.dataset.index) {
          var index = parseInt(e.target.dataset.index, 10);
          if (_this2.dispatch('onBtnClick', index, _this2.data[index]) !== false) {
            _this2.close();
          }
        }
        if (e.target.className.indexOf(_this2.closeClass) >= 0) {
          _this2.close();
          return false;
        }
      }, false);
    }
  }, {
    key: '_onOpen',
    value: function _onOpen() {
      var _this3 = this;

      this.transition = true;
      (0, _util.addClass)(this.container, 'lmui-popup-' + this.placement + '-enter');
      window.setTimeout(function () {
        _this3.transition = false;
        _this3._doAfterOpen();
      }, 300);
    }
  }, {
    key: '_onClose',
    value: function _onClose() {
      var _this4 = this;

      this.transition = true;
      (0, _util.removeClass)(this.container, 'lmui-popup-' + this.placement + '-enter');
      window.setTimeout(function () {
        _this4.transition = false;
        _this4._doAfterClose();
      }, 300);
    }
  }]);

  return Actionsheet;
}(_popbase2.default);

exports.default = Actionsheet;
module.exports = exports['default'];

/***/ }),

/***/ "ULL+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("ChPx");

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

var Popup = function (_Popbase) {
  _inherits(Popup, _Popbase);

  function Popup(options) {
    _classCallCheck(this, Popup);

    var newOptions = (0, _util.merge)({}, defaultOptions, options);
    newOptions.closeOnClickModal = newOptions.backClose;

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, newOptions));

    _this._className = 'Popup';
    return _this;
  }

  _createClass(Popup, [{
    key: '_initDom',
    value: function _initDom() {
      this.container = document.createElement('div');
      this.container.className = this.containerClass + ' lmui-popup-container lmui-popup-' + this.placement;
      this.width === 'auto' ? '' : this.container.style.width = this.width;
      this.height === 'auto' ? '' : this.container.style.height = this.height;
      this.container.innerHTML = this.content;
      this.warp.appendChild(this.container);
      if (this.contentPosition) {
        var clist = this.container.children;
        for (var i = 0; i < clist.length; i++) {
          (0, _util.addClass)(clist[i], 'lmui-popup-' + this.contentPosition);
        }
      }
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      var me = this;
      this.container.addEventListener('click', function (e) {
        if (e.target.className.indexOf(me.closeClass) >= 0) {
          me.close();
          return false;
        }
      }, false);
    }
  }, {
    key: '_onOpen',
    value: function _onOpen() {
      var _this2 = this;

      this.transition = true;
      (0, _util.addClass)(this.container, 'lmui-popup-' + this.placement + '-enter');
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
      (0, _util.removeClass)(this.container, 'lmui-popup-' + this.placement + '-enter');
      window.setTimeout(function () {
        _this3.transition = false;
        _this3._doAfterClose();
      }, 300);
    }
  }]);

  return Popup;
}(_popbase2.default);

exports.default = Popup;
module.exports = exports['default'];

/***/ }),

/***/ "VKDx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VSd5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("Ci3j");

var _util = __webpack_require__("vG4S");

var _popover = __webpack_require__("cNmg");

var _popover2 = _interopRequireDefault(_popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultOptions = {
  // 外包容器class
  containerClass: 'lmui-tooltip-normal'
};

var Tooltip = function (_Popover) {
  _inherits(Tooltip, _Popover);

  function Tooltip(options) {
    _classCallCheck(this, Tooltip);

    var newOptions = (0, _util.merge)({}, defaultOptions, options);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, newOptions));

    _this._className = 'Tooltip';
    return _this;
  }

  _createClass(Tooltip, [{
    key: '_initDom',
    value: function _initDom() {
      this.root = document.createElement('div');
      this.root.className = 'lmui-tooltip-root';
      document.body.appendChild(this.root);
      this.container = document.createElement('div');
      this.container.className = this.containerClass + ' lmui-tooltip-container lmui-tooltip-' + this.placement;
      this.container.innerHTML = ['<div class="lmui-tooltip-content">', '<div class="lmui-tooltip-arrow"></div>', '<div class="lmui-tooltip-inner">', this.content, '</div>', '</div>'].join('');
      this.root.appendChild(this.container);
    }
  }, {
    key: '_onOpen',
    value: function _onOpen() {
      this._position();
      (0, _util.addClass)(this.container, 'lmui-tooltip-' + this.placement + '-enter');
    }
  }, {
    key: '_onClose',
    value: function _onClose() {
      (0, _util.removeClass)(this.container, 'lmui-tooltip-' + this.placement + '-enter');
    }
  }]);

  return Tooltip;
}(_popover2.default);

exports.default = Tooltip;
module.exports = exports['default'];

/***/ }),

/***/ "Z+Km":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "ZXKU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cNmg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("O4UQ");

var _util = __webpack_require__("vG4S");

var _popbase = __webpack_require__("oiW4");

var _popbase2 = _interopRequireDefault(_popbase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultOptions = {
  // 目标元素dom
  target: null,
  // 触发行为 hover focus click
  action: 'hover',
  // distance 根元素具体target的距离
  distance: 4,
  // 是否默认打开
  autoShow: false,
  // 外包容器class
  containerClass: 'lmui-popover-normal',
  // 位置 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
  placement: 'top',
  // 长度
  width: 'auto',
  // 宽度
  height: 'auto',
  // 弹出内容
  content: '',
  // 关闭class
  closeClass: 'close',
  // 是否是模态
  modal: false,
  // 模态关闭
  backClose: false,
  // overlay的zIndex固定
  fixOverlay: true,
  // 是否关闭时销毁
  destoryOnClose: false
};

var Popover = function (_Popbase) {
  _inherits(Popover, _Popbase);

  function Popover(options) {
    _classCallCheck(this, Popover);

    var newOptions = (0, _util.merge)({}, defaultOptions, options);

    var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, newOptions));

    _this._className = 'Popover';
    return _this;
  }

  _createClass(Popover, [{
    key: '_initDom',
    value: function _initDom() {
      this.root = document.createElement('div');
      this.root.className = 'lmui-popover-root';
      document.body.appendChild(this.root);
      this.container = document.createElement('div');
      this.container.className = this.containerClass + ' lmui-popover-container lmui-popover-' + this.placement;
      this.container.innerHTML = ['<div class="lmui-popover-content">', '<div class="lmui-popover-arrow"></div>', '<div class="lmui-popover-inner">', this.content, '</div>', '</div>'].join('');
      this.root.appendChild(this.container);
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      var me = this;
      if (this.action === 'click') {
        this.target.addEventListener('click', function (e) {
          me.show();
        }, false);
        window.addEventListener('click', function (e) {
          if (e.target !== me.target) {
            me.close();
          }
        }, false);
      } else if (this.action === 'focus') {
        this.target.addEventListener('focus', function (e) {
          me.show();
        }, false);
        this.target.addEventListener('blur', function (e) {
          me.close();
        }, false);
      } else {
        this.target.addEventListener('mouseenter', function (e) {
          me.show();
        }, false);
        this.target.addEventListener('mouseout', function (e) {
          me.close();
        }, false);
      }
    }
  }, {
    key: '_position',
    value: function _position() {
      var targetRect = this.target.getClientRects()[0];
      var containerRect = this.container.getClientRects()[0];
      if (this.placement.indexOf('right') === 0) {
        this.container.style.left = targetRect.right + this.distance + 'px';
        this.container.style.top = targetRect.top + targetRect.height / 2 + 'px';
      } else if (this.placement.indexOf('bottom') === 0) {
        this.container.style.left = targetRect.left + targetRect.width / 2 + 'px';
        this.container.style.top = targetRect.top + targetRect.height + this.distance + 'px';
      } else if (this.placement.indexOf('left') === 0) {
        this.container.style.left = targetRect.left - containerRect.width - this.distance + 'px';
        this.container.style.top = targetRect.top + targetRect.height / 2 + 'px';
      } else {
        // top
        this.container.style.left = targetRect.left + targetRect.width / 2 + 'px';
        this.container.style.top = targetRect.top - containerRect.height - this.distance + 'px';
      }
    }
  }, {
    key: '_onOpen',
    value: function _onOpen() {
      this._position();
      (0, _util.addClass)(this.container, 'lmui-popover-' + this.placement + '-enter');
    }
  }, {
    key: '_onClose',
    value: function _onClose() {
      (0, _util.removeClass)(this.container, 'lmui-popover-' + this.placement + '-enter');
    }
  }]);

  return Popover;
}(_popbase2.default);

exports.default = Popover;
module.exports = exports['default'];

/***/ }),

/***/ "d0mR":
/***/ (function(module, exports) {

module.exports = "<div class=\"lmui-actionsheet\">\n    <ul class=\"lmui-actionsheet-container\">\n    <% for(var i = 0; i < data.length; i++) { %>\n        <li class=\"lmui-actionsheet-item\" data-index=\"<%=i%>\"><%=data[i].text%></li>\n    <% } %>\n    <% if(cancelText) { %>\n        <li class=\"lmui-actionsheet-item\"><%=cancelText%></li>\n    <% } %>\n    </ul>\n</div>";

/***/ }),

/***/ "dyme":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zepto = __webpack_require__("rOWA");

var _zepto2 = _interopRequireDefault(_zepto);

var _eventclass = __webpack_require__("ONyo");

var _eventclass2 = _interopRequireDefault(_eventclass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-invalid-this: "off"*/


var defaultOptions = new Map([['on', 0]]);

var Switch = function (_EventClass) {
  _inherits(Switch, _EventClass);

  function Switch(wrapper) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this));

    var $wrapper = _this._initDom(wrapper);
    _this.id = $wrapper.attr('id');
    _this._className = 'Switch';
    _this._createEvent('onCreate onChange');
    var options = new Map();
    [].concat(_toConsumableArray(defaultOptions.keys())).forEach(function (key) {
      options.set(key, $wrapper.data(key) || defaultOptions.get(key));
    });
    _this.options = options;
    _this._bindEvents();

    $wrapper.data('constructed', 1);
    window.setTimeout(function () {
      _this.dispatch('onCreate');
    }, 0);
    return _this;
  }

  _createClass(Switch, [{
    key: '_initDom',
    value: function _initDom(wrapper) {
      return this.$wrapper = (0, _zepto2.default)(wrapper);
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var me = this;

      me.$wrapper.on('change', function () {
        var on = +(0, _zepto2.default)(this).find('input').prop('checked');

        var old = (0, _zepto2.default)(this).data('on');

        (0, _zepto2.default)(this).data('on', on);

        me.dispatch('onChange', on, old);
      });
    }
  }]);

  return Switch;
}(_eventclass2.default);

exports.default = Switch;
module.exports = exports['default'];

/***/ }),

/***/ "kbIk":
/***/ (function(module, exports) {

module.exports = "<div class=\"lmui-spin-container <%=type%>\">\n    <svg class=\"loadding\" viewBox=\"0 0 200 200\">\n        <circle cx=\"100\" cy=\"100\" r=\"95\"></circle>\n        <g class=\"right\">\n            <path d=\"m85,132l61,-74\" />\n            <path d=\"m85,132l-36,-42\" />\n        </g>\n        <g class=\"wrong\">\n            <path d=\"m100,100l-34,-34\" />\n            <path d=\"m100,100l34,34\" />\n            <path d=\"m100,100l-34,34\" />\n            <path d=\"m100,100l34,-34\" />\n        </g>\n    </svg>\n</div>\n<p class=\"lmui-spin-text\" <% if(!text) { %>style=\"display:none;\"<% } %>><%=text%></p>\n";

/***/ }),

/***/ "lUdw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lVK7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("VKDx");

var _util = __webpack_require__("vG4S");

var _util2 = _interopRequireDefault(_util);

var _popup = __webpack_require__("ULL+");

var _popup2 = _interopRequireDefault(_popup);

var _dialog = __webpack_require__("zXdF");

var _dialog2 = _interopRequireDefault(_dialog);

var _popover = __webpack_require__("cNmg");

var _popover2 = _interopRequireDefault(_popover);

var _tooltip = __webpack_require__("VSd5");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _scroller = __webpack_require__("DUT/");

var _scroller2 = _interopRequireDefault(_scroller);

var _picker = __webpack_require__("Q0dT");

var _picker2 = _interopRequireDefault(_picker);

var _actionsheet = __webpack_require__("Tr66");

var _actionsheet2 = _interopRequireDefault(_actionsheet);

var _spin = __webpack_require__("MjHY");

var _spin2 = _interopRequireDefault(_spin);

var _checklist = __webpack_require__("TSkf");

var _checklist2 = _interopRequireDefault(_checklist);

var _componentManger = __webpack_require__("4nvX");

var _componentManger2 = _interopRequireDefault(_componentManger);

var _switch = __webpack_require__("dyme");

var _switch2 = _interopRequireDefault(_switch);

var _radiolist = __webpack_require__("AcNR");

var _radiolist2 = _interopRequireDefault(_radiolist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Popup: _popup2.default,
  Dialog: _dialog2.default,
  Popover: _popover2.default,
  Tooltip: _tooltip2.default,
  toast: function toast(text, timeout, callback, config) {
    if (Object.prototype.toString.call(timeout) === '[object Function]') {
      config = callback;
      callback = timeout;
      timeout = null;
    }
    config = config || {};
    var defaultOption = {
      width: '85%',
      containerClass: 'lmui-toast',
      content: text,
      timeout: +timeout || 2000,
      button: []
    };
    return new _dialog2.default(_util2.default.merge(defaultOption, config)).onClose(callback);
  },
  alert: function alert() {
    return new _dialog2.default();
  },
  Scroller: _scroller2.default,
  Picker: _picker2.default,
  Actionsheet: _actionsheet2.default,
  Spin: _spin2.default,
  CheckList: _checklist2.default,
  componentManger: _componentManger2.default,
  Switch: _switch2.default,
  RadioList: _radiolist2.default
};
module.exports = exports['default'];

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

/***/ "rOWA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Zepto v1.2.0-27-g324cd27 - zepto event ajax form ie - zeptojs.com/license */
(function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return factory(global);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else factory(global);
})(window, function (window) {
  var Zepto = function () {
    var undefined,
        key,
        $,
        classList,
        emptyArray = [],
        _concat = emptyArray.concat,
        _filter = emptyArray.filter,
        _slice = emptyArray.slice,
        document = window.document,
        elementDisplay = {},
        classCache = {},
        cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 },
        fragmentRE = /^\s*<(\w+|!)[^>]*>/,
        singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        rootNodeRE = /^(?:body|html)$/i,
        capitalRE = /([A-Z])/g,


    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
        adjacencyOperators = ['after', 'prepend', 'before', 'append'],
        table = document.createElement('table'),
        tableRow = document.createElement('tr'),
        containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
        simpleSelectorRE = /^[\w-]*$/,
        class2type = {},
        toString = class2type.toString,
        zepto = {},
        camelize,
        uniq,
        tempParent = document.createElement('div'),
        propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
        isArray = Array.isArray || function (object) {
      return object instanceof Array;
    };

    zepto.matches = function (element, selector) {
      if (!selector || !element || element.nodeType !== 1) return false;
      var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
      if (matchesSelector) return matchesSelector.call(element, selector);
      // fall back to performing a selector:
      var match,
          parent = element.parentNode,
          temp = !parent;
      if (temp) (parent = tempParent).appendChild(element);
      match = ~zepto.qsa(parent, selector).indexOf(element);
      temp && tempParent.removeChild(element);
      return match;
    };

    function type(obj) {
      return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    }

    function isFunction(value) {
      return type(value) == "function";
    }
    function isWindow(obj) {
      return obj != null && obj == obj.window;
    }
    function isDocument(obj) {
      return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    }
    function isObject(obj) {
      return type(obj) == "object";
    }
    function isPlainObject(obj) {
      return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }

    function likeArray(obj) {
      var length = !!obj && 'length' in obj && obj.length,
          type = $.type(obj);

      return 'function' != type && !isWindow(obj) && ('array' == type || length === 0 || typeof length == 'number' && length > 0 && length - 1 in obj);
    }

    function compact(array) {
      return _filter.call(array, function (item) {
        return item != null;
      });
    }
    function flatten(array) {
      return array.length > 0 ? $.fn.concat.apply([], array) : array;
    }
    camelize = function camelize(str) {
      return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    };
    function dasherize(str) {
      return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
    }
    uniq = function uniq(array) {
      return _filter.call(array, function (item, idx) {
        return array.indexOf(item) == idx;
      });
    };

    function classRE(name) {
      return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
    }

    function maybeAddPx(name, value) {
      return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
    }

    function defaultDisplay(nodeName) {
      var element, display;
      if (!elementDisplay[nodeName]) {
        element = document.createElement(nodeName);
        document.body.appendChild(element);
        display = getComputedStyle(element, '').getPropertyValue("display");
        element.parentNode.removeChild(element);
        display == "none" && (display = "block");
        elementDisplay[nodeName] = display;
      }
      return elementDisplay[nodeName];
    }

    function _children(element) {
      return 'children' in element ? _slice.call(element.children) : $.map(element.childNodes, function (node) {
        if (node.nodeType == 1) return node;
      });
    }

    function Z(dom, selector) {
      var i,
          len = dom ? dom.length : 0;
      for (i = 0; i < len; i++) {
        this[i] = dom[i];
      }this.length = len;
      this.selector = selector || '';
    }

    // `$.zepto.fragment` takes a html string and an optional tag name
    // to generate DOM nodes from the given html string.
    // The generated DOM nodes are returned as an array.
    // This function can be overridden in plugins for example to make
    // it compatible with browsers that don't support the DOM fully.
    zepto.fragment = function (html, name, properties) {
      var dom, nodes, container;

      // A special case optimization for a single tag
      if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

      if (!dom) {
        if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
        if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
        if (!(name in containers)) name = '*';

        container = containers[name];
        container.innerHTML = '' + html;
        dom = $.each(_slice.call(container.childNodes), function () {
          container.removeChild(this);
        });
      }

      if (isPlainObject(properties)) {
        nodes = $(dom);
        $.each(properties, function (key, value) {
          if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
        });
      }

      return dom;
    };

    // `$.zepto.Z` swaps out the prototype of the given `dom` array
    // of nodes with `$.fn` and thus supplying all the Zepto functions
    // to the array. This method can be overridden in plugins.
    zepto.Z = function (dom, selector) {
      return new Z(dom, selector);
    };

    // `$.zepto.isZ` should return `true` if the given object is a Zepto
    // collection. This method can be overridden in plugins.
    zepto.isZ = function (object) {
      return object instanceof zepto.Z;
    };

    // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
    // takes a CSS selector and an optional context (and handles various
    // special cases).
    // This method can be overridden in plugins.
    zepto.init = function (selector, context) {
      var dom;
      // If nothing given, return an empty Zepto collection
      if (!selector) return zepto.Z();
      // Optimize for string selectors
      else if (typeof selector == 'string') {
          selector = selector.trim();
          // If it's a html fragment, create nodes from it
          // Note: In both Chrome 21 and Firefox 15, DOM error 12
          // is thrown if the fragment doesn't begin with <
          if (selector[0] == '<' && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null;
          // If there's a context, create a collection on that context first, and select
          // nodes from there
          else if (context !== undefined) return $(context).find(selector);
            // If it's a CSS selector, use it to select nodes.
            else dom = zepto.qsa(document, selector);
        }
        // If a function is given, call it when the DOM is ready
        else if (isFunction(selector)) return $(document).ready(selector);
          // If a Zepto collection is given, just return it
          else if (zepto.isZ(selector)) return selector;else {
              // normalize array if an array of nodes is given
              if (isArray(selector)) dom = compact(selector);
              // Wrap DOM nodes.
              else if (isObject(selector)) dom = [selector], selector = null;
                // If it's a html fragment, create nodes from it
                else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
                  // If there's a context, create a collection on that context first, and select
                  // nodes from there
                  else if (context !== undefined) return $(context).find(selector);
                    // And last but no least, if it's a CSS selector, use it to select nodes.
                    else dom = zepto.qsa(document, selector);
            }
      // create a new Zepto collection from the nodes found
      return zepto.Z(dom, selector);
    };

    // `$` will be the base `Zepto` object. When calling this
    // function just call `$.zepto.init, which makes the implementation
    // details of selecting nodes and creating Zepto collections
    // patchable in plugins.
    $ = function $(selector, context) {
      return zepto.init(selector, context);
    };

    function extend(target, source, deep) {
      for (key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
          if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
          if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
          extend(target[key], source[key], deep);
        } else if (source[key] !== undefined) target[key] = source[key];
      }
    }

    // Copy all but undefined properties from one or more
    // objects to the `target` object.
    $.extend = function (target) {
      var deep,
          args = _slice.call(arguments, 1);
      if (typeof target == 'boolean') {
        deep = target;
        target = args.shift();
      }
      args.forEach(function (arg) {
        extend(target, arg, deep);
      });
      return target;
    };

    // `$.zepto.qsa` is Zepto's CSS selector implementation which
    // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
    // This method can be overridden in plugins.
    zepto.qsa = function (element, selector) {
      var found,
          maybeID = selector[0] == '#',
          maybeClass = !maybeID && selector[0] == '.',
          nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
          // Ensure that a 1 char tag name still gets checked
      isSimple = simpleSelectorRE.test(nameOnly);
      return element.getElementById && isSimple && maybeID ? // Safari DocumentFragment doesn't have getElementById
      (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : _slice.call(isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
      maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
      element.getElementsByTagName(selector) : // Or a tag
      element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      );
    };

    function filtered(nodes, selector) {
      return selector == null ? $(nodes) : $(nodes).filter(selector);
    }

    $.contains = document.documentElement.contains ? function (parent, node) {
      return parent !== node && parent.contains(node);
    } : function (parent, node) {
      while (node && (node = node.parentNode)) {
        if (node === parent) return true;
      }return false;
    };

    function funcArg(context, arg, idx, payload) {
      return isFunction(arg) ? arg.call(context, idx, payload) : arg;
    }

    function setAttribute(node, name, value) {
      value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
    }

    // access className property while respecting SVGAnimatedString
    function className(node, value) {
      var klass = node.className || '',
          svg = klass && klass.baseVal !== undefined;

      if (value === undefined) return svg ? klass.baseVal : klass;
      svg ? klass.baseVal = value : node.className = value;
    }

    // "true"  => true
    // "false" => false
    // "null"  => null
    // "42"    => 42
    // "42.5"  => 42.5
    // "08"    => "08"
    // JSON    => parse if valid
    // String  => self
    function deserializeValue(value) {
      try {
        return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
      } catch (e) {
        return value;
      }
    }

    $.type = type;
    $.isFunction = isFunction;
    $.isWindow = isWindow;
    $.isArray = isArray;
    $.isPlainObject = isPlainObject;

    $.isEmptyObject = function (obj) {
      var name;
      for (name in obj) {
        return false;
      }return true;
    };

    $.isNumeric = function (val) {
      var num = Number(val),
          type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
      return val != null && type != 'boolean' && (type != 'string' || val.length) && !isNaN(num) && isFinite(num) || false;
    };

    $.inArray = function (elem, array, i) {
      return emptyArray.indexOf.call(array, elem, i);
    };

    $.camelCase = camelize;
    $.trim = function (str) {
      return str == null ? "" : String.prototype.trim.call(str);
    };

    // plugin compatibility
    $.uuid = 0;
    $.support = {};
    $.expr = {};
    $.noop = function () {};

    $.map = function (elements, callback) {
      var value,
          values = [],
          i,
          key;
      if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i);
        if (value != null) values.push(value);
      } else for (key in elements) {
        value = callback(elements[key], key);
        if (value != null) values.push(value);
      }
      return flatten(values);
    };

    $.each = function (elements, callback) {
      var i, key;
      if (likeArray(elements)) {
        for (i = 0; i < elements.length; i++) {
          if (callback.call(elements[i], i, elements[i]) === false) return elements;
        }
      } else {
        for (key in elements) {
          if (callback.call(elements[key], key, elements[key]) === false) return elements;
        }
      }

      return elements;
    };

    $.grep = function (elements, callback) {
      return _filter.call(elements, callback);
    };

    if (window.JSON) $.parseJSON = JSON.parse;

    // Populate the class2type map
    $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });

    // Define methods that will be available on all
    // Zepto collections
    $.fn = {
      constructor: zepto.Z,
      length: 0,

      // Because a collection acts like an array
      // copy over these useful array functions.
      forEach: emptyArray.forEach,
      reduce: emptyArray.reduce,
      push: emptyArray.push,
      sort: emptyArray.sort,
      splice: emptyArray.splice,
      indexOf: emptyArray.indexOf,
      concat: function concat() {
        var i,
            value,
            args = [];
        for (i = 0; i < arguments.length; i++) {
          value = arguments[i];
          args[i] = zepto.isZ(value) ? value.toArray() : value;
        }
        return _concat.apply(zepto.isZ(this) ? this.toArray() : this, args);
      },

      // `map` and `slice` in the jQuery API work differently
      // from their array counterparts
      map: function map(fn) {
        return $($.map(this, function (el, i) {
          return fn.call(el, i, el);
        }));
      },
      slice: function slice() {
        return $(_slice.apply(this, arguments));
      },

      ready: function ready(callback) {
        // don't use "interactive" on IE <= 10 (it can fired premature)
        if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) setTimeout(function () {
          callback($);
        }, 0);else {
          var handler = function handler() {
            document.removeEventListener("DOMContentLoaded", handler, false);
            window.removeEventListener("load", handler, false);
            callback($);
          };
          document.addEventListener("DOMContentLoaded", handler, false);
          window.addEventListener("load", handler, false);
        }
        return this;
      },
      get: function get(idx) {
        return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
      },
      toArray: function toArray() {
        return this.get();
      },
      size: function size() {
        return this.length;
      },
      remove: function remove() {
        return this.each(function () {
          if (this.parentNode != null) this.parentNode.removeChild(this);
        });
      },
      each: function each(callback) {
        emptyArray.every.call(this, function (el, idx) {
          return callback.call(el, idx, el) !== false;
        });
        return this;
      },
      filter: function filter(selector) {
        if (isFunction(selector)) return this.not(this.not(selector));
        return $(_filter.call(this, function (element) {
          return zepto.matches(element, selector);
        }));
      },
      add: function add(selector, context) {
        return $(uniq(this.concat($(selector, context))));
      },
      is: function is(selector) {
        return typeof selector == 'string' ? this.length > 0 && zepto.matches(this[0], selector) : selector && this.selector == selector.selector;
      },
      not: function not(selector) {
        var nodes = [];
        if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
          if (!selector.call(this, idx)) nodes.push(this);
        });else {
          var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);
          this.forEach(function (el) {
            if (excludes.indexOf(el) < 0) nodes.push(el);
          });
        }
        return $(nodes);
      },
      has: function has(selector) {
        return this.filter(function () {
          return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
        });
      },
      eq: function eq(idx) {
        return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
      },
      first: function first() {
        var el = this[0];
        return el && !isObject(el) ? el : $(el);
      },
      last: function last() {
        var el = this[this.length - 1];
        return el && !isObject(el) ? el : $(el);
      },
      find: function find(selector) {
        var result,
            $this = this;
        if (!selector) result = $();else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') result = $(selector).filter(function () {
          var node = this;
          return emptyArray.some.call($this, function (parent) {
            return $.contains(parent, node);
          });
        });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
          return zepto.qsa(this, selector);
        });
        return result;
      },
      closest: function closest(selector, context) {
        var nodes = [],
            collection = (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object' && $(selector);
        this.each(function (_, node) {
          while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) {
            node = node !== context && !isDocument(node) && node.parentNode;
          }if (node && nodes.indexOf(node) < 0) nodes.push(node);
        });
        return $(nodes);
      },
      parents: function parents(selector) {
        var ancestors = [],
            nodes = this;
        while (nodes.length > 0) {
          nodes = $.map(nodes, function (node) {
            if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
              ancestors.push(node);
              return node;
            }
          });
        }return filtered(ancestors, selector);
      },
      parent: function parent(selector) {
        return filtered(uniq(this.pluck('parentNode')), selector);
      },
      children: function children(selector) {
        return filtered(this.map(function () {
          return _children(this);
        }), selector);
      },
      contents: function contents() {
        return this.map(function () {
          return this.contentDocument || _slice.call(this.childNodes);
        });
      },
      siblings: function siblings(selector) {
        return filtered(this.map(function (i, el) {
          return _filter.call(_children(el.parentNode), function (child) {
            return child !== el;
          });
        }), selector);
      },
      empty: function empty() {
        return this.each(function () {
          this.innerHTML = '';
        });
      },
      // `pluck` is borrowed from Prototype.js
      pluck: function pluck(property) {
        return $.map(this, function (el) {
          return el[property];
        });
      },
      show: function show() {
        return this.each(function () {
          this.style.display == "none" && (this.style.display = '');
          if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
        });
      },
      replaceWith: function replaceWith(newContent) {
        return this.before(newContent).remove();
      },
      wrap: function wrap(structure) {
        var func = isFunction(structure);
        if (this[0] && !func) var dom = $(structure).get(0),
            clone = dom.parentNode || this.length > 1;

        return this.each(function (index) {
          $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
        });
      },
      wrapAll: function wrapAll(structure) {
        if (this[0]) {
          $(this[0]).before(structure = $(structure));
          var children;
          // drill down to the inmost element
          while ((children = structure.children()).length) {
            structure = children.first();
          }$(structure).append(this);
        }
        return this;
      },
      wrapInner: function wrapInner(structure) {
        var func = isFunction(structure);
        return this.each(function (index) {
          var self = $(this),
              contents = self.contents(),
              dom = func ? structure.call(this, index) : structure;
          contents.length ? contents.wrapAll(dom) : self.append(dom);
        });
      },
      unwrap: function unwrap() {
        this.parent().each(function () {
          $(this).replaceWith($(this).children());
        });
        return this;
      },
      clone: function clone() {
        return this.map(function () {
          return this.cloneNode(true);
        });
      },
      hide: function hide() {
        return this.css("display", "none");
      },
      toggle: function toggle(setting) {
        return this.each(function () {
          var el = $(this);(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
        });
      },
      prev: function prev(selector) {
        return $(this.pluck('previousElementSibling')).filter(selector || '*');
      },
      next: function next(selector) {
        return $(this.pluck('nextElementSibling')).filter(selector || '*');
      },
      html: function html(_html) {
        return 0 in arguments ? this.each(function (idx) {
          var originHtml = this.innerHTML;
          $(this).empty().append(funcArg(this, _html, idx, originHtml));
        }) : 0 in this ? this[0].innerHTML : null;
      },
      text: function text(_text) {
        return 0 in arguments ? this.each(function (idx) {
          var newText = funcArg(this, _text, idx, this.textContent);
          this.textContent = newText == null ? '' : '' + newText;
        }) : 0 in this ? this.pluck('textContent').join("") : null;
      },
      attr: function attr(name, value) {
        var result;
        return typeof name == 'string' && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined : this.each(function (idx) {
          if (this.nodeType !== 1) return;
          if (isObject(name)) for (key in name) {
            setAttribute(this, key, name[key]);
          } else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
        });
      },
      removeAttr: function removeAttr(name) {
        return this.each(function () {
          this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
            setAttribute(this, attribute);
          }, this);
        });
      },
      prop: function prop(name, value) {
        name = propMap[name] || name;
        return typeof name == 'string' && !(1 in arguments) ? this[0] && this[0][name] : this.each(function (idx) {
          if (isObject(name)) for (key in name) {
            this[propMap[key] || key] = name[key];
          } else this[name] = funcArg(this, value, idx, this[name]);
        });
      },
      removeProp: function removeProp(name) {
        name = propMap[name] || name;
        return this.each(function () {
          delete this[name];
        });
      },
      data: function data(name, value) {
        var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();

        var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);

        return data !== null ? deserializeValue(data) : undefined;
      },
      val: function val(value) {
        if (0 in arguments) {
          if (value == null) value = "";
          return this.each(function (idx) {
            this.value = funcArg(this, value, idx, this.value);
          });
        } else {
          return this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {
            return this.selected;
          }).pluck('value') : this[0].value);
        }
      },
      offset: function offset(coordinates) {
        if (coordinates) return this.each(function (index) {
          var $this = $(this),
              coords = funcArg(this, coordinates, index, $this.offset()),
              parentOffset = $this.offsetParent().offset(),
              props = {
            top: coords.top - parentOffset.top,
            left: coords.left - parentOffset.left
          };

          if ($this.css('position') == 'static') props['position'] = 'relative';
          $this.css(props);
        });
        if (!this.length) return null;
        if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0])) return { top: 0, left: 0 };
        var obj = this[0].getBoundingClientRect();
        return {
          left: obj.left + window.pageXOffset,
          top: obj.top + window.pageYOffset,
          width: Math.round(obj.width),
          height: Math.round(obj.height)
        };
      },
      css: function css(property, value) {
        if (arguments.length < 2) {
          var element = this[0];
          if (typeof property == 'string') {
            if (!element) return;
            return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property);
          } else if (isArray(property)) {
            if (!element) return;
            var props = {};
            var computedStyle = getComputedStyle(element, '');
            $.each(property, function (_, prop) {
              props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
            });
            return props;
          }
        }

        var css = '';
        if (type(property) == 'string') {
          if (!value && value !== 0) this.each(function () {
            this.style.removeProperty(dasherize(property));
          });else css = dasherize(property) + ":" + maybeAddPx(property, value);
        } else {
          for (key in property) {
            if (!property[key] && property[key] !== 0) this.each(function () {
              this.style.removeProperty(dasherize(key));
            });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
          }
        }

        return this.each(function () {
          this.style.cssText += ';' + css;
        });
      },
      index: function index(element) {
        return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
      },
      hasClass: function hasClass(name) {
        if (!name) return false;
        return emptyArray.some.call(this, function (el) {
          return this.test(className(el));
        }, classRE(name));
      },
      addClass: function addClass(name) {
        if (!name) return this;
        return this.each(function (idx) {
          if (!('className' in this)) return;
          classList = [];
          var cls = className(this),
              newName = funcArg(this, name, idx, cls);
          newName.split(/\s+/g).forEach(function (klass) {
            if (!$(this).hasClass(klass)) classList.push(klass);
          }, this);
          classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
        });
      },
      removeClass: function removeClass(name) {
        return this.each(function (idx) {
          if (!('className' in this)) return;
          if (name === undefined) return className(this, '');
          classList = className(this);
          funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
            classList = classList.replace(classRE(klass), " ");
          });
          className(this, classList.trim());
        });
      },
      toggleClass: function toggleClass(name, when) {
        if (!name) return this;
        return this.each(function (idx) {
          var $this = $(this),
              names = funcArg(this, name, idx, className(this));
          names.split(/\s+/g).forEach(function (klass) {
            (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
          });
        });
      },
      scrollTop: function scrollTop(value) {
        if (!this.length) return;
        var hasScrollTop = 'scrollTop' in this[0];
        if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
        return this.each(hasScrollTop ? function () {
          this.scrollTop = value;
        } : function () {
          this.scrollTo(this.scrollX, value);
        });
      },
      scrollLeft: function scrollLeft(value) {
        if (!this.length) return;
        var hasScrollLeft = 'scrollLeft' in this[0];
        if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
        return this.each(hasScrollLeft ? function () {
          this.scrollLeft = value;
        } : function () {
          this.scrollTo(value, this.scrollY);
        });
      },
      position: function position() {
        if (!this.length) return;

        var elem = this[0],

        // Get *real* offsetParent
        offsetParent = this.offsetParent(),

        // Get correct offsets
        offset = this.offset(),
            parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

        // Subtract element margins
        // note: when an element has margin: auto the offsetLeft and marginLeft
        // are the same in Safari causing offset.left to incorrectly be 0
        offset.top -= parseFloat($(elem).css('margin-top')) || 0;
        offset.left -= parseFloat($(elem).css('margin-left')) || 0;

        // Add offsetParent borders
        parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
        parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;

        // Subtract the two offsets
        return {
          top: offset.top - parentOffset.top,
          left: offset.left - parentOffset.left
        };
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          var parent = this.offsetParent || document.body;
          while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") {
            parent = parent.offsetParent;
          }return parent;
        });
      }

      // for now
    };$.fn.detach = $.fn.remove

    // Generate the `width` and `height` functions
    ;['width', 'height'].forEach(function (dimension) {
      var dimensionProperty = dimension.replace(/./, function (m) {
        return m[0].toUpperCase();
      });

      $.fn[dimension] = function (value) {
        var offset,
            el = this[0];
        if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
          el = $(this);
          el.css(dimension, funcArg(this, value, idx, el[dimension]()));
        });
      };
    });

    function traverseNode(node, fun) {
      fun(node);
      for (var i = 0, len = node.childNodes.length; i < len; i++) {
        traverseNode(node.childNodes[i], fun);
      }
    }

    // Generate the `after`, `prepend`, `before`, `append`,
    // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
    adjacencyOperators.forEach(function (operator, operatorIndex) {
      var inside = operatorIndex % 2; //=> prepend, append

      $.fn[operator] = function () {
        // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
        var argType,
            nodes = $.map(arguments, function (arg) {
          var arr = [];
          argType = type(arg);
          if (argType == "array") {
            arg.forEach(function (el) {
              if (el.nodeType !== undefined) return arr.push(el);else if ($.zepto.isZ(el)) return arr = arr.concat(el.get());
              arr = arr.concat(zepto.fragment(el));
            });
            return arr;
          }
          return argType == "object" || arg == null ? arg : zepto.fragment(arg);
        }),
            parent,
            copyByClone = this.length > 1;
        if (nodes.length < 1) return this;

        return this.each(function (_, target) {
          parent = inside ? target : target.parentNode;

          // convert all methods to a "before" operation
          target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;

          var parentInDocument = $.contains(document.documentElement, parent);

          nodes.forEach(function (node) {
            if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();

            parent.insertBefore(node, target);
            if (parentInDocument) traverseNode(node, function (el) {
              if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) {
                var target = el.ownerDocument ? el.ownerDocument.defaultView : window;
                target['eval'].call(target, el.innerHTML);
              }
            });
          });
        });
      };

      // after    => insertAfter
      // prepend  => prependTo
      // before   => insertBefore
      // append   => appendTo
      $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
        $(html)[operator](this);
        return this;
      };
    });

    zepto.Z.prototype = Z.prototype = $.fn;

    // Export internal API functions in the `$.zepto` namespace
    zepto.uniq = uniq;
    zepto.deserializeValue = deserializeValue;
    $.zepto = zepto;

    return $;
  }();

  window.Zepto = Zepto;
  window.$ === undefined && (window.$ = Zepto);(function ($) {
    var _zid = 1,
        undefined,
        slice = Array.prototype.slice,
        isFunction = $.isFunction,
        isString = function isString(obj) {
      return typeof obj == 'string';
    },
        handlers = {},
        specialEvents = {},
        focusinSupported = 'onfocusin' in window,
        focus = { focus: 'focusin', blur: 'focusout' },
        hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };

    specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

    function zid(element) {
      return element._zid || (element._zid = _zid++);
    }
    function findHandlers(element, event, fn, selector) {
      event = parse(event);
      if (event.ns) var matcher = matcherFor(event.ns);
      return (handlers[zid(element)] || []).filter(function (handler) {
        return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
      });
    }
    function parse(event) {
      var parts = ('' + event).split('.');
      return { e: parts[0], ns: parts.slice(1).sort().join(' ') };
    }
    function matcherFor(ns) {
      return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
    }

    function eventCapture(handler, captureSetting) {
      return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
    }

    function realEvent(type) {
      return hover[type] || focusinSupported && focus[type] || type;
    }

    function add(element, events, fn, data, selector, delegator, capture) {
      var id = zid(element),
          set = handlers[id] || (handlers[id] = []);
      events.split(/\s/).forEach(function (event) {
        if (event == 'ready') return $(document).ready(fn);
        var handler = parse(event);
        handler.fn = fn;
        handler.sel = selector;
        // emulate mouseenter, mouseleave
        if (handler.e in hover) fn = function fn(e) {
          var related = e.relatedTarget;
          if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
        };
        handler.del = delegator;
        var callback = delegator || fn;
        handler.proxy = function (e) {
          e = compatible(e);
          if (e.isImmediatePropagationStopped()) return;
          e.data = data;
          var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
          if (result === false) e.preventDefault(), e.stopPropagation();
          return result;
        };
        handler.i = set.length;
        set.push(handler);
        if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
      });
    }
    function remove(element, events, fn, selector, capture) {
      var id = zid(element);(events || '').split(/\s/).forEach(function (event) {
        findHandlers(element, event, fn, selector).forEach(function (handler) {
          delete handlers[id][handler.i];
          if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
        });
      });
    }

    $.event = { add: add, remove: remove };

    $.proxy = function (fn, context) {
      var args = 2 in arguments && slice.call(arguments, 2);
      if (isFunction(fn)) {
        var proxyFn = function proxyFn() {
          return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
        };
        proxyFn._zid = zid(fn);
        return proxyFn;
      } else if (isString(context)) {
        if (args) {
          args.unshift(fn[context], fn);
          return $.proxy.apply(null, args);
        } else {
          return $.proxy(fn[context], fn);
        }
      } else {
        throw new TypeError("expected function");
      }
    };

    $.fn.bind = function (event, data, callback) {
      return this.on(event, data, callback);
    };
    $.fn.unbind = function (event, callback) {
      return this.off(event, callback);
    };
    $.fn.one = function (event, selector, data, callback) {
      return this.on(event, selector, data, callback, 1);
    };

    var returnTrue = function returnTrue() {
      return true;
    },
        returnFalse = function returnFalse() {
      return false;
    },
        ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
        eventMethods = {
      preventDefault: 'isDefaultPrevented',
      stopImmediatePropagation: 'isImmediatePropagationStopped',
      stopPropagation: 'isPropagationStopped'
    };

    function compatible(event, source) {
      if (source || !event.isDefaultPrevented) {
        source || (source = event);

        $.each(eventMethods, function (name, predicate) {
          var sourceMethod = source[name];
          event[name] = function () {
            this[predicate] = returnTrue;
            return sourceMethod && sourceMethod.apply(source, arguments);
          };
          event[predicate] = returnFalse;
        });

        try {
          event.timeStamp || (event.timeStamp = Date.now());
        } catch (ignored) {}

        if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
      }
      return event;
    }

    function createProxy(event) {
      var key,
          proxy = { originalEvent: event };
      for (key in event) {
        if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
      }return compatible(proxy, event);
    }

    $.fn.delegate = function (selector, event, callback) {
      return this.on(event, selector, callback);
    };
    $.fn.undelegate = function (selector, event, callback) {
      return this.off(event, selector, callback);
    };

    $.fn.live = function (event, callback) {
      $(document.body).delegate(this.selector, event, callback);
      return this;
    };
    $.fn.die = function (event, callback) {
      $(document.body).undelegate(this.selector, event, callback);
      return this;
    };

    $.fn.on = function (event, selector, data, callback, one) {
      var autoRemove,
          delegator,
          $this = this;
      if (event && !isString(event)) {
        $.each(event, function (type, fn) {
          $this.on(type, selector, data, fn, one);
        });
        return $this;
      }

      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
      if (callback === undefined || data === false) callback = data, data = undefined;

      if (callback === false) callback = returnFalse;

      return $this.each(function (_, element) {
        if (one) autoRemove = function autoRemove(e) {
          remove(element, e.type, callback);
          return callback.apply(this, arguments);
        };

        if (selector) delegator = function delegator(e) {
          var evt,
              match = $(e.target).closest(selector, element).get(0);
          if (match && match !== element) {
            evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });
            return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
          }
        };

        add(element, event, callback, data, selector, delegator || autoRemove);
      });
    };
    $.fn.off = function (event, selector, callback) {
      var $this = this;
      if (event && !isString(event)) {
        $.each(event, function (type, fn) {
          $this.off(type, selector, fn);
        });
        return $this;
      }

      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;

      if (callback === false) callback = returnFalse;

      return $this.each(function () {
        remove(this, event, callback, selector);
      });
    };

    $.fn.trigger = function (event, args) {
      event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
      event._args = args;
      return this.each(function () {
        // handle focus(), blur() by calling them directly
        if (event.type in focus && typeof this[event.type] == "function") this[event.type]();
        // items in the collection might not be DOM elements
        else if ('dispatchEvent' in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
      });
    };

    // triggers event handlers on current element just as if an event occurred,
    // doesn't trigger an actual event, doesn't bubble
    $.fn.triggerHandler = function (event, args) {
      var e, result;
      this.each(function (i, element) {
        e = createProxy(isString(event) ? $.Event(event) : event);
        e._args = args;
        e.target = element;
        $.each(findHandlers(element, event.type || event), function (i, handler) {
          result = handler.proxy(e);
          if (e.isImmediatePropagationStopped()) return false;
        });
      });
      return result;
    }

    // shortcut methods for `.bind(event, fn)` for each event type
    ;('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
      $.fn[event] = function (callback) {
        return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
      };
    });

    $.Event = function (type, props) {
      if (!isString(type)) props = type, type = props.type;
      var event = document.createEvent(specialEvents[type] || 'Events'),
          bubbles = true;
      if (props) for (var name in props) {
        name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
      }event.initEvent(type, bubbles, true);
      return compatible(event);
    };
  })(Zepto);(function ($) {
    var jsonpID = +new Date(),
        document = window.document,
        key,
        name,
        rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        scriptTypeRE = /^(?:text|application)\/javascript/i,
        xmlTypeRE = /^(?:text|application)\/xml/i,
        jsonType = 'application/json',
        htmlType = 'text/html',
        blankRE = /^\s*$/,
        originAnchor = document.createElement('a');

    originAnchor.href = window.location.href;

    // trigger a custom event and return false if it was cancelled
    function triggerAndReturn(context, eventName, data) {
      var event = $.Event(eventName);
      $(context).trigger(event, data);
      return !event.isDefaultPrevented();
    }

    // trigger an Ajax "global" event
    function triggerGlobal(settings, context, eventName, data) {
      if (settings.global) return triggerAndReturn(context || document, eventName, data);
    }

    // Number of active Ajax requests
    $.active = 0;

    function ajaxStart(settings) {
      if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
    }
    function ajaxStop(settings) {
      if (settings.global && ! --$.active) triggerGlobal(settings, null, 'ajaxStop');
    }

    // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
    function ajaxBeforeSend(xhr, settings) {
      var context = settings.context;
      if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

      triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
    }
    function ajaxSuccess(data, xhr, settings, deferred) {
      var context = settings.context,
          status = 'success';
      settings.success.call(context, data, status, xhr);
      if (deferred) deferred.resolveWith(context, [data, status, xhr]);
      triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
      ajaxComplete(status, xhr, settings);
    }
    // type: "timeout", "error", "abort", "parsererror"
    function ajaxError(error, type, xhr, settings, deferred) {
      var context = settings.context;
      settings.error.call(context, xhr, type, error);
      if (deferred) deferred.rejectWith(context, [xhr, type, error]);
      triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
      ajaxComplete(type, xhr, settings);
    }
    // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
    function ajaxComplete(status, xhr, settings) {
      var context = settings.context;
      settings.complete.call(context, xhr, status);
      triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
      ajaxStop(settings);
    }

    function ajaxDataFilter(data, type, settings) {
      if (settings.dataFilter == empty) return data;
      var context = settings.context;
      return settings.dataFilter.call(context, data, type);
    }

    // Empty function, used as default callback
    function empty() {}

    $.ajaxJSONP = function (options, deferred) {
      if (!('type' in options)) return $.ajax(options);

      var _callbackName = options.jsonpCallback,
          callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'Zepto' + jsonpID++,
          script = document.createElement('script'),
          originalCallback = window[callbackName],
          responseData,
          abort = function abort(errorType) {
        $(script).triggerHandler('error', errorType || 'abort');
      },
          xhr = { abort: abort },
          abortTimeout;

      if (deferred) deferred.promise(xhr);

      $(script).on('load error', function (e, errorType) {
        clearTimeout(abortTimeout);
        $(script).off().remove();

        if (e.type == 'error' || !responseData) {
          ajaxError(null, errorType || 'error', xhr, options, deferred);
        } else {
          ajaxSuccess(responseData[0], xhr, options, deferred);
        }

        window[callbackName] = originalCallback;
        if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);

        originalCallback = responseData = undefined;
      });

      if (ajaxBeforeSend(xhr, options) === false) {
        abort('abort');
        return xhr;
      }

      window[callbackName] = function () {
        responseData = arguments;
      };

      script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
      document.head.appendChild(script);

      if (options.timeout > 0) abortTimeout = setTimeout(function () {
        abort('timeout');
      }, options.timeout);

      return xhr;
    };

    $.ajaxSettings = {
      // Default type of request
      type: 'GET',
      // Callback that is executed before request
      beforeSend: empty,
      // Callback that is executed if the request succeeds
      success: empty,
      // Callback that is executed the the server drops error
      error: empty,
      // Callback that is executed on request complete (both: error and success)
      complete: empty,
      // The context for the callbacks
      context: null,
      // Whether to trigger "global" Ajax events
      global: true,
      // Transport
      xhr: function xhr() {
        return new window.XMLHttpRequest();
      },
      // MIME types mapping
      // IIS returns Javascript as "application/x-javascript"
      accepts: {
        script: 'text/javascript, application/javascript, application/x-javascript',
        json: jsonType,
        xml: 'application/xml, text/xml',
        html: htmlType,
        text: 'text/plain'
      },
      // Whether the request is to another domain
      crossDomain: false,
      // Default timeout
      timeout: 0,
      // Whether data should be serialized to string
      processData: true,
      // Whether the browser should be allowed to cache GET responses
      cache: true,
      //Used to handle the raw response data of XMLHttpRequest.
      //This is a pre-filtering function to sanitize the response.
      //The sanitized response should be returned
      dataFilter: empty
    };

    function mimeToDataType(mime) {
      if (mime) mime = mime.split(';', 2)[0];
      return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
    }

    function appendQuery(url, query) {
      if (query == '') return url;
      return (url + '&' + query).replace(/[&?]{1,2}/, '?');
    }

    // serialize payload and append it to the URL for GET requests
    function serializeData(options) {
      if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
      if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType)) options.url = appendQuery(options.url, options.data), options.data = undefined;
    }

    $.ajax = function (options) {
      var settings = $.extend({}, options || {}),
          deferred = $.Deferred && $.Deferred(),
          urlAnchor,
          hashIndex;
      for (key in $.ajaxSettings) {
        if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
      }ajaxStart(settings);

      if (!settings.crossDomain) {
        urlAnchor = document.createElement('a');
        urlAnchor.href = settings.url;
        // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
        urlAnchor.href = urlAnchor.href;
        settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;
      }

      if (!settings.url) settings.url = window.location.toString();
      if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex);
      serializeData(settings);

      var dataType = settings.dataType,
          hasPlaceholder = /\?.+=\?/.test(settings.url);
      if (hasPlaceholder) dataType = 'jsonp';

      if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());

      if ('jsonp' == dataType) {
        if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
        return $.ajaxJSONP(settings, deferred);
      }

      var mime = settings.accepts[dataType],
          headers = {},
          setHeader = function setHeader(name, value) {
        headers[name.toLowerCase()] = [name, value];
      },
          protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
          xhr = settings.xhr(),
          nativeSetHeader = xhr.setRequestHeader,
          abortTimeout;

      if (deferred) deferred.promise(xhr);

      if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
      setHeader('Accept', mime || '*/*');
      if (mime = settings.mimeType || mime) {
        if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
        xhr.overrideMimeType && xhr.overrideMimeType(mime);
      }
      if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');

      if (settings.headers) for (name in settings.headers) {
        setHeader(name, settings.headers[name]);
      }xhr.setRequestHeader = setHeader;

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          xhr.onreadystatechange = empty;
          clearTimeout(abortTimeout);
          var result,
              error = false;
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
            dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));

            if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob') result = xhr.response;else {
              result = xhr.responseText;

              try {
                // http://perfectionkills.com/global-eval-what-are-the-options/
                // sanitize response accordingly if data filter callback provided
                result = ajaxDataFilter(result, dataType, settings);
                if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);
              } catch (e) {
                error = e;
              }

              if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred);
            }

            ajaxSuccess(result, xhr, settings, deferred);
          } else {
            ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
          }
        }
      };

      if (ajaxBeforeSend(xhr, settings) === false) {
        xhr.abort();
        ajaxError(null, 'abort', xhr, settings, deferred);
        return xhr;
      }

      var async = 'async' in settings ? settings.async : true;
      xhr.open(settings.type, settings.url, async, settings.username, settings.password);

      if (settings.xhrFields) for (name in settings.xhrFields) {
        xhr[name] = settings.xhrFields[name];
      }for (name in headers) {
        nativeSetHeader.apply(xhr, headers[name]);
      }if (settings.timeout > 0) abortTimeout = setTimeout(function () {
        xhr.onreadystatechange = empty;
        xhr.abort();
        ajaxError(null, 'timeout', xhr, settings, deferred);
      }, settings.timeout);

      // avoid sending empty string (#319)
      xhr.send(settings.data ? settings.data : null);
      return xhr;
    };

    // handle optional data/success arguments
    function parseArguments(url, data, success, dataType) {
      if ($.isFunction(data)) dataType = success, success = data, data = undefined;
      if (!$.isFunction(success)) dataType = success, success = undefined;
      return {
        url: url,
        data: data,
        success: success,
        dataType: dataType
      };
    }

    $.get = function () /* url, data, success, dataType */{
      return $.ajax(parseArguments.apply(null, arguments));
    };

    $.post = function () /* url, data, success, dataType */{
      var options = parseArguments.apply(null, arguments);
      options.type = 'POST';
      return $.ajax(options);
    };

    $.getJSON = function () /* url, data, success */{
      var options = parseArguments.apply(null, arguments);
      options.dataType = 'json';
      return $.ajax(options);
    };

    $.fn.load = function (url, data, success) {
      if (!this.length) return this;
      var self = this,
          parts = url.split(/\s/),
          selector,
          options = parseArguments(url, data, success),
          callback = options.success;
      if (parts.length > 1) options.url = parts[0], selector = parts[1];
      options.success = function (response) {
        self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
        callback && callback.apply(self, arguments);
      };
      $.ajax(options);
      return this;
    };

    var escape = encodeURIComponent;

    function serialize(params, obj, traditional, scope) {
      var type,
          array = $.isArray(obj),
          hash = $.isPlainObject(obj);
      $.each(obj, function (key, value) {
        type = $.type(value);
        if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
        // handle data in serializeArray() format
        if (!scope && array) params.add(value.name, value.value);
        // recurse into nested objects
        else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
      });
    }

    $.param = function (obj, traditional) {
      var params = [];
      params.add = function (key, value) {
        if ($.isFunction(value)) value = value();
        if (value == null) value = "";
        this.push(escape(key) + '=' + escape(value));
      };
      serialize(params, obj, traditional);
      return params.join('&').replace(/%20/g, '+');
    };
  })(Zepto);(function ($) {
    $.fn.serializeArray = function () {
      var name,
          type,
          result = [],
          add = function add(value) {
        if (value.forEach) return value.forEach(add);
        result.push({ name: name, value: value });
      };
      if (this[0]) $.each(this[0].elements, function (_, field) {
        type = field.type, name = field.name;
        if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && (type != 'radio' && type != 'checkbox' || field.checked)) add($(field).val());
      });
      return result;
    };

    $.fn.serialize = function () {
      var result = [];
      this.serializeArray().forEach(function (elm) {
        result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
      });
      return result.join('&');
    };

    $.fn.submit = function (callback) {
      if (0 in arguments) this.bind('submit', callback);else if (this.length) {
        var event = $.Event('submit');
        this.eq(0).trigger(event);
        if (!event.isDefaultPrevented()) this.get(0).submit();
      }
      return this;
    };
  })(Zepto);(function () {
    // getComputedStyle shouldn't freak out when called
    // without a valid element as argument
    try {
      getComputedStyle(undefined);
    } catch (e) {
      var nativeGetComputedStyle = getComputedStyle;
      window.getComputedStyle = function (element, pseudoElement) {
        try {
          return nativeGetComputedStyle(element, pseudoElement);
        } catch (e) {
          return null;
        }
      };
    }
  })();
  return Zepto;
});

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

/***/ }),

/***/ "zXdF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("8stO");

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

var Dialog = function (_Popbase) {
  _inherits(Dialog, _Popbase);

  function Dialog(options) {
    _classCallCheck(this, Dialog);

    var newOptions = (0, _util.merge)({}, defaultOptions, options);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, newOptions));

    _this._className = 'Dialog';
    return _this;
  }

  _createClass(Dialog, [{
    key: '_initDom',
    value: function _initDom() {
      this.container = document.createElement('div');
      this.container.className = this.containerClass + ' lmui-dialog-container lmui-dialog-' + this.placement;
      this.width === 'auto' ? '' : this.container.style.width = this.width;
      this.height === 'auto' ? '' : this.container.style.height = this.height;
      var title = this.title,
          button = this.button;

      var html = [function () {
        var btnhtml = '';
        if (title) {
          btnhtml = ['<div class="lmui-dialog-head">', title ? '<div class="lmui-dialog-title">' + title + '</div>' : '',
          // '<span class="icon icon-mid"><span class="icodispatchWithContextn-plus"></span></span>',
          '</div>'].join('');
        }
        return btnhtml;
      }(), '<div class="lmui-dialog-body">' + this.content + '</div>', function () {
        var btnhtml = '';
        var size = button.length;
        if (size) {
          var _Dialog$GlobalConf = Dialog.GlobalConf,
              btnCssMap = _Dialog$GlobalConf.btnCssMap,
              getBtnRetId = _Dialog$GlobalConf.getBtnRetId;

          btnhtml += '<div class="lmui-dialog-foot">';
          for (var i = 0; i < size; i++) {
            var btnText = button[i];
            var mapCss = btnCssMap[btnText.slice(0, 1)];
            var btnRetId = ('' + getBtnRetId(i, size)).replace(/\"/g, '&quot;');
            btnText = mapCss ? btnText.slice(1) : btnText;
            btnhtml += '<button data-action="btn" data-retid="' + btnRetId + '" class="' + btnCssMap.def + (mapCss ? ' ' + mapCss : '') + '">' + btnText + '</button>';
          }
          btnhtml += '</div>';
        }
        return btnhtml;
      }()].join('');
      this.container.innerHTML = html;
      this.warp.appendChild(this.container);
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      var me = this;
      this.container.addEventListener('click', function (e) {
        if (e.target.className.indexOf(me.closeClass) >= 0) {
          if (me.dispatch('onBtnClick', 0) !== false) {
            me.close();
          }
          return false;
        }
        if (e.target.dataset && e.target.dataset.action === 'btn' || e.target.getAttribute('data-action') === 'btn') {
          me.dispatch('onBtnClick', e.target.dataset ? e.target.dataset.retid : e.target.getAttribute('data-retid'));
        }
      }, false);
    }
  }, {
    key: '_onOpen',
    value: function _onOpen() {
      var _this2 = this;

      this.transition = true;
      (0, _util.addClass)(this.container, 'lmui-dialog-' + this.placement + '-enter');
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
      (0, _util.removeClass)(this.container, 'lmui-dialog-' + this.placement + '-enter');
      window.setTimeout(function () {
        _this3.transition = false;
        _this3._doAfterClose();
      }, 300);
    }
  }]);

  return Dialog;
}(_popbase2.default);

exports.default = Dialog;

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
  getBtnRetId: function getBtnRetId(i) {
    return i + 1;
  }
};
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=lmui.js.map