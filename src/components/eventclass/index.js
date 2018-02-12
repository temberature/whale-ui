/**
 * @namespace
 * @name ClassManager
 */
const ClassManager = function() {
  let instanceId = 0 | (Math.random() * 998);
  this.getNewInstanceId = function() {
    return instanceId++;
  };
};
const classManager = new ClassManager();
class ClassBase {
  constructor() {
    this._className = 'Class';
    this._instanceId = classManager.getNewInstanceId();
  }

  className() {
    return this._className;
  }

  instanceId() {
    return this._instanceId;
  }
}

class EventClass extends ClassBase {
  constructor() {
    super();
    this._className = 'EventClass';
    this._handlers = {};
    this._eventCache = {};
  }

  // 绑定监听一次
  one(eventName, handler, context) {
    if (!eventName || !handler) {
      return this;
    }
    const { _handlers } = this;
    if (!_handlers[eventName]) {
      _handlers[eventName] = [];
    }
    _handlers[eventName].push({
      context: context || this,
      handler: handler,
      one: true
    });
    return this;
  }

  // 绑定监听
  bind(eventName, handler, context) {
    if (!eventName || !handler) {
      return this;
    }
    const { _handlers } = this;
    if (!_handlers[eventName]) {
      _handlers[eventName] = [];
    }
    _handlers[eventName].push({
      context: context || this,
      handler: handler,
      one: false
    });
    return this;
  }

  // 接触绑定
  unbind(eventName, handler) {
    const { _handlers } = this;
    if (!eventName) {
      this._handlers = {};
      return this;
    }
    if (handler) {
      if (_handlers[eventName]) {
        const newList = [];
        for (let i = 0, l = _handlers[eventName].length; i < l; i++) {
          if (_handlers[eventName][i]['handler'] !== handler) {
            newList.push(_handlers[eventName][i]);
          }
        }
        _handlers[eventName] = newList;
      }
      if (_handlers[eventName] && _handlers[eventName].length === 0) {
        delete _handlers[eventName];
      }
    } else {
      delete _handlers[eventName];
    }
    return this;
  }

  // 事件派发
  dispatch(eventName, ...args) {
    let falseNum = 0;
    if (!eventName) {
      return falseNum === 0;
    }
    const _handler = this._handlers[eventName];
    if (_handler) {
      // const args = Array.prototype.slice.call(arguments, 1);
      let len = _handler.length;
      for (let i = 0; i < len;) {
        if (_handler[i]['handler'].apply(_handler[i]['context'], args) === false) {
          falseNum++;
        }
        if (_handler[i]['one']) {
          _handler.splice(i, 1);
          len--;
        } else {
          i++;
        }
      }
    }
    return falseNum === 0;
  }

  // 指定上下文的事件派发
  dispatchWithContext(eventName, context, ...args) {
    let falseNum = 0;
    if (!eventName) {
      return falseNum === 0;
    }
    const _handler = this._handlers[eventName];
    if (this._handler[eventName]) {
      // const context = arguments[arguments.length - 1];
      // const args = Array.prototype.slice.call(arguments, 1, arguments.length - 1);
      let len = _handler.length;
      for (let i = 0; i < len;) {
        if (_handler[i]['handler'].apply(context, args) === false) {
          falseNum++;
        }
        if (_handler[i]['one']) {
          _handler.splice(i, 1);
          len--;
        } else {
          i++;
        }
      }
    }
    return falseNum === 0;
  }

  // 动态添加自定义事件缓存
  // eventNames 仅仅支持字符串类型数据，空格分割的函数名称，建议事件名都添加 on/before/after 等明显前缀
  _createEvent(eventNames, ...args) {
    if (typeof eventNames !== 'string') {
      return;
    }
    const me = this;
    const cache = me._eventCache;
    const eventList = eventNames.split(' ');
    const len = eventList.length;
    for (let i = 0; i < len; i++) {
      const eventName = eventList[i];
      cache[eventName] = cache[eventName] || [];
      me[eventName] = (function(ename) {
        return function(fn) {
          if (Object.prototype.toString.call(fn) === '[object Function]') {
            me.bind(ename, fn);
            return me;
          }
          return me.dispatch(...[ename].concat(Array.prototype.slice.call(args, 0)));
        };
      })(eventName);
    }
  }
}
export default EventClass;
