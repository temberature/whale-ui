import $ from '@common/util/zepto';
import CheckList from '@components/checklist';
import EventClass from '@components/eventclass';

class ComponentManger extends EventClass {
  constructor() {
    super();
    this.workers = [];
  }

  get(selector) {
    let ret;
    if (selector[0] === '#') {
      ret = this.workers.filter(worker => worker.$wrapper.attr('id') === selector.slice(1));
    } else if (selector[0] === '.') {
      ret = this.workers.filter(worker => worker.$wrapper.hasClass(selector.slice(1)));
    }
    return ret;
  }

  add(worker) {
    return this.workers.push(worker);
  }

  ready(callback) {
    if ($('body').data('constructed') === 1) {
      callback();
    } else {
      this.callback = callback;
    }
  }
}
const componentManger = new ComponentManger();

$('.lmui-checklist').each((index, item) => {
  if (+$(item).data('constructed') !== 1) {
    const checklist = new CheckList(item);
    componentManger.add(checklist);
    console.log(componentManger);
  }
});
$('body').data('constructed', 1);
componentManger.callback && componentManger.callback();

export default componentManger;
