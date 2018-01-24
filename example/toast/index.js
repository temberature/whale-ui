import html from './index.html';

export default function () {
    var container = window.container || document.getElementById('container');
    if (!container) return;
    container.innerHTML = html;
    var top = document.getElementById('toast_top');
    var center = document.getElementById('toast_center');
    var bottom = document.getElementById('toast_bottom');
    top.onclick = function () {
        LMUI.toast('顶部提示', function () {
            console.log(123);
        }, {
            modal: false,
            closeOnClickModal: true,
            placement: 'top'
        });
    };
    center.onclick = function () {
        LMUI.toast('居中提示', function () {
            console.log(123);
        }, {
            modal: false,
            closeOnClickModal: true
        });
    }
    bottom.onclick = function () {
        LMUI.toast('底部提示', function () {
            console.log(123);
        }, {
            modal: false,
            closeOnClickModal: true,
            placement: 'bottom'
        });
    }
};

