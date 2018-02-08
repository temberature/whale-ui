/**
 * @namespace
 * @name ClassManager
 */
var ClassManager = function () {
  // var id = (0 | (Math.random() * 998));
  var instanceId = 0 | (Math.random() * 998);

  // this.getNewID = function () {
  //     return id++;
  // };
  //
  this.getNewInstanceId = function () {
    return instanceId++;
  };
};
var classManager = new ClassManager();
/* Simple JavaScript Inheritance
 * By John Resig https://johnresig.com/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype

// Create a new Clazz that inherits from this Clazz
var ClassBase = function () {},
  initializing = false;
// fnTest = /xyz/.test(function () { xyz; }) ?  : /.*/;

// Create a new Clazz that inherits from this Clazz
ClassBase.extend = function (prop) {
  var _super = this.prototype;

  // Instantiate a base Clazz (but only create the instance,
  // don't run the init constructor)
  initializing = true;
  var prototype = new this();
  initializing = false;

  // Copy the properties over onto the new prototype
  for (var name in prop) {
    // Check if we're overwriting an existing function
    if (typeof prop[name] === 'function' && typeof _super[name] === 'function' && /\b_super\b/.test(prop[name])) {
      prototype[name] = (function (pname, fn) {
        return function () {
          var tmp = this._super;

          // Add a new ._super() method that is the same method
          // but on the super-Clazz
          this._super = _super[pname];

          // The method only need to be bound temporarily, so we
          // remove it when we're done executing
          var ret = fn.apply(this, arguments);
          this._super = tmp;

          return ret;
        };
      }(name, prop[name]));
    } else {
      prototype[name] = prop[name];
    }
  }

  // The dummy Clazz constructor
  function Class () {
    // All construction is actually done in the init method
    if (!initializing && this.init) {
      this._instanceId = classManager.getNewInstanceId();
      this.init.apply(this, arguments);
    }
  }

  // Populate our constructed prototype object
  Class.prototype = prototype;

  // Enforce the constructor to be what we expect
  Class.prototype.constructor = Class;

  // And make this Clazz extendable
  Class.extend = ClassBase.extend;

  return Class;
};

var Class = ClassBase.extend({
  _className: 'Class',
  init: function () {
    this._super();
  },
  className: function () {
    return this._className;
  },
  instanceId: function () {
    return this._instanceId;
  }
});

export default Class;
