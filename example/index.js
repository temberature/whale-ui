import './index.less';
import LMUI from '@lmui';
import button from './button';
import cell from './cell';
import field from './field';
import checklist from './checklist';
import toast from './toast';
import scroll from './scroll';
import picker from './picker';
import actionsheet from './actionsheet';
import popover from './popover';
import popup from './popup';
import dialog from './dialog';
import spin from './spin';

window.LMUI = LMUI;
window.container = document.getElementById('container');

const routes = {
  '/': function() {
    console.log(123);
  },
  '/button': button,
  '/cell': cell,
  '/field': field,
  '/checklist': checklist,
  '/toast': toast,
  '/scroll': scroll,
  '/picker': picker,
  '/actionsheet': actionsheet,
  '/popover': popover,
  '/popup': popup,
  '/dialog': dialog,
  '/spin': spin
};

const router = Router(routes);
router.configure({
  on: function() {
    console.log('all');
  }
});
router.init();
