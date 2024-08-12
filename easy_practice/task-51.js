// 509. Fibonacci Number
function fib(n) {
  let numArr = [0, 1];
  for (let i = 0; i <= n; i++) {
    if (i > 1) {
      numArr.push(numArr[i - 2] + numArr[i - 1]);
    }
  }
  return numArr[n];
}

console.log(fib(4));
