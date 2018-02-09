import './index.less';
import LMUI from '@lmui';
import button from './button';
import toast from './toast';
import scroll from './scroll';
import picker from './picker';
import actionsheet from './actionsheet';
import popover from './popover';
import popup from './popup';
import dialog from './dialog';

window.LMUI = LMUI;
window.container = document.getElementById('container');

var routes = {
  '/': function () {
    console.log(123);
  },
  '/button': button,
  '/toast': toast,
  '/scroll': scroll,
  '/picker': picker,
  '/actionsheet': actionsheet,
  '/popover': popover,
  '/popup': popup,
  '/dialog': dialog
};

var router = Router(routes);
router.configure({
  on: function () {
    console.log('all');
  }
});
router.init();
