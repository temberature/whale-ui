import html from './index.html';

export default function () {
  var container = window.container || document.getElementById('container');
  if (!container) {
    return;
  }
  container.innerHTML = html;
  var dialog = document.getElementById('dialog');
  dialog.onclick = function () {
    window.testdialog = new LMUI.Dialog({
      autoShow: true,
      backClose: true,
      // type: 'bottom',
      // height: '100%',
      width: '85%',
      closeClass: 'J-close',
      // containerClass: 'ui-toast-normal',
      content: ['<div class="J-close" style="font-size:14px;">分享到</div>'].join(''),
      closeOnClickModal: true,
      button: ['点我'],
      title: '标题'
      // timeout: 1000
    })
      .onClose(function () {
        console.log('onClose');
      })
      .onBeforeClose(function () {
        console.log('onBeforeClose');
      });
  };
}
