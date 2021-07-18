let company = {
    list: {},
    on(key, fn) { // 定义事件订阅
        !(this.list[key]) && (this.list[key] = []);
        this.list[key].push(fn);
    },
    emit() { // 定义事件发布
        let key = [].shift.call(arguments),
            fns = this.list[key];
        if (!fns || !fns.length)  return false;
        fns.forEach((fn) => {
            fn.apply(this, arguments)
        });
    },
    remove(key, fn) { // 取消订阅
        let fns = this.list[key];
        // 如果缓存列表中没有函数，返回false
        if (!fns) return false;
        // 如果没有传对应函数的话
        // 就会将key值对应缓存列表中的函数都清空掉
        if (!fn) {
            fns && (fns.length = 0);
        } else {
            // 遍历缓存数组，看看传入的fn与哪个函数相同
            // 如果相同就直接从缓存列表中删除即可
            fns.forEach((cb) => {
                if (cb === fn) {
                    fns.splice(i, 1);
                }
            });
        }
    }
};
function setJob(job) {
    console.log('你的职位是：' + job)
}
function setEdu(edu) {
    console.log('你的学历是：' + edu)
}
function setAge(age) {
    console.log('你的年龄是：' + age)
}
company.on('setJob', setJob)
company.on('setEdu', setEdu)
company.on('setAge', setAge)
company.remove('setJob');
company.emit('setJob','前端开发工程师');
company.emit('setEdu','本科');
company.emit('setAge','24')
company.emit('setAge','25')