import style from './index.less';
import LMUI from '@lmui';
import button from './button';
import toast from './toast';
import scroll from './scroll';
import picker from './picker';

window.LMUI = LMUI;
window.container = document.getElementById('container');

var routes = {
  '/': function () {
    console.log(123);
  },
  '/button': button,
  '/toast': toast,
  '/scroll': scroll,
  '/picker': picker
};

var router = Router(routes);
router.configure({
  on: function () {
    console.log('all');
  }
});
router.init();
