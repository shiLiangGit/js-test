// NaN 代表非数字值
console.log('-------------------');
console.warn('NaN');

console.log(parseInt('1222'))  // 1222
console.log(parseInt('12a22'))  // 12
console.log(parseInt('a1222'))  // NaN
console.log(parseFloat('a1222'))  // NaN
console.log(parseInt(false))  // NaN
console.log(typeof (parseInt(false)))  // number类型


/**
 * 1、NaN 是数字类型，使用typeof 返回 number类型
 * 2、parseInt 或 parseFloat ,会把不能转化为数字的值，全部转换为NaN(非数字)
 * 3、可以用isNaN()判断一个值是否是数字类型
 */

var a = 1000
console.log(parseInt(a, 2).toString(16))

console.log(Number(null))  // 0
console.log(Number(undefined))  // NaN

// isNaN 里的值，首先会经过Number(值)转换
isNaN(123) // false
isNaN('123') // true
isNaN(NaN) // true
isNaN(null) // false
isNaN(undefined) // true
