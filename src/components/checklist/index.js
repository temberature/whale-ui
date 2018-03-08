/* eslint no-invalid-this: "off"*/
import $ from '@common/util/zepto';
import EventClass from '@components/eventclass';
const defaultOptions = new Map([['max', -1]]);
class CheckList extends EventClass {
  constructor(wrapper) {
    super();
    const $wrapper = this._initDom(wrapper);
    this.id = $wrapper.attr('id');
    this._className = 'CheckList';
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
    return this.$wrapper = $(wrapper);
  }

  _bindEvents() {
    const me = this;

    const $checklist = me.$wrapper;
    $checklist.on('change', function() {
      const selected = $(this)
        .find('.lmui-cell input')
        .filter(function() {
          return $(this).prop('checked');
        })
        .map((index, item) => $(item).val())
        .reduce((memo, item) => `${memo}${item},`, '');

      const old = $(this).data('selected');

      $(this).data('selected', selected);

      me.dispatch('onChange', selected, old);
    });
    $checklist.find('input').on('click', (e) => {
      const $checkedElements = $checklist.find('.lmui-cell input').filter(function() {
        return $(this).prop('checked');
      });

      if ($checkedElements.length - 1 === $checklist.data('max')) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    });
  }
}

export default CheckList;
