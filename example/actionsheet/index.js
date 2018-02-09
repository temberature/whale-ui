import html from './index.html';

export default function () {
  var container = window.container || document.getElementById('container');
  if (!container) {
    return;
  }
  container.innerHTML = html;
  var top = document.getElementById('toast_top');
  top.onclick = function () {
    var ss = new LMUI.Actionsheet({
      data: [
        {
          text: 'Actionsheet1',
          method: function () {
            alert(123);
          }
        },
        {
          text: 'Actionsheet2',
          method: function () {
            alert(321);
          }
        }
      ]
    }).onBtnClick(function (a, b, c) {
      console.log(a, b, c);
    });
  };
}
