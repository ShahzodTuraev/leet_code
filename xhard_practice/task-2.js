// 4. Median of Two Sorted Arrays
function findMedianSortedArrays(nums1, nums2) {
  const sortNums = nums1.concat(nums2).sort((a, b) => a - b);
  if (sortNums.length % 2 == 0) {
    return (
      (sortNums[sortNums.length / 2 - 1] + sortNums[sortNums.length / 2]) / 2
    );
  } else {
    return sortNums[Math.floor(sortNums.length / 2)];
  }
}

console.log(findMedianSortedArrays([1, 2, 3, 4], [2, 3, 3]));
