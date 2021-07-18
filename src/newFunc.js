
console.log('--------------------------------------------------------')
console.warn(' 组合继承')

/**
 * call/apply 和 原型链 的组合继承
 */

function Teacher() {
    this.name = '黎明';
    this.age = 45;
}

Teacher.prototype.teach = function teach(a, b) {
    // console.log('arguments.length:' + arguments.length)        // 2
    // console.log('callee => ' + arguments.callee)              // function teach () {}
    // console.log('callee.name => ' + arguments.callee.name)   // teach
    // console.log('caller => ' + arguments.callee.caller)
    console.log(this.name + ' is teaching');
}
Student.prototype = new Teacher();  // Student继承Teacher原型
Student.prototype.constructor = Student;
function Student() {
    Teacher.apply(this)  // apply 继承 Teacher 构造函数的属性
    this.name = '张三';
}

var student = new Student();
student.age = 43;
console.log(student)
console.log(student.age)
console.log(student.name)
student.teach(1, 2)

console.log('--------------------------------------------------------')
console.warn('寄生组合继承')
/**
 * call/apply 和 原型链 的寄生组合继承
 */

function Teacher() {
    this.name = '黎明';
    this.age = 45;
}

Teacher.prototype.teach = function teach(a, b) {
    // console.log('arguments.length:' + arguments.length)        // 2
    // console.log('callee => ' + arguments.callee)              // function teach () {}
    // console.log('callee.name => ' + arguments.callee.name)   // teach
    // console.log('caller => ' + arguments.callee.caller)
    console.log(this.name + ' is teaching');
}
Student.prototype = Object.create(Teacher.prototype);  // Student继承Teacher原型
Student.prototype.constructor = Student;
function Student() {
    Teacher.apply(this)  // apply 继承 Teacher 构造函数的属性
    this.name = '张三';
}

var student = new Student();
student.age = 43;
console.log(student)
console.log(student.age)
console.log(student.name)
student.teach(1, 2)

// 更改prototype属性值
Car.prototype.name  = 'Benz';
function Car () {}
var car = new Car();
Car.prototype.name  = 'Mazda';
console.log(car)

// 重写prototype
// Car.prototype.name  = 'Benz';
// function Car () {
//     console.log(this.__proto__)
// }
// var car = new Car();
// Car.prototype = {  // 实例化之后的car对象和prototype 的重写没任何关系
//     name: 'Mazda'
// };
// var car1 = new Car();
// console.log(car.name)
// console.log(car1.name)
// console.log(car.__proto__)
// console.log(car1.__proto__)
// console.log(car.__proto__ == car1.__proto__)