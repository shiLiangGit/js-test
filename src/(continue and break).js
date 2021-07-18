console.log('------------------------------------')
console.warn('continue 和 break')

// continue 终止当前循环， 之后的代码不会执行
// break终止整个循环 之后的代码不会执行 =====> 等价于函数内部的return
// 注意：return 只能用于函数体内，函数体外会报错， break 函数体内外均可
var i = 0;
function test() {
  for (;i<5;i++){
    if (i === 3) {
      // continue;   // continue 终止当前循环， 之后的代码不会执行
      // break;  // break终止整个循环 之后的代码不会执行 =====> 等价于函数内部的return
      return
    }
    console.log(i)
  }
}

test()

/**
 * switch 里用return， 等同于break、后面语句及其他case不会再执行
 * @type {number}
 */
var a = 1;

function test1() {
  switch (a) {
    case 1:
      console.log(1)
      break;
    case 2:
      console.log(2)
      return 1;
      break;
    default:
      break
  }
}
test1()
