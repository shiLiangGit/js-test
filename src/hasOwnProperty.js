console.log('------------------------------')
console.warn('hasOwnProperty、for in、 in 、 instance of')
var obj = {
  name: '张三',
  age: 12,
  sex: '男'
}
/**
 * for in 循环对象
 * @type {number[]}
 */
var arr = [1, 2, 3, 4];
for (var key in obj) {
  // obj.key // 结果会报错，因为 js引擎会将其隐式转化为obj['key'] key变为字符串，所以找不到
  console.log(key + ':' + obj[key])
}
console.log('------------------------------')
/**
 * for in 循环数组
 */
for (var i in arr) {
  // obj.key // 结果会报错，因为 js引擎会将其隐式转化为obj['key'] key变为字符串，所以找不到
  console.log(i + ':' + arr[i])
}
console.log('------------------------------')
/**
 * hasOwnProperty 检测 属性是否在实例化对象自身上
 */

function Car() {
  this.brand = 'benza';
  this.color = 'red';
}
Car.prototype = {
  lang: 5,
  width: 2.5
}
Object.prototype.name = 'object';
var car = new Car();
for (var key in car) {
  if (car.hasOwnProperty(key)) {
    console.log(key + ':' + car[key])
  }
  console.log(key + ':' + car[key])  // 会把实例化对象、及其原型链上的所有属性都遍历出来
}
console.log('------------------------------')
/**
 * hasOwnProperty
 */
for (var key in car) {
  if (car.hasOwnProperty(key)) {   // hasOwnProperty 找对象自身的属性，排除原型链上的属性
    console.log(key + ':' + car[key])
  }
}

console.log('------------------------------')
/**
 * in 不能检测属性是否在自身或原型链上，回判断自身及原型链所有属性
 */

console.log('name' in obj)  // true
console.log('run' in obj)  // false

console.log('------------------------------')
/**
 *  instanceof  （判断A实例化对象的原型有没有B的原型）
 */

console.log(car instanceof Car);    // true
console.log(car instanceof Object); // true
console.log([] instanceof Array);   // true
console.log([] instanceof Object);  // true
console.log({} instanceof Object);  // true
