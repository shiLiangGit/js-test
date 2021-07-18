console.log('-----------------------------------');
console.warn('Object.create()使用')

var o = Object.create(null)
console.log(o); // 输出 {} ， 没有任何属性，原型链

console.log('-----------------------------');

var b = Object.create()
console.log(b); // 输出 {} ， 没有任何属性，但有原型链

console.log('-----------------------------');

var c = Object.create({name: '王二'})
console.log(c); // 输出 {} ， 有继承属性，也有原型链

console.log('-----------------------------');

function NewTest() {
  this.name = '李明';
  this.run = function () {
    console.log(this.name + 'is running')
  }
}

NewStu.prototype = new NewTest();
function NewStu() {
  this.name = '张三'
}
var newStu = new NewStu();
console.log(newStu)
console.log(newStu.run())

console.log('-----------------------------');


const person = {
  name: '李明',
  run: function () {
    console.log(this.name + 'is running')
  }
}

const me = Object.create(person);  // 等价于 const me = Object.create(new NewTest());
me.name = '张三';
console.log(me)
me.run();

/**
 * 总结 构造函数原型链的继承，相当于 Object.create(实例化对象)
 * 即：NewStu.prototype = new NewTest() 等价于 me = Object.create(new NewTest())
 */
