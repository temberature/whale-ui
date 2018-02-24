'use strict';
import './index.less';
import tpl from './index.html';
import { merge, render } from '@common/util';
import EventClass from '@components/eventclass';
const defaultOptions = {
  // 外包容器
  warp: document.body,
  // 百分比
  percent: 0,
  // 内容模板函数
  format: (percent) => {
    `${percent}%`;
  }
};
export default class Progress extends EventClass {
  constructor(options) {
    const newOptions = merge({}, defaultOptions, options);
    super(newOptions);
    this._className = 'Progress';
    this._initDom();
  }

  _initDom() {
    this.container = document.createElement('div');
    this.container.className = 'lmui-progress';
    this.container.innerHTML = render(tpl, this);
    this.warp.appendChild(this.container);
  }

  setPercent(percent) {
    this.percent = percent;
  }
}
