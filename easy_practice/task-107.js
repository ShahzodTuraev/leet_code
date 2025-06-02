// 2032. Two Out of Three
function twoOutOfThree(nums1, nums2, nums3) {
  const innerArrs = [nums1, nums2, nums3];
  const comulArr = nums1.concat(nums2).concat(nums3);
  const distArr = new Set(comulArr);
  const uniqueEles = [...distArr];

  let distList = [];
  let freq = 0;
  for (const ele of uniqueEles) {
    for (const arr of innerArrs) {
      if (arr.includes(ele)) {
        freq++;
      }
    }
    if (freq >= 2) {
      distList.push(ele);
    }
    freq = 0;
  }

  return distList;
}

console.log(twoOutOfThree([3, 1], [2, 3], [1]));
