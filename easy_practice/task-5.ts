function singleNumber(nums: number[]): number {
  let a:number[] = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] == nums[j] && i !== j) {
      a.push(nums[i]);
    }
  }
}
return nums
  .map((ele) => {
    return a.includes(ele) ? 0 : ele;
  })
  .reduce((a, b) => a + b, 0);
};
}

console.log(singleNumber([2, 3, 4, 4, 2, 1, 3]));
