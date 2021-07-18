console.log('-----------------------------');
console.warn('Object.defineProperty')
var bValue = 12;
var obj = {};
Object.defineProperty(obj, "b", {
  get() {
    return bValue
  },
  set(newValue) {
    bValue = newValue
  },
  enumerable: true,
  configurable: true
})

console.log(obj)
console.log('--------------------------------')
//练习

function AddArr() {
  var arr = [];
  var temp = null;
  Object.defineProperty(this, 'temp', {
    get() {
      return temp;
    },
    set(v) {
      temp = v;
      console.log(temp)
      arr.push({value: temp})
    }
  })
  this.getArr = function () {
    return arr;
  }
}
var addArr = new AddArr();
console.log(addArr.temp)
addArr.temp = 11;
addArr.temp = 12;
console.log(addArr.getArr());
