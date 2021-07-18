console.log('---------------------------')
console.warn('闭包练习')

function test1() {
  function test2() {
    a++
    console.log(a)
  }
  var a = 1;
  return test2
}
var c = 3;
var test3 = test1();
test3();
console.log('------------------------------')
/**
 * 累加器
 */
// function test() {
//   var a = 0;
//   return function () {
//     a++
//     console.log(a)
//   }
// }
// var aa = test();
// aa(); // 1
// aa(); // 2
// aa(); // 3
console.log('------------------------------')
/**
 * 班级新增、移除学生
 * @returns {{addSt: addSt, rmSt: rmSt}}
 */
// function stClass() {
//   var st = [];
//   var students = {
//     addSt: function (s) {
//       st.push(s)
//       console.log(st)
//     },
//     rmSt: function (s) {
//       var index = st.indexOf(s);
//       console.log(st)
//       console.log(index)
//       index !== -1 && st.splice(index, 1)
//       console.log(st)
//     }
//   }
//   return students
// }
// var stObj = stClass()
// stObj.addSt('张三');
// stObj.addSt('李四');
// stObj.addSt('王二');
// stObj.rmSt('李四');
console.log('------------------------------')
