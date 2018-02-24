import html from './index.html';

export default function() {
  const container = window.container || document.getElementById('container');
  if (!container) {
    return;
  }
  container.innerHTML = html;
  const top = document.getElementById('spin');
  const ctn = document.getElementById('spin-ctn');
  top.onclick = function() {
    window.spin = new LMUI.Spin({
      warp: ctn,
      text: '试试'
      // timeout: 1000
    });
  };
}
