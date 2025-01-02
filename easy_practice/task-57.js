function intersection(nums1, nums2) {
  const removeDoubl = (a) => {
    let s = new Set(a);
    return [...s];
  };
  const minLengthNums =
    removeDoubl(nums1).length <= removeDoubl(nums2).length
      ? removeDoubl(nums1)
      : removeDoubl(nums2);
  const maxLengthNums =
    removeDoubl(nums1).length > removeDoubl(nums2).length
      ? removeDoubl(nums1)
      : removeDoubl(nums2);
  let result = [];
  for (let i = 0; i < minLengthNums.length; i++) {
    if (maxLengthNums.includes(minLengthNums[i])) {
      result.push(minLengthNums[i]);
    }
  }
  return result;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
