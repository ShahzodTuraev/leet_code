// 2441. Largest Positive Integer That Exists With Its Negative
function findMaxK(nums: number[]): number {
  const positiveNums: number[] = nums.filter((ele) => ele > 0);
  let result: number = -1;
  for (let i: number = 0; i < positiveNums.length; i++) {
    if (nums.includes(-positiveNums[i]) && result < positiveNums[i]) {
      result = positiveNums[i];
    }
  }

  return result;
}
console.log(findMaxK([2, 4, 2, 3, -6, 4]));
