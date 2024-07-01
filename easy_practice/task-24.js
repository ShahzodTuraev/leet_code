// 26. Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  let p1 = 0;
  let p2 = 1;
  while (p1 < nums.length) {
    if (nums[p1] == nums[p2]) {
      nums.splice(p1, 1);
    } else {
      p1++;
      p2++;
    }
  }
  return nums.length;
}

console.log(removeDuplicates([1, 2, 3, 2, 3, 4]));
