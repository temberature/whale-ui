import html from './index.html';
import request from '../utils/request';

const insertItems = function() {
  const scrollcontainer = window.scrollcontainer;
  const scroller = window.scroller;
  const content = document.getElementById('content');
  if (!scroller || !scrollcontainer || !content) {
    return;
  }
  request('/wap/ajax/list', {
    method: 'GET'
  })
    .then((data) => {
      console.log(data);
      content.innerHTML = '';
      for (let i = 0; i < data.data.list.length; i++) {
        const item = data.data.list[i];
        const row = document.createElement('div');
        row.className = 'lmui-cell';
        row.innerHTML = [
          '<div class="lmui-cell-wrapper">',
          '<div class="lmui-cell-title"><span class="lmui-cell-text">',
          item.name,
          '</span></div>',
          '<div class="lmui-cell-value"><span>',
          item.id,
          '</span></div>',
          '</div>'
        ].join('');
        content.appendChild(row);
      }
      window.easyScroller.reflow();
    })
    .catch(e => console.log('Oops, error', e));
};

export default function() {
  container.innerHTML = html;
  window.scrollcontainer = document.getElementById('scrollcontainer');
  const rect = window.scrollcontainer.getClientRects()[0];
  window.scrollcontainer.style.height = `${window.innerHeight - rect.top}px`;
  if (!scrollcontainer) {
    return;
  }
  window.scroller = document.getElementById('scroller');
  if (!scroller) {
    return;
  }
  const refresh = document.getElementById('refresh');
  window.easyScroller = new LMUI.Scroller(scroller, {
    PullToRefresh: true
  })
    .onCreate(function() {
      console.log(this);
      insertItems();
    })
    .onScroll((left, top, zoom) => {
      console.log(left, top, zoom);
    })
    .onScrollOver(() => {
      console.log('onScrollOver');
    })
    .onRefreshLess(() => {
      console.log('onRefreshLess');
      refresh.innerHTML = '未触发刷新';
    })
    .onRefresh(function() {
      console.log('onRefresh');
      refresh.innerHTML = '刷新中';
      const me = this;
      setTimeout(() => {
        refresh.innerHTML = '刷新完毕';
        insertItems();
        me.finishPullToRefresh();
      }, 2000);
    })
    .onRefreshMore(() => {
      console.log('onRefreshMore');
      refresh.innerHTML = '松开触发刷新';
    });
}
