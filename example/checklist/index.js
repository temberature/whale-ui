import html from './index.html';
import LMUI from '@lmui';

export default function() {
  const container = window.container || document.getElementById('container');
  if (!container) {
    return;
  }
  container.innerHTML = html;
  
  $('.lmui-checklist').each((index, item) => {
    if (+$(item).data('constructed') !== 1) {
      const checklist = new LMUI.CheckList(item);
      checklist.bind('onChange', function (val) {
        console.log('change');
        this.$wrapper.next('.screen').find('.lmui-cell-value').text(val);
      })
    }
  });

}
