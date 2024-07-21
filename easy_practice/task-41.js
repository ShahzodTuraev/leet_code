// 461. Hamming Distance
function hammingDistance(x, y) {
  const toBinary = (decimalNum) => {
    let devNum = decimalNum;
    let numArr = [];
    while (Math.floor(devNum / 2) !== 0) {
      numArr.push(devNum % 2);
      devNum = Math.floor(devNum / 2);
    }
    devNum !== 0 && numArr.push(devNum);
    return numArr.reverse();
  };
  const fillArr = new Array(
    Math.abs(toBinary(x).length - toBinary(y).length)
  ).fill(0);
  const binaryArrX =
    toBinary(x).length >= toBinary(y).length
      ? toBinary(x)
      : fillArr.concat(toBinary(x));
  const binaryArrY =
    toBinary(y).length >= toBinary(x).length
      ? toBinary(y)
      : fillArr.concat(toBinary(y));
  const comulator = binaryArrX
    .map((ele, index) => (ele === binaryArrY[index] ? 0 : 1))
    .reduce((a, b) => a + b, 0);

  return comulator;
}

console.log(hammingDistance(3, 1));
