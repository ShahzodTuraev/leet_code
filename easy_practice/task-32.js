// 67. Add Binary
function addBinary(a, b) {
  const maxValue = a.length >= b.length ? a : b;
  const differ = Math.abs(a.length - b.length);
  let comulArr = [];
  let remainValue = 0;
  for (let i = maxValue.length - 1; i >= 0; i--) {
    const firstVal = a[a.length > b.length ? i : i - differ]
      ? Number(a[a.length > b.length ? i : i - differ])
      : 0;
    const secondVal = b[a.length < b.length ? i : i - differ]
      ? Number(b[a.length < b.length ? i : i - differ])
      : 0;
    if (firstVal + secondVal + remainValue > 1) {
      comulArr.unshift(firstVal + secondVal + remainValue - 2);
      remainValue = 1;
    } else {
      comulArr.unshift(firstVal + secondVal + remainValue);
      remainValue = 0;
    }
  }

  return remainValue ? remainValue + comulArr.join("") : comulArr.join("");
}

console.log(addBinary("1", "111"));
