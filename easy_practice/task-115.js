// 3423. Maximum Difference Between Adjacent Elements in a Circular Array
function maxAdjacentDistance(nums) {
  let maxDiff = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const nextIndex = (i + 1) % n; // wrap around to 0 at the end
    const diff = Math.abs(nums[i] - nums[nextIndex]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

console.log(maxAdjacentDistance([1, 2, 4]));
