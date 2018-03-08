import html from './index.html';
import LMUI from '@lmui';

export default function() {
  const container = window.container || document.getElementById('container');
  if (!container) {
    return;
  }
  container.innerHTML = html;

}
