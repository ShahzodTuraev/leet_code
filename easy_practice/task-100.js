// 1903. Largest Odd Number in String
function largestOddNumber(num) {
  let stNum = "";
  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2 !== 0) {
      stNum = num.slice(0, i + 1);
      break;
    }
  }
  return stNum;
}
