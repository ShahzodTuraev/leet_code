function majorityElement(nums) {
  const setEle = new Set(nums);
  const uniqueElements = [...setEle];
  let result;
  for (let i = 0; i < uniqueElements.length; i++) {
    if (
      nums.filter((ele) => ele == uniqueElements[i]).length >
      nums.length / 2
    ) {
      result = uniqueElements[i];
    }
  }
  return result;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
