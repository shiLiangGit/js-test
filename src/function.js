// 函数式编程概念：即一个固定的功能或者是程序段被封装的过程
//  实现一个笃定的功能或程序，在这个封装体重需要一个入口一个出口
// 局部变量
function test1() {
  console.log(msg === undefined)         // true
  console.log(undefined === undefined)  // true
  console.log(NaN === NaN)              // false
  var msg = 123;
}
test1()
// console.log(msg)  // msg is not defined

// 局部变量
function test2() {
  msg = 123;
}
test2()
console.log(msg)


var message;
console.log(message)
console.log(typeof message) // "undefined"
console.log(null)
console.log(typeof null)  // "object"
console.log({} == null)  // false

/**
 * Boolean 总是返回 true 或 false
 */
console.log(Boolean(undefined))  // false
console.log(Boolean(null))  // false
console.log(Boolean(NaN))  // false
console.log(Boolean('1'))  // false
console.log(isNaN('1q'))  // true
console.log(isNaN(parseInt('1q')))  // false

var obj = {
  a: '张三'
};

console.log(isNaN(obj))  // true
console.log(obj)  // true
console.log(parseInt(''))  // NaN
console.log(parseInt('070'))  // 70

console.log(obj.valueOf())  // {a: '张三’}
console.log(obj.toString())  // [object Object]

function testArg(a, b) {
  arguments[0] = 20
  console.log(a)  // arguments[0] 总是和 a的值相等，但指向的不是同一个内存（映射关系）
}
testArg(5, 3)

+function test (){
 console.log(1212)
}()