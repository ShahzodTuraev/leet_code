// 2057. Smallest Index With Equal Value
function smallestEqual(nums) {
  let res = -1;
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      res = i;
      break;
    }
  }
  return res;
}
console.log(smallestEqual([0, 1, 2]));
