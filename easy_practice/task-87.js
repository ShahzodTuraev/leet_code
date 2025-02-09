// 3131. Find the Integer Added to Array
function addedInteger(nums1, nums2) {
  return Math.min(...nums2) - Math.min(...nums1);
}

console.log(addedInteger([2, 6, 4], [9, 7, 5]));
