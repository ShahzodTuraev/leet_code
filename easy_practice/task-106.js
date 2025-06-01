// 1748. Sum of Unique Elements
function sumOfUnique(nums) {
  let sum = 0;
  for (const num of nums) {
    if (nums.filter((ele) => ele === num).length === 1) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumOfUnique([1, 2, 2, 2, 3]));
