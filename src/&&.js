// 逻辑运算 && 和 ||
console.log('------------------------------------')
console.warn('逻辑运算 && 和 ||')

// && 运算 遇到假就返回，后面不再执行
// || 运算 遇到真就返回，后面不再执行
let a = 1;
let b = 'a';
let c = false;
console.log(a || b && c)  // 输出 1
console.log((a || b) && c)  // 输出 false
console.log(a || (b && c))  // 输出 false

console.log(window.d && (window.d = '33'))  // undefined
console.log(window.d || (window.d = '33'))  // 33
console.log(2 && 3 > 4 )     //  false
console.log(2 || 3 > 4 )     //  2
console.log( 3 > 4 || 2)     //  2  ----- 比较运算符大于逻辑运算符
console.log( 3 > (4 || 2))     //  false
console.log(3 > 4 ? 0 : 1)     //  0 ----- 比较运算符大于条件（三目）运算符
console.log(2 || 3 > 4 ? 0 : 1)     //  0
console.log(2 || (3 > 4 ? 0 : 1))   // 2
console.log( 3 + 2 > 4)   // true --- 算术运算符大于比较运算符

// 所有为假的值  undefined、 null、''、0 、false,  其他均为真
// 比较运算符 >、< 、==、 === 、>= 、<=、 !=、 !== ，比较结果是布尔值（true/false）
// 运算符优先级
// （括号、成员访问.、需计算的成员访问[]、new) > (逻辑! 、算术运算符) > (比较运算符) > (逻辑运算符、条件运算符(三目运算)) > (赋值运算符)

console.log(['1', '2', '3'].map(parseInt))
