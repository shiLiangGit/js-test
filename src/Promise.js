// promise
/**
 * Promist
 * 1、作用：通过链式then的方式 实现，解决了js异步回调地狱 的情况。
 * 1、有三种状态： pending, resolve, reject
 * 2、状态不可变：比如 resolve 后面再 reject , 结果是 只会执行 resolve 的then 回调，不会 执行 reject 的catch 回调；反之先 reject 也是如此。
 * 3、Promise.all([函数数组]) 方法： 目的是实现同时执行多个 异步函数
 * 入参：多个函数名的数组，
 * 返回 ： 所有异步函数都resolve时 或者有一个异步函数reject 就中断，返回。
 *  （1）都执行成功，结果是，异步函数返回组成的数组，且数组顺序是 入参的填写顺序(和异步函数谁先返回无关)
 *  （2）有一个失败，结果是 ， 失败的结果
 * 4、Promise.race([函数名数组])：输出最先执行完成的异步函数结果
 * @type {Promise<unknown>}
 */
var p1 = new Promise((resolve, reject) => {
    // resolve(1)  // 状态不可变
    // reject('err1')

    setTimeout(() => {
        resolve('result1')
        // reject("err1")
    }, 3000)
})
var p2 = new Promise((resolve, reject) => {
    // resolve(2)
    // reject('err2')
    setTimeout(() => {
        resolve('result2')
    }, 2000)
})
var p3 = new Promise((resolve, reject) => {
    // resolve(3)
    setTimeout(() => {
        resolve('result3')
    }, 1000)
})
// p1.then((v) => {
//     console.log(v)
// }).catch((err) => {
//     console.log(err)
// })
// console.log('p1:' + p1)

/*
// 解决回调地狱写法 ： 逐步return 下个 promise 函数  (等同于 （async/await）)
// 注意：一个reject ,则停止执行 其他函数
p1.then((v) => {
    console.log(v)
    return p2
}).then((v) => {
    console.log(v)
    return p3
}).then((v) => {
    console.log(v)
}).catch((err) => {
    console.log(err)
})
*/


/*// 多个异步函数同时执行的 同步写法 （async/await）
async function test () {
    var t1 = await p1.then((v) => {console.log(v)}).catch((err) => {console.log(err)});
    var t2 = await p2.then((v) => {console.log(v)}).catch((err) => {console.log(err)});
    var t3 = await p3.then((v) => {console.log(v)}).catch((err) => {console.log(err)});
}

test()*/
/*// Promise.all()  ----- 等待， 只要不报错，等大家都执行完一起返回
Promise.all([p1, p2, p3]).then((v) => {
    console.log(v)  //  结果 ：["result1", "result2", "result3"] 数组
}).catch((err) => {
    console.log(err)
})
// Promise.race() ----- 赛跑，谁先执行完返回谁
Promise.race([p1, p2, p3]).then((v) => {
    console.log(v) // 结果 ： result3, 因其先执行完毕
}).catch((err) => {
    console.log(err)
})*/
