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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Util = {
    merge: function merge(target) {
        for (var i = 1, j = arguments.length; i < j; i++) {
            var source = arguments[i] || {};
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
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
        if (!el || !cls) return false;
        if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
        if (el.classList) {
            return el.classList.contains(cls);
        } else {
            return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }
    },
    addClass: function addClass(el, cls) {
        if (!el) return;
        var curClass = el.className;
        var classes = (cls || '').split(' ');
        for (var i = 0, j = classes.length; i < j; i++) {
            var clsName = classes[i];
            if (!clsName) continue;

            if (el.classList) {
                el.classList.add(clsName);
            } else {
                if (!this.hasClass(el, clsName)) {
                    curClass += ' ' + clsName;
                }
            }
        }
        if (!el.classList) {
            el.className = curClass;
        }
    },
    removeClass: function removeClass(el, cls) {
        if (!el || !cls) return;
        var classes = cls.split(' ');
        var curClass = ' ' + el.className + ' ';

        for (var i = 0, j = classes.length; i < j; i++) {
            var clsName = classes[i];
            if (!clsName) continue;

            if (el.classList) {
                el.classList.remove(clsName);
            } else {
                if (this.hasClass(el, clsName)) {
                    curClass = curClass.replace(' ' + clsName + ' ', ' ');
                }
            }
        }
        if (!el.classList) {
            el.className = String.prototype.trim.call(curClass);
        }
    },
    scrollBarWidth: undefined,
    getScrollBarWidth: function getScrollBarWidth() {
        if (this.scrollBarWidth !== undefined) return this.scrollBarWidth;

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
    }
};
exports.default = Util;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class = __webpack_require__(7);

var _class2 = _interopRequireDefault(_class);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _popManager = __webpack_require__(10);

var _popManager2 = _interopRequireDefault(_popManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var Popbase = _class2.default.extend({
    _className: "Popbase",
    init: function init(option) {
        // 扩展/覆盖私有属性
        _util2.default.merge(this, defaultOption, option);
        this._super();
        this._createEvent('onCreate onBeforeShow onShow onBeforeClose onClose onDestory');
        // this._popupId = 'popup-' + uuid++;
        _popManager2.default.register(this.instanceId(), this);
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
    _initDom: function _initDom() {
        this.container = null;
    },
    // 初始化事件 该方法需要继承
    _initEvent: function _initEvent() {},
    // 显示pop
    show: function show() {
        // 如果已经开启状态 或者 onBeforeShow 返回 false 则不会打开
        if (this.isOpened || this.dispatch('onBeforeShow') === false) return;
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
    _doOpen: function _doOpen() {
        if (this.willShow && !this.willShow()) return;
        this.isOpening = true;
        var container = this.container;
        var modal = this.modal;
        var zIndex = this.zIndex;
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
        container.style.zIndex = _popManager2.default.nextZIndex();
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
    _doAfterOpen: function _doAfterOpen() {
        this.isOpening = false;
    },
    // 关闭
    close: function close() {
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
    _doClose: function _doClose() {
        if (this.willClose && !this.willClose()) return;
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
    _doAfterClose: function _doAfterClose() {
        _popManager2.default.closeOverlay(this.instanceId());
        this.isClosing = false;
        this.destoryOnClose ? this.destory() : '';
    },
    // 销毁
    destory: function destory() {
        this.dispatch('onDestory');
        _popManager2.default.deregister(this.instanceId());
        _popManager2.default.closeOverlay(this.instanceId());
        if (this.modal && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            // document.body.style.paddingRight = this.bodyPaddingRight;
        }
        this.bodyOverflow = null;
        // this.bodyPaddingRight = null;
        if (this.container) this.container.parentNode.removeChild(this.container);
        delete this.container;
        delete this;
    }
});
exports.default = Popbase;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _popbase = __webpack_require__(1);

var _popbase2 = _interopRequireDefault(_popbase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOption = {
    // 目标元素dom
    target: null,
    // 触发行为 hover focus click
    action: 'hover',
    // distance 根元素具体target的距离
    distance: 4,
    // 是否默认打开
    autoShow: false,
    // 外包容器class
    containerClass: 'ui-popover-normal',
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
var Popover = _popbase2.default.extend({
    _className: "Popover",
    init: function init(option) {
        var obj = _util2.default.merge({}, defaultOption, option);
        this._super(obj);
    },
    _initDom: function _initDom() {
        var me = this;
        this.root = document.createElement('div');
        this.root.className = 'ui-popover-root';
        document.body.appendChild(this.root);
        this.container = document.createElement('div');
        this.container.className = this.containerClass + ' ui-popover-container ui-popover-' + this.placement;
        this.container.innerHTML = ['<div class="ui-popover-content">', '<div class="ui-popover-arrow"></div>', '<div class="ui-popover-inner">', this.content, '</div>', '</div>'].join('');
        this.root.appendChild(this.container);
    },
    _initEvent: function _initEvent() {
        var me = this;
        if (this.action == 'click') {
            this.target.addEventListener('click', function (e) {
                me.show();
            }, false);
            window.addEventListener('click', function (e) {
                if (e.target != me.target) {
                    me.close();
                }
            }, false);
        } else if (this.action == 'focus') {
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
    },
    _position: function _position() {
        var targetRect = this.target.getClientRects()[0],
            containerRect = this.container.getClientRects()[0];
        if (this.placement.indexOf('right') == 0) {
            this.container.style.left = targetRect.right + this.distance + 'px';
            this.container.style.top = targetRect.top + targetRect.height / 2 + 'px';
        } else if (this.placement.indexOf('bottom') == 0) {
            this.container.style.left = targetRect.left + targetRect.width / 2 + 'px';
            this.container.style.top = targetRect.top + targetRect.height + this.distance + 'px';
        } else if (this.placement.indexOf('left') == 0) {
            this.container.style.left = targetRect.left - containerRect.width - this.distance + 'px';
            this.container.style.top = targetRect.top + targetRect.height / 2 + 'px';
        } else {
            // top
            this.container.style.left = targetRect.left + targetRect.width / 2 + 'px';
            this.container.style.top = targetRect.top - containerRect.height - this.distance + 'px';
        }
    },
    _onOpen: function _onOpen() {
        this._position();
        _util2.default.addClass(this.container, 'ui-popover-' + this.placement + '-enter');
    },
    _onClose: function _onClose() {
        _util2.default.removeClass(this.container, 'ui-popover-' + this.placement + '-enter');
    }
});
exports.default = Popover;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

var _popup = __webpack_require__(5);

var _popup2 = _interopRequireDefault(_popup);

var _dialog = __webpack_require__(12);

var _dialog2 = _interopRequireDefault(_dialog);

var _popover = __webpack_require__(2);

var _popover2 = _interopRequireDefault(_popover);

var _tooltip = __webpack_require__(15);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Popup: _popup2.default,
    Dialog: _dialog2.default,
    Popover: _popover2.default,
    Tooltip: _tooltip2.default,
    toast: function toast(text, timeout, callback, config) {
        if (Object.prototype.toString.call(timeout) == "[object Function]") {
            config = callback;
            callback = timeout;
            timeout = null;
        }
        config = config || {};
        var defaultOption = {
            width: '85%',
            containerClass: 'ui-toast',
            content: text,
            timeout: +timeout || 2000,
            button: []
        };
        return new _dialog2.default(_util2.default.merge(defaultOption, config)).onClose(callback);
    },
    alert: function alert() {
        return new _dialog2.default();
    }
};
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _popbase = __webpack_require__(1);

var _popbase2 = _interopRequireDefault(_popbase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOption = {
    // 是否默认打开
    autoShow: true,
    // 外包容器class
    containerClass: 'ui-popup-normal',
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
var Popup = _popbase2.default.extend({
    _className: "Popup",
    init: function init(option) {
        var obj = _util2.default.merge({}, defaultOption, option);
        obj.closeOnClickModal = obj.backClose;
        this._super(obj);
    },
    _initDom: function _initDom() {
        var me = this;
        this.container = document.createElement('div');
        this.container.className = this.containerClass + ' ui-popup-container ui-popup-' + this.placement;
        this.width == 'auto' ? '' : this.container.style.width = this.width;
        this.height == 'auto' ? '' : this.container.style.height = this.height;
        this.container.innerHTML = this.content;
        this.warp.appendChild(this.container);
        if (this.contentPosition) {
            var clist = this.container.children;
            for (var i = 0; i < clist.length; i++) {
                _util2.default.addClass(clist[i], 'ui-popup-' + this.contentPosition);
            }
        }
    },
    _initEvent: function _initEvent() {
        var me = this;
        this.container.addEventListener('click', function (e) {
            if (e.target.className.indexOf(me.closeClass) >= 0) {
                me.close();
                return false;
            }
        }, false);
    },
    _onOpen: function _onOpen() {
        this.transition = true;
        _util2.default.addClass(this.container, 'ui-popup-' + this.placement + '-enter');
        var me = this;
        window.setTimeout(function () {
            me.transition = false;
            me._doAfterOpen();
        }, 300);
    },
    _onClose: function _onClose() {
        this.transition = true;
        _util2.default.removeClass(this.container, 'ui-popup-' + this.placement + '-enter');
        var me = this;
        window.setTimeout(function () {
            me.transition = false;
            me._doAfterClose();
        }, 300);
    }
});
exports.default = Popup;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventful = __webpack_require__(8);

var _eventful2 = _interopRequireDefault(_eventful);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _eventful2.default;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class = __webpack_require__(9);

var _class2 = _interopRequireDefault(_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventClass = _class2.default.extend({
    _className: "EventClass",
    _handlers: null,
    _eventCache: null,
    init: function init() {
        this._handlers = {};
        this._eventCache = {};
    },
    // 绑定监听一次
    one: function one(eventName, handler, context) {
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
    },
    // 绑定监听
    bind: function bind(eventName, handler, context) {
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
    },
    // 接触绑定
    unbind: function unbind(eventName, handler) {
        var _handlers = this._handlers;
        if (!eventName) {
            this._handlers = {};
            return this;
        }
        if (handler) {
            if (_handlers[eventName]) {
                var newList = [];
                for (var i = 0, l = _handlers[eventName].length; i < l; i++) {
                    if (_handlers[eventName][i]['handler'] != handler) {
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
    },
    // 事件派发
    dispatch: function dispatch(eventName) {
        var falseNum = 0;
        if (!eventName) {
            return falseNum === 0;
        }
        var _handlers = this._handlers[eventName];
        if (_handlers) {
            var args = Array.prototype.slice.call(arguments, 1),
                len = _handlers.length;
            for (var i = 0; i < len;) {
                if (_handlers[i]['handler'].apply(_handlers[i]['context'], args) === false) {
                    falseNum++;
                }
                if (_handlers[i]['one']) {
                    _handlers.splice(i, 1);
                    len--;
                } else {
                    i++;
                }
            }
        }
        return falseNum === 0;
    },
    // 指定上下文的事件派发
    dispatchWithContext: function dispatchWithContext(eventName) {
        var falseNum = 0;
        if (!eventName) {
            return falseNum === 0;
        }
        var _handlers = this._handlers[eventName];
        if (this._handlers[eventName]) {
            var context = arguments[arguments.length - 1],
                args = Array.prototype.slice.call(arguments, 1, arguments.length - 1),
                len = _handlers.length;
            for (var i = 0; i < len;) {
                if (_handlers[i]['handler'].apply(context, args) === false) {
                    falseNum++;
                }
                if (_handlers[i]['one']) {
                    _handlers.splice(i, 1);
                    len--;
                } else {
                    i++;
                }
            }
        }
        return falseNum === 0;
    },
    // 动态添加自定义事件缓存
    // eventNames 仅仅支持字符串类型数据，空格分割的函数名称，建议事件名都添加 on/before/after 等明显前缀
    _createEvent: function _createEvent(eventNames) {
        if (typeof eventNames !== "string") {
            return;
        }
        var me = this,
            cache = me._eventCache,
            eventList = eventNames.split(" "),
            len = eventList.length;
        for (var i = 0; i < len; i++) {
            var eventName = eventList[i];
            cache[eventName] = cache[eventName] || [];
            me[eventName] = function (ename) {
                return function (fn) {
                    if (Object.prototype.toString.call(fn) == "[object Function]") {
                        me.bind(ename, fn);
                        return me;
                    } else {
                        return me.dispatch.apply(me, [ename].concat(Array.prototype.slice.call(arguments, 0)));
                    }
                };
            }(eventName);
        }
    }
});

exports.default = EventClass;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @namespace
 * @name ClassManager
 */
var ClassManager = function ClassManager() {
    // var id = (0 | (Math.random() * 998));
    var instanceId = 0 | Math.random() * 998;

    // this.getNewID = function () {
    //     return id++;
    // };
    // 
    this.getNewInstanceId = function () {
        return instanceId++;
    };
};
var classManager = new ClassManager();
/* Simple JavaScript Inheritance
 * By John Resig https://johnresig.com/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype

// Create a new Clazz that inherits from this Clazz
var ClassBase = function ClassBase() {},
    initializing = false;
// fnTest = /xyz/.test(function () { xyz; }) ?  : /.*/;

// Create a new Clazz that inherits from this Clazz
ClassBase.extend = function (prop) {
    var _super = this.prototype;

    // Instantiate a base Clazz (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
        // Check if we're overwriting an existing function
        if (typeof prop[name] == "function" && typeof _super[name] == "function" && /\b_super\b/.test(prop[name])) {
            prototype[name] = function (pname, fn) {
                return function () {
                    var tmp = this._super;

                    // Add a new ._super() method that is the same method
                    // but on the super-Clazz
                    this._super = _super[pname];

                    // The method only need to be bound temporarily, so we
                    // remove it when we're done executing
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;

                    return ret;
                };
            }(name, prop[name]);
        } else {
            prototype[name] = prop[name];
        }
    }

    // The dummy Clazz constructor
    function Class() {
        // All construction is actually done in the init method
        if (!initializing && this.init) {
            this._instanceId = classManager.getNewInstanceId();
            this.init.apply(this, arguments);
        }
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this Clazz extendable
    Class.extend = ClassBase.extend;

    return Class;
};

var Class = ClassBase.extend({
    _className: "Class",
    init: function init() {
        this._super();
    },
    className: function className() {
        return this._className;
    },
    instanceId: function instanceId() {
        return this._instanceId;
    }
});

exports.default = Class;
module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * PopupManager
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        if (!currentPop) return;
        var instance = this.getInstance(currentPop.id);
        if (instance && instance.closeOnClickModal) {
            instance.close();
        }
    },
    // 打开一个遮罩层
    openOverlay: function openOverlay(id, zIndex, dom, modalClass, modalFade) {
        if (!id /* || zIndex === undefined */) return;
        // 判断id唯一性
        for (var i = 0, j = this.popStack.length; i < j; i++) {
            var item = this.popStack[i];
            if (item.id === id) {
                return;
            }
        }
        this.modalFade = modalFade;
        var overlayDom = this.getOverlay();
        _util2.default.addClass(overlayDom, 'ui-overlay');
        if (this.modalFade && !this.hasOverlay) {
            _util2.default.addClass(overlayDom, 'ui-overlay-enter');
        }
        if (modalClass) {
            var classArr = modalClass.trim().split(/\s+/),
                classArrLength = classArr.length;
            for (var i = 0; i < classArrLength; i++) {
                var item = classArr[i];
                _util2.default.addClass(overlayDom, item);
            }
        }
        window.setTimeout(function () {
            _util2.default.removeClass(overlayDom, 'ui-overlay-enter');
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
                    var classArr = currentPop.modalClass.trim().split(/\s+/),
                        classArrLength = classArr.length;
                    for (var i = 0; i < classArrLength; i++) {
                        var item = classArr[i];
                        _util2.default.removeClass(overlayDom, item);
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
                _util2.default.addClass(overlayDom, 'ui-overlay-leave');
            }
            window.setTimeout(function () {
                if (popStack.length === 0) {
                    if (overlayDom.parentNode) overlayDom.parentNode.removeChild(overlayDom);
                    overlayDom.style.display = 'none';
                    this.overlayDom = undefined;
                }
                _util2.default.removeClass(overlayDom, 'ui-overlay-leave');
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
            if (!currentPop) return;
            var instance = popManager.getInstance(currentPop.id);
            if (instance.closeOnPressEscape) {
                instance.close();
            }
        }
    }
});
// window.popManager = popManager;
exports.default = popManager;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(13);

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _popbase = __webpack_require__(1);

var _popbase2 = _interopRequireDefault(_popbase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOption = {
    // 是否默认打开
    autoShow: true,
    // 外包容器class
    containerClass: 'ui-dialog-normal',
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

var Dialog = _popbase2.default.extend({
    _className: "Dialog",
    init: function init(option) {
        var obj = _util2.default.merge({}, defaultOption, option);
        this._super(obj);
        this._createEvent('onBtnClick');
    },
    _initDom: function _initDom() {
        var me = this;
        this.container = document.createElement('div');
        this.container.className = this.containerClass + ' ui-dialog-container ui-dialog-' + this.placement;
        this.width == 'auto' ? '' : this.container.style.width = this.width;
        this.height == 'auto' ? '' : this.container.style.height = this.height;
        var title = this.title;
        var button = this.button;
        var html = [, function () {
            var btnhtml = '';
            if (title) {
                btnhtml = ['<div class="ui-dialog-head">', title ? '<div class="ui-dialog-title">' + title + '</div>' : '',
                // '<span class="icon icon-mid"><span class="icodispatchWithContextn-plus"></span></span>',
                '</div>'].join('');
            }
            return btnhtml;
        }(), '<div class="ui-dialog-body">' + this.content + '</div>', function () {
            var btnhtml = '';
            var size = button.length;
            if (size) {
                var btnCssMap = Dialog.GlobalConf.btnCssMap;
                var getBtnRetId = Dialog.GlobalConf.getBtnRetId;
                btnhtml += '<div class="ui-dialog-foot">';
                for (var i = 0; i < size; i++) {
                    var btnText = button[i];
                    var mapCss = btnCssMap[btnText.slice(0, 1)];
                    var btnRetId = (getBtnRetId(i, size) + "").replace(/\"/g, "&quot;");
                    btnText = mapCss ? btnText.slice(1) : btnText;
                    btnhtml += '<button data-action="btn" data-retid="' + btnRetId + '" class="' + btnCssMap.def + (mapCss ? " " + mapCss : '') + '">' + btnText + '</button>';
                }
                btnhtml += '</div>';
            }
            return btnhtml;
        }()].join('');
        this.container.innerHTML = html;
        this.warp.appendChild(this.container);
    },
    _initEvent: function _initEvent() {
        var me = this;
        this.container.addEventListener('click', function (e) {
            if (e.target.className.indexOf(me.closeClass) >= 0) {
                if (me.dispatch('onBtnClick', 0) != false) {
                    me.close();
                }
                return false;
            } else if (e.target.dataset && e.target.dataset.action == 'btn' || e.target.getAttribute('data-action') == 'btn') {
                me.dispatch('onBtnClick', e.target.dataset ? e.target.dataset.retid : e.target.getAttribute('data-retid'));
            }
        }, false);
    },
    _onOpen: function _onOpen() {
        this.transition = true;
        _util2.default.addClass(this.container, 'ui-dialog-' + this.placement + '-enter');
        var me = this;
        window.setTimeout(function () {
            me.transition = false;
            me._doAfterOpen();
        }, 300);
    },
    _onClose: function _onClose() {
        this.transition = true;
        _util2.default.removeClass(this.container, 'ui-dialog-' + this.placement + '-enter');
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
        '$': 'btn-success',
        '%': 'btn-info',
        '@': 'btn-link',
        '^': 'btn-warning',
        '!': 'btn-danger'
    },
    // 按钮retId编码方法
    getBtnRetId: function getBtnRetId(i, n) {
        return i + 1;
    }
};
exports.default = Dialog;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _popover = __webpack_require__(2);

var _popover2 = _interopRequireDefault(_popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOption = {
    // 外包容器class
    containerClass: 'ui-tooltip-normal'
};
var Tooltip = _popover2.default.extend({
    _className: "Tooltip",
    init: function init(option) {
        var obj = _util2.default.merge({}, defaultOption, option);
        this._super(obj);
    },
    _initDom: function _initDom() {
        var me = this;
        this.root = document.createElement('div');
        this.root.className = 'ui-tooltip-root';
        document.body.appendChild(this.root);
        this.container = document.createElement('div');
        this.container.className = this.containerClass + ' ui-tooltip-container ui-tooltip-' + this.placement;
        this.container.innerHTML = ['<div class="ui-tooltip-content">', '<div class="ui-tooltip-arrow"></div>', '<div class="ui-tooltip-inner">', this.content, '</div>', '</div>'].join('');
        this.root.appendChild(this.container);
    },
    _initEvent: function _initEvent() {
        this._super();
    },
    _onOpen: function _onOpen() {
        this._position();
        _util2.default.addClass(this.container, 'ui-tooltip-' + this.placement + '-enter');
    },
    _onClose: function _onClose() {
        _util2.default.removeClass(this.container, 'ui-tooltip-' + this.placement + '-enter');
    }
});
exports.default = Tooltip;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    _index2.default.toast('我是一个Toast', function () {
        console.log(123);
    }, {
        modal: false,
        closeOnClickModal: true,
        placement: 'top'
    });
    window.testpop = new _index2.default.Dialog({
        autoShow: true,
        backClose: true,
        // type: 'bottom',
        // height: '100%',
        width: '85%',
        closeClass: 'J-close',
        // containerClass: 'ui-toast-normal',
        content: ['<div class="J-close" style="font-size:14px;">分享到</div>'].join(''),
        closeOnClickModal: true,
        button: ['点我'],
        title: '标题'
        // timeout: 1000
    }).onClose(function () {
        console.log('onClose');
    }).onBeforeClose(function () {
        console.log('onBeforeClose');
    });
    window.testpop = new _index2.default.Popup({
        autoShow: true,
        backClose: true,
        // type: 'bottom',
        // height: '100%',
        width: '100%',
        closeClass: 'J-close',
        // containerClass: 'ui-toast-normal',
        content: ['<div class="J-close" style="font-size:14px;color:#fff;">分享到<br>分享到<br>分享到<br>分享到<br>分享到<br>分享到<br>分享到<br></div>'].join(''),
        closeOnClickModal: true,
        button: ['点我'],
        title: '标题'
        // timeout: 1000
    }).onClose(function () {
        console.log('onClose');
    }).onBeforeClose(function () {
        console.log('onBeforeClose');
    });
    var popover = document.getElementById('popover');
    window.testTooltip = new _index2.default.Tooltip({
        // action: 'click',  Tooltip  Popover
        target: popover,
        placement: 'top',
        content: '<h2 style="width:300px">仅支持储蓄卡</h2><h3>温馨提示xxxx</h3>'
    });
    // var popover = document.getElementById('popover');
    window.testPopover = new _index2.default.Popover({
        target: popover,
        placement: 'bottom',
        content: '<h2 style="width:600px">仅支持储蓄卡</h2><h3>温馨提示xxxx</h3><div>萨达多阿萨德按时<br>萨达多阿萨德按时<br>萨达多阿萨德按时<br>萨达多阿萨德按时<br>萨达多阿萨德按时<br></div>'
    });
};

/***/ })
/******/ ]);
});