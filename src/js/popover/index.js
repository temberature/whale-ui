'use strict';
import Style from './index.less';
import util from '@js/util';
import Popbase from '@js/popbase';
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
var Popover = Popbase.extend({
    _className: "Popover",
    init: function (option) {
        var obj = util.merge({}, defaultOption, option);
        this._super(obj);
    },
    _initDom: function () {
        var me = this;
        this.root = document.createElement('div');
        this.root.className = 'ui-popover-root';
        document.body.appendChild(this.root);
        this.container = document.createElement('div');
        this.container.className = this.containerClass + ' ui-popover-container ui-popover-' + this.placement;
        this.container.innerHTML = [
            '<div class="ui-popover-content">',
            '<div class="ui-popover-arrow"></div>',
            '<div class="ui-popover-inner">',
            this.content,
            '</div>',
            '</div>'
        ].join('');
        this.root.appendChild(this.container);
    },
    _initEvent: function () {
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
    _position: function () {
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
        } else { // top
            this.container.style.left = targetRect.left + targetRect.width / 2 + 'px';
            this.container.style.top = targetRect.top - containerRect.height - this.distance + 'px';
        }
    },
    _onOpen: function () {
        this._position();
        util.addClass(this.container, 'ui-popover-' + this.placement + '-enter');
    },
    _onClose: function () {
        util.removeClass(this.container, 'ui-popover-' + this.placement + '-enter');
    }
});
export default Popover;

