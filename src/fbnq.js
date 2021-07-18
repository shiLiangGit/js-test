// // 斐波那契数列  1 1 2 3 5 8 13 21
// var n = window.prompt('请输入n');
// // for循环写法
// var arr = [1,1];
// var i = 0;
// for(;i<n - 2; i ++ ) {
//     let len = arr.length;
//     arr.push(arr[len -2] + arr[len -1]);
// }
// console.log(arr.toString())
// 递归写法
// function fbnq (n) {
//     if (n <= 2){
//         return 1
//     }
//     return fbnq(n -1) + fbnq(n -2)
// }
// console.log(fbnq(n))
// 递归流程
// fbnq(5) = fbnq(4) + fbnq(3);  ===> fbnq(5) = 3 + 2;
// fbnq(4) = fbnq(3) + fbnq(2);  ===> fbnq(4) = 2 + 1;
// fbnq(3) = fbnq(2) + fbnq(1);  ===> fbnq(3) = 1 + 1;
