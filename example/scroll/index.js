import html from './index.html';
var insertItems = function () {
  var scrollcontainer = window.scrollcontainer;
  var scroller = window.scroller;
  var content = document.getElementById('content');
  if (!scroller || !scrollcontainer || !content) {return;}
  for (var i = 0; i < 15; i++) {
    var row = document.createElement('div');
    row.className = 'lmui-cell';
    row.innerHTML = [
      '<div class="lmui-cell-wrapper">',
      '<div class="lmui-cell-title"><span class="lmui-cell-text">标题文字',
      i,
      '</span></div>',
      '<div class="lmui-cell-value"><span>',
      Math.random(),
      '</span></div>',
      '</div>'
    ].join('');
    content.appendChild(row);
  }
  window.easyScroller.reflow();
};

export default function () {
  container.innerHTML = html;
  window.scrollcontainer = document.getElementById('scrollcontainer');
  var rect = window.scrollcontainer.getClientRects()[0];
  window.scrollcontainer.style.height = window.innerHeight - rect.top + 'px';
  if (!scrollcontainer) {return;}
  window.scroller = document.getElementById('scroller');
  if (!scroller) {return;}
  var refresh = document.getElementById('refresh');
  window.easyScroller = new LMUI.Scroller(scroller, {
    PullToRefresh: true
  })
    .onCreate(function () {
      console.log(this);
      insertItems();
    })
    .onScroll(function (left, top, zoom) {
      console.log(left, top, zoom);
    })
    .onScrollOver(function () {
      console.log('onScrollOver');
    })
    .onRefreshLess(function () {
      console.log('onRefreshLess');
      refresh.innerHTML = '未触发刷新';
    })
    .onRefresh(function () {
      console.log('onRefresh');
      refresh.innerHTML = '刷新中';
      var me = this;
      setTimeout(function () {
        refresh.innerHTML = '刷新完毕';
        insertItems();
        me.finishPullToRefresh();
      }, 2000);
    })
    .onRefreshMore(function () {
      console.log('onRefreshMore');
      refresh.innerHTML = '松开触发刷新';
    });
}
