// 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
function longestMonotonicSubarray(nums) {
  let maxCount = 1;
  let increaseCount = 1;
  let decreaseCount = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      if (decreaseCount > 1) {
        if (maxCount < decreaseCount) maxCount = decreaseCount;
        decreaseCount = 1;
      }
      increaseCount++;
    }
    if (nums[i] > nums[i + 1]) {
      if (increaseCount > 1) {
        if (increaseCount > maxCount) maxCount = increaseCount;
        increaseCount = 1;
      }
      decreaseCount++;
    }
    if (nums[i] === nums[i + 1]) {
      if (increaseCount > 1) {
        if (increaseCount > maxCount) maxCount = increaseCount;
        increaseCount = 1;
      }
      if (decreaseCount > 1) {
        if (maxCount < decreaseCount) maxCount = decreaseCount;
        decreaseCount = 1;
      }
    }
  }
  if (maxCount < decreaseCount)
    return Math.max(maxCount, decreaseCount, increaseCount);
}

console.log(longestMonotonicSubarray([3, 2, 1]));
