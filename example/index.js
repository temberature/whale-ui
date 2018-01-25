import style from './index.less';
import LMUI from '@lmui';
import button from './button';
import toast from './toast';
import scroll from './scroll';

window.LMUI = LMUI;
window.container = document.getElementById('container');

var routes = {
    '/button': button,
    '/toast': toast,
    '/scroll': scroll
};

var router = Router(routes);

router.init();

