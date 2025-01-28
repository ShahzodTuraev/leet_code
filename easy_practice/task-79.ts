// 268. Missing Number
function missingNumber(nums: number[]): number {
  let distictNum: number[] = [];
  const sortedList = nums.sort((a: any, b: any) => a - b);
  for (let i = 0; i < nums.length + 1; i++) {
    if (i !== sortedList[i]) {
      distictNum.push(i);
    }
  }
  return distictNum[0];
}
