// 2778. Sum of Squares of Special Elements
function sumOfSquares(nums) {
  let reqNum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) === 0) {
      reqNum += nums[i] ** 2;
    }
  }
  return reqNum;
}
console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));
