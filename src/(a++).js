
// a++ 和 ++a
var a = 1;
console.log('a++=' + a++, 'a=' + a);  // 1, 2

var b = 1;
console.log('++b=' + ++b, 'b=' + b); // 2, 2

var c = 1;
var d = c++;
console.log(d)  // 1

var e = 1;
e = e++;
console.log(e) // 1

/*
    总结：a++ 运算优先级小于赋值运算符 =，；所以输出 1
     ++a 运算优先级大于赋值运算符 = ；所以输出 2
*/