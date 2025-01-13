// 1528. Shuffle String
function restoreString(s, indices) {
  const orders = indices
    .map((ele, index) => [s[index], ele])
    .sort((a, b) => a[1] - b[1]);
  return orders.map((ele) => ele[0]).join("");
}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(
  [
    [1, "r"],
    [3, "a"],
    [12, "c"],
    [24, "b"],
  ].sort((a, b) => a[0] - b[0])
);
