function twoOutOfThree(nums1, nums2, nums3) {
  const comulArr = nums1.concat(nums2).concat(nums3);
  const distArr = new Set(comulArr);
  const uniqueEles = [...distArr];
  let distList = [];
  let freq = 0;
  for (const ele of uniqueEles) {
    if (nums1.includes(ele)) {
      freq++;
    }
  }
  // for(let )
  return comulArr;
}

console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
