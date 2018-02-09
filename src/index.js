import './index.less';
import util from '@common/util';
import Popup from '@components/popup';
import Dialog from '@components/dialog';
import Popover from '@components/popover';
import Tooltip from '@components/tooltip';
import Scroller from '@components/scroller';
import Picker from '@components/picker';
import Actionsheet from '@components/actionsheet';

export default {
  Popup: Popup,
  Dialog: Dialog,
  Popover: Popover,
  Tooltip: Tooltip,
  toast: function (text, timeout, callback, config) {
    if (Object.prototype.toString.call(timeout) === '[object Function]') {
      config = callback;
      callback = timeout;
      timeout = null;
    }
    config = config || {};
    var defaultOption = {
      width: '85%',
      containerClass: 'lmui-toast',
      content: text,
      timeout: +timeout || 2000,
      button: []
    };
    return new Dialog(util.merge(defaultOption, config)).onClose(callback);
  },
  alert: function () {
    return new Dialog();
  },
  Scroller: Scroller,
  Picker: Picker,
  Actionsheet: Actionsheet
};
