console.log('---------------------')
console.warn('for/while/do-while')

// for (var a = 0; a < 5; a++) {
//     console.log(a)
// }

// 等价于
// var a = 0;
// for (;a < 5;){
//     console.log(a)
//     a++
// }

// 等价于
// var a = 0;
// while (a < 5){
//     console.log(a)
//     a++
// }
//总结： for 循环完全可以写成对应的while循环

// do-while 不常用
// var b = 0;
// do {
//     console.log('开始执行do-while循环')
//     b++
//     console.log(b)
// } while (b < 5)


// 打印 10的n次方
// var n = 5;
// var sum = 1;
// for (var c = 1; c < n; c++) {
//     sum *= 10;
// }
// console.log(sum)

// 打印 c的阶乘
var c = 2;
s = 1
for (; c > 1; c--){
    s *= c
}
console.log(s)

// 打印仅仅能被1和自己整除的质数
// var c = 0;
// for (var i = 2; i < 100; i++){
//     for (var j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             c++
//         }
//     }
//     if (c == 2) {
//         console.log(i)
//     }
//     c = 0;
// }