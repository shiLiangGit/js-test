console.log('-------------------');
console.warn('callee/caller')
function test(a, b, c) {
  // arguments.callee 总是指示当前被调用执行的函数
  console.log(arguments.callee.length)  // 形参个数 等价于 test.length  3
  console.log(test.length)  // 形参个数  3
  console.log(arguments.length)  // 实参个数  2
}

test(1, 2);
console.log('--------------------')
/**
 * callee使用场景
 */
// function sum(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n + sum(n - 1)
// }
// var res = sum(10);
// console.log(res)

var res = (function (n) {
  if (n <= 1) {
    return 1;
  }
  return n + arguments.callee(n - 1)  // 对于自执行匿名函数， 只能使用arguments.callee 指示当前执行的函数
})(10);
console.log(res)

/**
 * caller使用场景
 */

console.log('--------------------')

function test1() {
  test2();
}
function test2() {
  console.log(test2.caller)  // test2.caller 返回调用test2 的函数
}

test1();

console.log('--------------------')

/**
 *  foo.call()/foo.apply() 不传参，相当于 foo()
 *  foo.call(arguments)/foo.apply(arguments) 不传参，相当于 foo(arguments) 相当于 foo.call(null, arguments)/foo.apply(null, arguments)
 */
function foo() {

}
