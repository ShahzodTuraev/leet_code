// 47. Largest Number At Least Twice of Others

function dominantIndex(nums: number[]): number {
  let max: number = Math.max(...nums);
  return nums.filter((el) => el * 2 <= max).length + 1 == nums.length
    ? nums.indexOf(max)
    : -1;
}

console.log(dominantIndex([3, 6, , 4, 1, 0]));
