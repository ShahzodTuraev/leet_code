// 561. Array Partition
function arrayPairSum(nums) {
  const sortArr = nums.sort((a, b) => a - b);
  const filterArr = sortArr.filter((_, index) => index % 2 === 0);
  return filterArr.reduce((a, b) => a + b, 0);
}
console.log(arrayPairSum([1, 4, 3, 2]));
