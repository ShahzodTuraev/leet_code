// 1752. Check if Array Is Sorted and Rotated
function check(nums) {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count++;
    }
  }
  return count <= 1;
}
