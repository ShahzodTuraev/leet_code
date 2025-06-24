// 2215. Find the Difference of Two Arrays

function findDifference(nums1, nums2) {
  let list1 = [];
  let list2 = [];
  const maxLength = Math.max(nums1.length, nums2.length);
  for (let i = 0; i < maxLength; i++) {
    if (
      Number.isInteger(nums1[i]) &&
      !nums2.includes(nums1[i]) &&
      !list1.includes(nums1[i])
    ) {
      list1.push(nums1[i]);
    }
    if (
      Number.isInteger(nums2[i]) &&
      !nums1.includes(nums2[i]) &&
      !list2.includes(nums2[i])
    ) {
      list2.push(nums2[i]);
    }
  }
  return [list1, list2];
}

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
