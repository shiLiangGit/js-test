// Professor.prototype.tSkill = 'Java'
function Professor() {
  this.tSkill = 'Java'
}

var professor = new Professor();

Teacher.prototype = professor;
function Teacher() {
  this.mSkill = 'JS/Jq';
  this.students = 200;
  this.success = {
    age: 23
  }
}
var teacher = new Teacher();

Student.prototype = teacher;
function Student() {
  this.pSkill = 'html'
}

var student = new Student();
console.log(student)

student.students = 201;    // 下级能直接修改引用值
student.success.age = 24; // 下级不能修改上级的原始值（会默认再下级上添加相应原始属性）
console.log(student)
/**
 * 1、原型链的终点是Object.prototype
 * 2、原型链的继承中，下级不能修改上级的原始值（会默认再下级上添加相应原始属性），但能直接修改引用值
 * 3、不是所有的对象都继承于Object.prototype， 如：Object.create(null) 输出是 空对象 {}， 但其没有原型链
 */


console.log('------------------------------')

function Compute() {
  this.plus = function (a, b) {
    console.log(a + b)
  }
  this.minus = function (a, b) {
    console.log(a -b)
  }
}
var compute = new Compute();
console.log(compute)
FullCompute.prototype = compute;  // 功能上等价于 apply/call， 但这是利用原型链实现的
function FullCompute() {
  // Compute.apply(this);   // 使用 apply/call更改this指向实现，使得 this 由指向Compute 变为指向 FullCompute
  this.mul = function (a, b) {
    console.log(a * b)
  }
  this.div = function () {
    console.log(a / b)
  }
}

var fullCompute = new FullCompute();
var compute = new Compute();
console.log(fullCompute)
fullCompute.plus(1, 2);
compute.plus(2, 3);
