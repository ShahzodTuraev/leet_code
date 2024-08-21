// 1672. Richest Customer Wealth
function maximumWealth(accounts) {
  return Math.max(...accounts.map((ele) => ele.reduce((a, b) => a + b, 0)));
}
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
