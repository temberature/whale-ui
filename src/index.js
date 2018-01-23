import style from './index.less';
import Popup from '@js/popup';
import Dialog from '@js/dialog';
import Popover from '@js/popover';
import Tooltip from '@js/tooltip';
import Scroller from '@js/scroller';
import util from '@js/util';

export default {
    Popup: Popup,
    Dialog: Dialog,
    Popover: Popover,
    Tooltip: Tooltip,
    toast: function (text, timeout, callback, config) {
        if (Object.prototype.toString.call(timeout) == "[object Function]") {
            config = callback;
            callback = timeout;
            timeout = null;
        }
        config = config || {};
        var defaultOption = {
            width: '85%',
            containerClass: 'ui-toast',
            content: text,
            timeout: +timeout || 2000,
            button: []
        };
        return new Dialog(util.merge(defaultOption, config)).onClose(callback);
    },
    alert: function () {
        return new Dialog();
    },
    Scroller: Scroller
};

