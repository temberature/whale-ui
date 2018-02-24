'use strict';
import './index.less';
import { merge, addClass, removeClass } from '@common/util';
import Popover from '@components/popover';
const defaultOptions = {
  // 外包容器class
  containerClass: 'lmui-tooltip-normal'
};
class Tooltip extends Popover {
  constructor(options) {
    const newOptions = merge({}, defaultOptions, options);
    super(newOptions);
    this._className = 'Tooltip';
  }

  _initDom() {
    this.root = document.createElement('div');
    this.root.className = 'lmui-tooltip-root';
    document.body.appendChild(this.root);
    this.container = document.createElement('div');
    this.container.className = `${this.containerClass} lmui-tooltip-container lmui-tooltip-${this.placement}`;
    this.container.innerHTML = [
      '<div class="lmui-tooltip-content">',
      '<div class="lmui-tooltip-arrow"></div>',
      '<div class="lmui-tooltip-inner">',
      this.content,
      '</div>',
      '</div>'
    ].join('');
    this.root.appendChild(this.container);
  }

  _onOpen() {
    this._position();
    addClass(this.container, `lmui-tooltip-${this.placement}-enter`);
  }

  _onClose() {
    removeClass(this.container, `lmui-tooltip-${this.placement}-enter`);
  }
}
export default Tooltip;
