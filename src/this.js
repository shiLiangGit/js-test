console.log('------------------------------');
console.warn('this指向');
// 全局this -> window
// 预编译普通函数this -> window
// apply/call 改变this指向
// 构造函数的this指向实例化对象

// function test() {
//   console.log(this)
//   this.d = 3;
//   var a = 1;
//   function c() {
//
//   }
// }
// test()
//
// // Ao = {
// //   arguments: [123],
// //     this: window,
// //   b: 123,
// //   a: undefined,
// //   c: function c() {}
// // }
//
// console.log(window.d)

function Test() {
  // var this = {    // 实例化对象时，js引擎 自动创建this, this的__proto__是Test.prototype
  //   name: '123',
  //   __proto__: Test.prototype
  // }
  this.name = '123'
  // return this   // 在return时抛出给test1变量
}

var test1 = new Test();

// Ao = {
//   this: window -> {
//     name: '123',
//       __proto__: Test.prototype
//   }
// }

// Go = {
//   Test: function Test() {},
//   test1:
//     {} // 实例化空对象
//     --> {
//       name: '123',
//       __proto__: Test.prototype
//     }
// }
