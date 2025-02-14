// 3024. Type of Triangle
function triangleType(nums) {
  if (
    nums[0] + nums[1] <= nums[2] ||
    nums[0] + nums[2] <= nums[1] ||
    nums[1] + nums[2] <= nums[0]
  ) {
    return "none";
  }
  let s = new Set(nums);

  let a1 = [...s];
  if (nums[0] === nums[1] && nums[0] === nums[2] && nums[2] === nums[1]) {
    return "equilateral";
  }
  if (a1.length === 2) {
    return "isosceles";
  }
  if (a1.length === 3) {
    return "";
  }
}
