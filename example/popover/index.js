import html from './index.html';

export default function () {
  var container = window.container || document.getElementById('container');
  if (!container) {
    return;
  }
  container.innerHTML = html;
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
    content:
      '<h2 style="width:600px">仅支持储蓄卡</h2><h3>温馨提示xxxx</h3><div>萨达多阿萨德按时<br>萨达多阿萨德按时<br>萨达多阿萨德按时<br>萨达多阿萨德按时<br>萨达多阿萨德按时<br></div>'
  });
}
