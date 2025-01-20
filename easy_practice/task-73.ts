// 2496. Maximum Value of a String in an Array
function maximumValue(strs: string[]): number {
  let maxLength: number = 0;
  for (const str of strs) {
    if (Number.isInteger(Number(str)) && maxLength < Number(str)) {
      maxLength = Number(str);
    }
    if (!Number.isInteger(Number(str)) && maxLength < str.length) {
      maxLength = str.length;
    }
  }
  return maxLength;
}
