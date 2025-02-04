// 1800. Maximum Ascending Subarray Sum
function maxAscendingSum(nums) {
  let maxSum = 0;
  let subSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      subSum += nums[i];
    } else {
      if (subSum > 0) {
        if (maxSum < subSum + nums[i]) {
          maxSum = subSum + nums[i];
        }
        subSum = 0;
      }
    }
  }
  return Math.max(maxSum, subSum + nums[nums.length - 1]);
}

console.log(maxAscendingSum([3, 6, 10, 1, 8, 9, 9, 8, 9]));
