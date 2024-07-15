// 202. Happy Number
function isHappy(n) {
  const digitSqrSum = (num) => {
    return num
      .toString()
      .split("")
      .map((item) => Math.pow(Number(item), 2))
      .reduce((a, b) => a + b, 0);
  };
  const hasDublicates = (arrayValue) => {
    return arrayValue
      .map((ele, index, array) => {
        return array.indexOf(ele) !== index;
      })
      .includes(true);
  };
  let checkArr = [n];
  do {
    checkArr.unshift(digitSqrSum(checkArr[0]));
  } while (!hasDublicates(checkArr));
  return checkArr.includes(1);
}

console.log(isHappy(19));
