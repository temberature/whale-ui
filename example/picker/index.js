import html from './index.html';
export default function () {
  container.innerHTML = html;
  window.pickerdom = document.getElementById('picker');
  if (!pickerdom) {
    return;
  }
  pickerdom.onclick = function () {
    new LMUI.Popup({
      autoShow: true,
      backClose: true,
      // type: 'bottom',
      // height: '100%',
      width: '100%',
      closeClass: 'J-close',
      // containerClass: 'ui-toast-normal',
      content: '',
      closeOnClickModal: true,
      button: ['点我'],
      title: '标题'
      // timeout: 1000
    })
      .onCreate(function () {
        window.picker = new LMUI.Picker(this.container, {
          data: [
            {
              text: '测试0',
              value: 0
            },
            {
              text: '测试1',
              value: 1
            },
            {
              text: '测试2',
              value: 2
            },
            {
              text: '测试3',
              value: 0
            },
            {
              text: '测试4',
              value: 1
            },
            {
              text: '测试5',
              value: 2
            },
            {
              text: '测试6',
              value: 0
            },
            {
              text: '测试7',
              value: 1
            },
            {
              text: '测试8',
              value: 2
            }
          ]
        })
          .onCreate(function () {
            console.log('onCreate');
            console.log(this);
          })
          .onScroll(function (left, top, zoom) {
            console.log(left, top, zoom);
          })
          .onScrollOver(function () {
            console.log('onScrollOver');
          });
      })
      .onClose(function () {
        console.log('onClose');
      })
      .onBeforeClose(function () {
        console.log('onBeforeClose');
      });
  };
}
