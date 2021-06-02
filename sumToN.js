function sumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(10));

console.log(sumTo(100));

console.log(sumTo(1000));

console.log(sumTo(10000));
