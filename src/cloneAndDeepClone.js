var originObj = {
  a: 1,
  b: 2,
  arr: [4, 5,6],
  arrList: [
    {type: '23', a: '李明'},
    {type: '23', a: '李明2'}
  ],
  info: {
    name: '张三',
    age: 23,
    job: ['老师', '工程师']
  }
}

/*
* 浅拷贝
* 方法一：for in 循环实现
* 1、对于对象里，基本类型的属性值，就是对值的复制
* 2、对于对象里，引用类型的属性，其实复制的是对象的引用地址（指针），所以会导致，拷贝后，修改新的对象引用数据（数组、对象）的值，原对象也会发生改变
* 3、拷贝前后，两对像是不等的
* 方法二：使用Object.assign(target, origin)
* 方法三：展开运算符 ...
* */

function  lowClone(originObj) {
  var targetObj = {};
  for (var k in originObj){
    if (originObj.hasOwnProperty(k)) {
      // 浅拷贝
      targetObj[k] = originObj[k]
    }
  }
  return targetObj
}
var targetObj1 = lowClone(originObj);
targetObj1.arr[0] = 20;
targetObj1.arrList[0].a = '李明1';
console.log(targetObj1)
console.log(originObj)
console.log(targetObj1 === originObj); // false

/*
* 深拷贝（拷贝后，两个对象不会相互影响）
* 1、for in 循环 深拷贝
* 2、JSON.stringify 实现深拷贝，但该方法不能拷贝方法，会显示undefined
* */
var originObj2 = {
  a: 1,
  b: 2,
  arr: [4, 5,6],
  arrList: [
    {type: '23', a: '李明'},
    {type: '23', a: '李明2'}
  ],
  info: {
    name: '张三',
    age: 23,
    job: ['老师', '工程师']
  },
  func: function () {
    console.log(this.b)
  }
}

function  deepClone(originObj, targetObj) {
  var tar = targetObj ||  {};
  for (var k in originObj){
    if (originObj.hasOwnProperty(k)) {
      // 浅拷贝 (筛选数组或对象，使用递归，依次拷贝对象的属性值)
      if (typeof originObj[k] === 'object' && originObj[k] !== null) {
        tar[k] = Object.prototype.toString.call(originObj[k]) === '[object Array]' ? [] : {};
        arguments.callee(originObj[k], tar[k])
      } else {
        tar[k] = originObj[k]
      }
    }
  }
  return tar
}
var targetObj2 = deepClone(originObj2);
targetObj2.arr[0] = 20;
targetObj2.arrList[0].a = '李明1';
console.log(targetObj2)
targetObj2.func()  // 正常访问，输出 2
originObj2.func()  // 正常访问，输出 2

/**
 * JSON.stringify（不能拷贝方法）
 */

var targetObj3 = JSON.parse(JSON.stringify(originObj2));
console.log(targetObj3);
console.log(targetObj3.func)  // 输出 undefined,  不能拷贝方法








