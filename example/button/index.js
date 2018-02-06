import html from './index.html';

export default function () {
  var container = window.container || document.getElementById('container');
  if (!container) {return;}
  container.innerHTML = html;
}
