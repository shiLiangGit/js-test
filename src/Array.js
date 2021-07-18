console.log('------------------------------')
console.warn('判断是否是数组方法')

var a = [];
console.log(a.constructor)  // Array function(){}
console.log(a instanceof Array) // true

var str = Object.prototype.toString,   // 工作中用这个最好
    trueTip = '[object Array]';
if (str.call(a) === trueTip) {
  console.log('是数组')
} else {
  console.log('不是数组')
}
