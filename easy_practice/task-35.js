// 228. Summary Ranges
function summaryRanges(nums) {
  if (nums.length == 0) {
    return [];
  } else {
    let range = [];
    let rangeElement = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] == 1) {
        rangeElement.push(nums[i]);
      } else {
        range.push(rangeElement);
        rangeElement = [];
        rangeElement.push(nums[i]);
      }
    }
    range.push(rangeElement);
    const result = range.map((ele) =>
      ele.length > 1
        ? ele[0]?.toString().concat("->", ele[ele.length - 1]?.toString())
        : ele[0]?.toString()
    );
    return result;
  }
}
console.log(summaryRanges([]));
