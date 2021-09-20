var obj = {
  _year: 2001,
  version: 1
}

Object.defineProperty(obj, 'year', {
  configurable: true,
  writable: false,
  enumerable: false,
  value:2005
})
obj.year = 2006;  // 因设置configurable或（writable） 所有属性值不可改
console.log(obj.year)
for (let objKey in obj) {
  console.log(objKey) // 因year属性设置enumerate为false，所以for in取不到year属性
}

// defineProperties定义的数据属性，默认 writable, configurable, enumerable 均为false
var obj2 = {};
Object.defineProperties(obj2, {
  _year: {
    value: 2002
  },
  version: {
    value: 1
  },
  year: {
    get: function (){
      return this._year;
    },
    set(v) {
      if (v > 2004) {
        console.log("v------", v)
        this._year = v;
        this.version += v - 2004;
      }
    }
  }
})
obj2.year = 2005; // 会调用set方法拦截
console.log(obj2.version); // 因 version的writable为false,所以 version 值没变，为1
console.log(Object.getOwnPropertyDescriptor(obj2, 'version')); // { value: 1, writable: false, enumerable: false, configurable: false }

function Person () {

}
Person.prototype.name = '李四';
Person.prototype.say = function (){
  console.log('hello world');
}

var person = new Person();
person.name = '张三';

// for in 会遍历所有实例和构造函数原型的属性
for (const key in person) {
  console.log(key)
}

/**
 * person.hasOwnProperty(属性)，判断属性是否在自身对象上
 * 属性 in person;判断属性是否在对象或原型上能够访问
 * for in 获取所有能够通过对象访问的实例及构造函数原型上的所有可枚举属性
 * Object.keys() 获取传入对象的所有可枚举的属性
 * Object.getOwnPropertyNames() 获取所有传入对象的属性，无论是否可枚举
 * @type {string[]}
 */
var keys = Object.keys(person); // name
var proKeys = Object.keys(Person.prototype); // 返回构造函数原型的name、say属性
var allKeys = Object.getOwnPropertyNames(person);
console.log(keys)
console.log(allKeys)
