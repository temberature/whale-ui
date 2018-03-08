import html from './index.html';

export default function() {
  const container = window.container || document.getElementById('container');
  if (!container) {
    return;
  }
  container.innerHTML = html;

  $('.lmui-radiolist').each((index, item) => {
    if (+$(item).data('constructed') !== 1) {
      new LMUI.RadioList(item).bind('onChange', function (val) {
        console.log('change');
        this.$wrapper.next().find('.lmui-cell-value').text(val);
      })
    }
  });
}
