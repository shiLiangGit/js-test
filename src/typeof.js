console.log('--------------------------');
console.warn('typeof');

// js的typeof可能返回的值
// object(null)、boolean、number、string、undefined、function  (均为字符串格式)
console.log(typeof (null))  // object, null 最初是空对象的指针或空对象的占位符
console.log(typeof (undefined))  // undefined
console.log(typeof (function () {}))  // function
console.log(typeof (a))  // undefined (a未定义)

console.log('--------------------------');

// 逗号运算，只返回最后一个逗号表达式

// var f = (function a() {}, function b() {})  // 最终 f 等于 function b () {}

var f = (function a() {}, function b() { return 2 })() // 输出 2

console.log(typeof(f)) // 输出 number (字符串格式)



