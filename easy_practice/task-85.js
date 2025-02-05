// 1790. Check if One String Swap Can Make Strings Equal
function areAlmostEqual(s1, s2) {
  if (s1 === s2) {
    return true;
  }
  let changes = 0;
  let s1Arr = [];
  let s2Arr = [];
  let i = 0;
  while (i < s1.length && changes <= 2) {
    if (s1[i] !== s2[i]) {
      s1Arr.push(s1[i]);
      s2Arr.push(s2[i]);
      changes++;
    }
    i++;
  }
  if (changes < 3 && s1Arr[0] === s2Arr[1] && s1Arr[1] === s2Arr[0]) {
    return true;
  }
  return false;
}

console.log(areAlmostEqual("bank", "kanb"));
