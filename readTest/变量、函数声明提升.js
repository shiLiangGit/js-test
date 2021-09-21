/*
    foo(); // 1, 变量声明、函数声明被提升，函数声明覆盖变量foo的声明，所以最终foo是函数foo, 执行得到1
    var foo;
    console.log(foo)
    // foo();
    function foo(){
        console.log(1)
    }
    foo = function (){
        console.log(2)
    }
    foo(); // 2 ，函数表达式覆盖上一个函数foo，所以执行foo输出2
*/

// console.log('---------------------')
/**
 * 下面这段代码，在低版本的浏览器中，函数提升不会被条件判断所控制(即低版本浏览器，还是很提升函数声明foo)，输出2；
 * 但是在高版本的浏览器中会报错，所以应该尽可能避免在块内部声明函数;
 * 高版本浏览器中，对于代码块中的函数声明，只会提升函数名，不会提升函数声明，所以foo为undefined,调用foo()会报错
 */
/*
    console.log(foo)
    foo(); //低版本：2  //高版本： Uncaught TypeError: foo is not a function
    console.log(foo) // [Function: foo]
    console.log(a); // undefined
    var a = true;

    if(a){
        function foo () { console.log(1); }
    }else{
        function foo () { console.log(2); }
    }
*/

// console.log('---------------------')

/*
    console.log(c);  // undefined
    console.log(typeof f); // undefined
    var flag = true;
    if (!flag) {
        var c = 1;
    };
    if (flag) {
        function f(c) {
            f = c;
            console.log("1");
        };
    }
    console.log(typeof f); // function
*/

console.log('---------------------')

/**
 * 下面代码，函数f是具名函数，函数s是函数表达式，具名函数中，可以在函数内部改变函数名；
 * 而函数表达式，如果有函数名，则它的函数名只能作用在其自身作用域中且不可改变函数名
 */
/*
    function f() {
        console.log(typeof f); //function
        // var f = 3;
        f = 3;
        console.log(typeof f); //number
    };

    f();

    var s = function s() {
        console.log(typeof s); //function
        // var s = 3;
        s = 3;
        console.log(typeof s); //function
    };

    s();
*/

// console.log(a);//Uncaught ReferenceError: a is not defined
a = 13;
console.log(a);

(function (){
    var o = {
        a:12,
        say: function (){
            console.log(this)
            console.log(this.a)
        }
    }
    // setTimeout(o.say)
    // o.say();
    function test(){
        // console.log(this);
        o.say();
    }
    test();
    // console.log(this); // global
})();