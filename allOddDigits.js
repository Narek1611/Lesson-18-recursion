function allOddDigits(num) {
  if ((num % 10) % 2 === 0) return false;
  if (num < 10) return true;
  else {
    return allOddDigits(Math.floor(num / 10));
  }
}

console.log(allOddDigits(178935));
