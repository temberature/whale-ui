'use strict';
import Style from './index.less';
import util from '@js/util';
import Popover from '@js/popover';
var defaultOption = {
    // 外包容器class
    containerClass: 'lmui-tooltip-normal'
};
var Tooltip = Popover.extend({
    _className: "Tooltip",
    init: function (option) {
        var obj = util.merge({}, defaultOption, option);
        this._super(obj);
    },
    _initDom: function () {
        var me = this;
        this.root = document.createElement('div');
        this.root.className = 'lmui-tooltip-root';
        document.body.appendChild(this.root);
        this.container = document.createElement('div');
        this.container.className = this.containerClass + ' lmui-tooltip-container lmui-tooltip-' + this.placement;
        this.container.innerHTML = [
            '<div class="lmui-tooltip-content">',
            '<div class="lmui-tooltip-arrow"></div>',
            '<div class="lmui-tooltip-inner">',
            this.content,
            '</div>',
            '</div>'
        ].join('');
        this.root.appendChild(this.container);
    },
    _initEvent: function () {
        this._super();
    },
    _onOpen: function () {
        this._position();
        util.addClass(this.container, 'lmui-tooltip-' + this.placement + '-enter');
    },
    _onClose: function () {
        util.removeClass(this.container, 'lmui-tooltip-' + this.placement + '-enter');
    }
});
export default Tooltip;

