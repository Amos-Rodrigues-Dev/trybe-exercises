const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
const expexted1 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepStrictEqual(expexted1, [1, 2, 4]);

const expected2 =  myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.notDeepStrictEqual(expected2, [1, 2, 3, 4]);

const myList = [1, 2, 3, 4];
myRemoveWithoutCopy(myList, 1);
assert.strictEqual(myList.length, 3);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);