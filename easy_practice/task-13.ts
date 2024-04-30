function findMaxConsecutiveOnes(nums: number[]): number {
  let summArr: number[] = [];
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    }
    if (nums[i] == 0) {
      summArr.push(count);
      count = 0;
    }
    if (i == nums.length - 1 && nums[i] == 1) {
      summArr.push(count);
    }
  }
  return Math.max(...summArr);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
