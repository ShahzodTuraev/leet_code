// 2652. Sum Multiples
function sumOfMultiples(n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 7 === 0 || i % 5 === 0) {
      res += i;
    }
  }
  return res;
}

console.log(sumOfMultiples(10));
