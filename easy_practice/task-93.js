// 2733. Neither Minimum nor Maximum
function findNonMinOrMax(nums) {
  const sortedNum = nums.sort((a, b) => a - b);
  const maxVal = Math.max(...sortedNum);
  const minVal = Math.min(...sortedNum);
  const remainValuesCount = nums.filter(
    (ele) => ele !== maxVal && ele !== minVal
  );
  return remainValuesCount[0] ?? -1;
}

console.log(findNonMinOrMax([1, 1, 3, 4, 24, 45]));
