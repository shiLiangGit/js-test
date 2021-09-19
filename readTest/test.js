// a被重置为null, 代表a变量存储的对象的指针地址被重置为null，不会影响b的指针地址指向的对象的取值
// 函数test名被重置为null，和a同理，因为 test函数本身也是对象，也是代表指向函数的指针地址
var a = {aa:123};
var b = a;
a.aa = 234;
a = null;
console.log(b);
console.log(a === b); // a 全等于b, b是有a赋值得到的
var c = null;
function test(a) {
    console.log(arguments)
    console.log(arguments.callee)
    console.log(test)
    c = arguments;
    console.log(123);
}
var test2 = test;
// test = null;
test2(1);
console.log(test2)
console.log(test2.name)
console.log(test2.arguments)
console.log(c.callee === test) // arguments.callee 实际等同于函数名test的赋值

var obj1 = {a:12};
function t(obj){ // 引用类型变量参数也是按值传递
    obj.a = 23;
    obj = {a:45}
}
t(obj1);
console.log(obj1)

// 基本包装类型 Number()、String()、Boolean();
var n = 12;
var num = Number(n);
var nn = new Number(n);
console.log(typeof num); // number 类型
console.log(typeof nn);  // object 类型
console.log('n.valueof',typeof n.valueOf()) // 返回数值的数值类型值
console.log('n.toLocaleString', n.toLocaleString()) // 返回数字的字符串值
console.log(n.toString().slice(1))
var str = '112234343'
var t = str.substring(5); // substring（）字符串截取
console.log(t)

function func(a = 55) {
    a = 99; // updating a does not also update arguments[0]
    console.log(arguments[0]);
}
func(10); // 10