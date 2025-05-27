// 2894. Divisible and Non-divisible Sums Difference
function differenceOfSums(n, m) {
  let num2 = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      num2 += i;
    }
  }
  const summ = (n * (1 + n)) / 2;
  return summ - 2 * num2;
}

console.log(differenceOfSums(5, 1));
