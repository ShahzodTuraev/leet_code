// 66. Plus One
function plusOne(digits) {
  let newArr = [];
  let overNum = 0;
  const lastNum = digits[digits.length - 1];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (lastNum !== 9) {
      if (i == digits.length - 1) {
        newArr.unshift(digits[i] + 1);
      } else {
        newArr.unshift(digits[i]);
      }
    } else {
      if (i == digits.length - 1) {
        newArr.unshift(0);
        overNum = 1;
      } else {
        if (digits[i] + overNum < 10) {
          newArr.unshift(digits[i] + overNum);
          overNum = 0;
        } else {
          newArr.unshift(0);
          overNum = 1;
        }
      }
    }
  }
  if (overNum == 1) {
    newArr.unshift(overNum);
  }
  return newArr;
}

console.log(plusOne([1, 2, 3]));
