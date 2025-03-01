function applyOperations(nums) {
  let operArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i - 1] !== nums[i] && nums[i] === nums[i + 1]) {
      operArr.push(2 * nums[i]);
    } else if (!!nums[i - 1] && nums[i - 1] === nums[i]) {
      operArr.push(0);
    } else {
      operArr.push(nums[i]);
    }
  }
  operArr.push(nums[nums.length - 1]);
  const withoutZero = operArr.filter((ele) => ele !== 0);
  const zeroArr = new Array(nums.length - withoutZero.length).fill(0);
  return withoutZero.concat(zeroArr);
}

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
