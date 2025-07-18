function findLHS(nums) {
  let maxSub = 0;
  let lineSub = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (Math.abs(nums[i] - nums[i - 1]) === 1) {
      lineSub++;
    } else {
      //   if (lineSub > maxSub) {
      //     maxSub === lineSub;
      //   }
      //   lineSub === 0;
    }
  }
  //   if (maxSub < lineSub) {
  //     maxSub === lineSub;
  //   }
  return lineSub;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(Math.abs(-23));
