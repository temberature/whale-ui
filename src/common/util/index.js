const Util = {
  merge: function(target, ...args) {
    for (let i = 0, j = args.length; i < j; i++) {
      const source = args[i] || {};
      for (const prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          const value = source[prop];
          if (value !== undefined) {
            target[prop] = value;
          }
        }
      }
    }
    return target;
  },
  hasClass: function(el, cls) {
    if (!el || !cls) {
      return false;
    }
    if (cls.indexOf(' ') !== -1) {
      throw new Error('className should not contain space.');
    }
    if (el.classList) {
      return el.classList.contains(cls);
    }
    return ` ${el.className} `.indexOf(` ${cls} `) > -1;
  },
  addClass: function(el, cls) {
    if (!el) {
      return;
    }
    let curClass = el.className;
    const classes = (cls || '').split(' ');
    for (let i = 0, j = classes.length; i < j; i++) {
      const clsName = classes[i];
      if (!clsName) {
        continue;
      }

      if (el.classList) {
        el.classList.add(clsName);
      } else if (!this.hasClass(el, clsName)) {
        curClass += ` ${clsName}`;
      }
    }
    if (!el.classList) {
      el.className = curClass;
    }
  },
  removeClass: function(el, cls) {
    if (!el || !cls) {
      return;
    }
    const classes = cls.split(' ');
    let curClass = ` ${el.className} `;

    for (let i = 0, j = classes.length; i < j; i++) {
      const clsName = classes[i];
      if (!clsName) {
        continue;
      }

      if (el.classList) {
        el.classList.remove(clsName);
      } else if (this.hasClass(el, clsName)) {
        curClass = curClass.replace(` ${clsName} `, ' ');
      }
    }
    if (!el.classList) {
      el.className = String.prototype.trim.call(curClass);
    }
  },
  scrollBarWidth: undefined,
  getScrollBarWidth: function() {
    if (this.scrollBarWidth !== undefined) {
      return this.scrollBarWidth;
    }

    const outer = document.createElement('div');
    // outer.className = 'el-scrollbar__wrap';
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  },
  render: function(tpl, data) {
    const code = `var p=[];with(this){p.push('${tpl
      .replace(/[\r\t\n]/g, ' ')
      .split('<%')
      .join('\t')
      .replace(/((^|%>)[^\t]*)'/g, '$1\r')
      .replace(/\t=(.*?)%>/g, "',$1,'")
      .split('\t')
      .join("');")
      .split('%>')
      .join("p.push('")
      .split('\r')
      .join("\\'")}');}return p.join('');`;
    return new Function(code).apply(data);
  }
};
export default Util;
