// 1652. Defuse the Bomb
function decrypt(code, k) {
  const doubleCode = code.concat(code);
  if (k == 0) {
    return code.fill(0);
  }
  if (k > 0) {
    return code.map((ele, index) => {
      return doubleCode
        .slice(index + 1, k + index + 1)
        .reduce((a, b) => a + b, 0);
    });
  }
  if (k < 0) {
    return code.map((ele, index) => {
      return doubleCode
        .slice(code.length + k + index, code.length + index)
        .reduce((a, b) => a + b, 0);
    });
  }
}
[5, 7, 1, 4, 5, 7, 1, 4];
console.log(decrypt([2, 4, 9, 3], -2));
