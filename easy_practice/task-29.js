// 35. Search Insert Position
function searchInsert(nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    return nums.filter((ele) => ele < target).length;
  }
}
console.log(searchInsert([1, 4, 5, 9], 2));
