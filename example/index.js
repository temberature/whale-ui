import './index.less';
import LMUI from '@lmui';
import button from './button';
import cell from './cell';
import field from './field';
import checklist from './checklist';
import switcher from './switch';
import radiolist from './radiolist';
import header from './header';
import toast from './toast';
import scroll from './scroll';
import picker from './picker';
import actionsheet from './actionsheet';
import popover from './popover';
import popup from './popup';
import dialog from './dialog';
import spin from './spin';
import $ from './utils/zepto';
import contents from './contents';

window.LMUI = LMUI;
window.container = document.getElementById('container');

const routes = {
  '/': contents,
  '/button': button,
  '/cell': cell,
  '/field': field,
  '/checklist': checklist,
  '/switch': switcher,
  '/radiolist': radiolist,
  '/header': header,
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
