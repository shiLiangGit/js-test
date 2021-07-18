console.log('--------------------');
console.warn('js插件封装');
// 立即执行函数隔离变量作用域，防止全局变量污染
(function () {
  var a = 1;
  function Test(name) {
    this.name = name;
    console.log(a)
  }
  Test.prototype.run = function () {
    console.log(this.name + ' is running')
  }
  window.Test = Test;  // 形成闭包
})()

var aa = new Test('李明');
aa.run()
