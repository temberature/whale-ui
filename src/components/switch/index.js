/* eslint no-invalid-this: "off"*/
import $ from '@common/util/zepto';
import EventClass from '@components/eventclass';
const defaultOptions = new Map([['on', 0]]);
class Switch extends EventClass {
  constructor(wrapper) {
    super();
    const $wrapper = this._initDom(wrapper);
    this.id = $wrapper.attr('id');
    this._className = 'Switch';
    this._createEvent('onCreate onChange');
    const options = new Map();
    [...defaultOptions.keys()].forEach((key) => {
      options.set(key, $wrapper.data(key) || defaultOptions.get(key));
    });
    this.options = options;
    this._bindEvents();

    $wrapper.data('constructed', 1);
    window.setTimeout(() => {
      this.dispatch('onCreate');
    }, 0);
  }

  _initDom(wrapper) {
    return (this.$wrapper = $(wrapper));
  }

  _bindEvents() {
    const me = this;

    me.$wrapper.on('change', function() {
      const on = +$(this)
        .find('input')
        .prop('checked');

      const old = $(this).data('on');

      $(this).data('on', on);

      me.dispatch('onChange', on, old);
    });
  }
}

export default Switch;
