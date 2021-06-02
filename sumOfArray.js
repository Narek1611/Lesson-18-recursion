function sum(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let firstElement = arr[0];
    arr.shift();
    return firstElement + sum(arr);
  }
}

let array = [];
// array.shift();
// console.log(array);
console.log(sum(array));
