import LMUI from '../src/index.js';
window.onload = function () {
    var refresh = document.getElementById('refresh');
    window.scroll = new LMUI.Scroller(document.getElementById('test'), {
        PullToRefresh: true
    }).onCreate(function () {
        console.log(this);
    }).onScroll(function (left, top, zoom) {
        console.log(left, top, zoom);
    }).onRefreshLess(function () {
        console.log('onRefreshLess');
        refresh.innerHTML = '未触发刷新';
    }).onRefresh(function () {
        console.log('onRefresh');
        refresh.innerHTML = '刷新中';
        setTimeout(function () {
            window.scroll.finishPullToRefresh();
            refresh.innerHTML = '刷新完毕';
        }, 2000);
    }).onRefreshMore(function () {
        console.log('onRefreshMore');
        refresh.innerHTML = '松开触发刷新';
    });
    LMUI.toast('我是一个Toast', function () {
        console.log(123);
    }, {
        modal: false,
        closeOnClickModal: true,
        placement: 'top'
    });
    window.testpop = new LMUI.Dialog({
        autoShow: true,
        backClose: true,
        // type: 'bottom',
        // height: '100%',
        width: '85%',
        closeClass: 'J-close',
        // containerClass: 'ui-toast-normal',
        content: [
            '<div class="J-close" style="font-size:14px;">分享到</div>'
        ].join(''),
        closeOnClickModal: true,
        button: ['点我'],
        title: '标题'
            // timeout: 1000
    }).onClose(function () {
        console.log('onClose');
    }).onBeforeClose(function () {
        console.log('onBeforeClose');
    });
    window.testpop = new LMUI.Popup({
        autoShow: true,
        backClose: true,
        // type: 'bottom',
        // height: '100%',
        width: '100%',
        closeClass: 'J-close',
        // containerClass: 'ui-toast-normal',
        content: [
            '<div class="J-close" style="font-size:14px;color:#fff;">分享到<br>分享到<br>分享到<br>分享到<br>分享到<br>分享到<br>分享到<br></div>'
        ].join(''),
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
    window.testTooltip = new LMUI.Tooltip({
        // action: 'click',  Tooltip  Popover
        target: popover,
        placement: 'top',
        content: '<h2 style="width:300px">仅支持储蓄卡</h2><h3>温馨提示xxxx</h3>'
    });
    // var popover = document.getElementById('popover');
    window.testPopover = new LMUI.Popover({
        target: popover,
        placement: 'bottom',
        content: '<h2 style="width:600px">仅支持储蓄卡</h2><h3>温馨提示xxxx</h3><div>萨达多阿萨德按时<br>萨达多阿萨德按时<br>萨达多阿萨德按时<br>萨达多阿萨德按时<br>萨达多阿萨德按时<br></div>'
    });
}

