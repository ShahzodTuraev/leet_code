// 2094. Finding 3-Digit Even Numbers
function findEvenNumbers(digits) {
  let arr = [];
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        const newNum = digits[i] * 100 + digits[j] * 10 + digits[k];
        if (
          i !== j &&
          i !== k &&
          j !== k &&
          digits[k] % 2 === 0 &&
          digits[i] !== 0 &&
          !arr.includes(newNum)
        ) {
          arr.push(newNum);
        }
      }
    }
  }
  return arr.sort((a, b) => a - b);
}

console.log(findEvenNumbers([2, 1, 3, 0]));
