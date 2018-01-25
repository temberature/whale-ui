import html from './index.html';
var insertItems = function () {
    var container = window.container || document.getElementById('container');
    var scroller = window.scroller || document.getElementById('scroller');
    var content = window.content || document.getElementById('content');
    if (!scroller || !container || !content) return;
    for (var i = 0; i < 15; i++) {
        var row = document.createElement("div");
        row.className = "row";
        row.style.backgroundColor = i % 2 > 0 ? "#ddd" : "";
        row.innerHTML = Math.random();
        if (content.firstChild == content.lastChild) {
            content.appendChild(row);
        } else {
            content.insertBefore(row, content.childNodes[1])
        }
    }
    // Update Scroller dimensions for changed scroller
    window.easyScroller.setDimensions(container.clientWidth, container.clientHeight, scroller.offsetWidth, scroller.offsetHeight - 50);
};
export default function () {
    var container = window.container || document.getElementById('container');
    window.container = container;
    if (!container) return;
    container.innerHTML = html;
    var scroller = window.scroller || document.getElementById('scroller');
    if (!scroller) return;
    window.scroller = scroller;
    var refresh = document.getElementById('refresh');
    window.easyScroller = new LMUI.Scroller(scroller, {
        PullToRefresh: true
    }).onCreate(function () {
        console.log(this);
        insertItems();
    }).onScroll(function (left, top, zoom) {
        console.log(left, top, zoom);
    }).onRefreshLess(function () {
        console.log('onRefreshLess');
        refresh.innerHTML = '未触发刷新';
    }).onRefresh(function () {
        console.log('onRefresh');
        refresh.innerHTML = '刷新中';
        var me = this;
        setTimeout(function () {
            refresh.innerHTML = '刷新完毕';
            insertItems();
            me.finishPullToRefresh();
        }, 2000);
    }).onRefreshMore(function () {
        console.log('onRefreshMore');
        refresh.innerHTML = '松开触发刷新';
    });
};

