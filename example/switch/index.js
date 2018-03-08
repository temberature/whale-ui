import html from './index.html';

export default function() {
  const container = window.container || document.getElementById('container');
  if (!container) {
    return;
  }
  container.innerHTML = html;
  $('.lmui-switch').each((index, item) => {
    if (+$(item).data('constructed') !== 1) {
      new LMUI.Switch(item).bind('onChange', function (val) {
        console.log('change');
      })
    }
  });
}
