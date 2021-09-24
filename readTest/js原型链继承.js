var a = {};
var b = new Object();
console.log(a == b);
console.log(a.__proto__ == Object.prototype);
console.log(b.__proto__ == Object.prototype);
console.log(a.__proto__ == b.__proto__); // a, b的原型对象都是Object.prototype, 所以为true

var o = Object.create({});
console.log(o.__proto__ == Object.prototype);  // false 为什么呢？
console.log(o)

var nullObj = Object.create(null);
console.log(nullObj); // 真正的空对象，没有任何属性、方法、原型对象

function User () {

}
User.prototype.name = function (){
    console.log('this is User')
}

function Member () {

}
// console.log(Object.create(User))
// console.log(Object.create(User.prototype))
/**
 * 原型链继承
 * Member.prototype = Object.create(User.prototype);
 * 等价于 Object.setPrototypeOf(Member.prototype, User.prototype);
 * 等价于 Member.prototype.__proto__ = User.prototype;
 * @type {Member}
 */
Member.prototype = Object.create(User.prototype);

var member = new Member();
member.name()
console.log(member instanceof User)