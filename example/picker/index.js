import html from './index.html';
export default function () {
  container.innerHTML = html;
  window.pickerdom = document.getElementById('picker');
  if (!pickerdom) {return;}
  window.picker = new LMUI.Picker(pickerdom, {})
    .onCreate(function () {
      console.log('onCreate');
      console.log(this);
    })
    .onScroll(function (left, top, zoom) {
      console.log(left, top, zoom);
    }).onScrollOver(function () {
      console.log('onScrollOver');
    });
}
