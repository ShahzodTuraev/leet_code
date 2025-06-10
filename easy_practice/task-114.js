// 2485. Find the Pivot Integer
function pivotInteger(n) {
  for (let i = 1; i <= n; i++) {
    const leftSum = ((1 + i) / 2) * i;
    const rightSum = ((n + i) / 2) * (n - i + 1);
    if (leftSum === rightSum) return i;
  }
  return -1;
}

console.log(pivotInteger(8));
