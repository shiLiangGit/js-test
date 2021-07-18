console.log('------------------------');
console.warn('undefined/null/isNaN');
console.log(typeof (null))  // object
console.log(typeof (null))  // object
console.log(null == null)  // true
console.log(null === null)  // true
console.log(undefined == null)  // true
console.log(undefined === null)  // false
console.log(isNaN('100'))  // false  先经过 隐式转换 Number('100') => 100, isNaN(100) => false
console.log(parseInt('1a') == 1)   // true
console.log( undefined == 0)   // false
console.log( undefined > 0)   // false
console.log( undefined < 0)   // false
console.log( null == 0)   // false
console.log( null > 0)   // false
console.log( null < 0)   // false
//isNaN实现过程
function isNaN1() {
  var res = Number(num);
  if (res == NaN) {
    return true
  } else {
    return false
  }
}

console.log('------------------------');

// 空对象不等于空对象  {} != {}, 引用类型 对比的是引用地址

var obj = {};
obj1 = obj;
console.log({} == {}) // false
console.log(obj1 === obj) // true

console.log('------------------------');

var a = 1;
function test() {
  var a = 2;
  this.a = 3;
  console.log(a)
}

test();            // 2
new test();        // 2
console.log(a)     // 3 等于 this.a 等于 window.a (在函数内全局对象a被局部函数this.a 重置为3)

console.log('------------------------');

var b = 5;
function test1() {
  b = 0;
  console.log(b);
  console.log(this.b);
  var b;
  console.log(a)
}

test();  // 0 5 0 this指向window， 所以输出5
new test();  // 0 undefined 0 (实例化后this指向test1, 但test1并未定义this.b 所以输出undefined)

