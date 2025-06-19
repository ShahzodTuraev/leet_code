// 1979. Find Greatest Common Divisor of Array
function findGCD(nums) {
  let maxDiv = 0;
  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);
  for (let i = minNum; i > 0; i--) {
    if (maxNum % i === 0 && minNum % i === 0) {
      maxDiv = i;
      break;
    }
  }
  return maxDiv;
}

console.log(findGCD([2, 5, 6, 9, 10]));
