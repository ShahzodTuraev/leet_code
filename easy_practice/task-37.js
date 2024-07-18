// 258. Add Digits
function addDigits(num) {
  let numArr = num.toString().split("");
  while (numArr.length > 1) {
    numArr = numArr
      .map((ele) => Number(ele))
      .reduce((a, b) => a + b, 0)
      .toString()
      .split("");
  }
  return Number(numArr[0]);
}

console.log(addDigits(0));
