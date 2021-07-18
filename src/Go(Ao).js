console.log('---------------------')
console.warn('GO/AO对象')

console.log('result1', test)  // function test() {}
function test(test) {
  console.log('result3', test);
  var test = 2;
  console.log('result4', test);
  function test() {}
}
test(1)
var test = 1;
console.log('result2', test)   // 1

/**
 * AO对象流程
 * 1、找形参和变量声明  -> undefined
 * 3、在函数声明  -> function() {}
 */

// GO对象
// GO: {
//   test: undefined  -> function test() {}
// }

// test执行，创建 AO对象

/**
 * AO对象流程
 * 1、找形参和变量声明  -> undefined
 * 2、形参实参值统一    -> 接收实参赋值
 * 3、在函数体里找函数声明  -> function() {}
 * 4、执行 变量赋值或者内嵌函数执行
 */

// AO: {
//  test: undefined -> 1 -> function test() {}
// }
