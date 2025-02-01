// 3151. Special Array I
function isArraySpecial(nums) {
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] % 2 !== nums[i + 1] % 2) {
      i++;
    } else {
      break;
    }
  }

  if (nums.length === 1) {
    return true;
  }
  return i === nums.length - 1;
}

console.log(isArraySpecial([2]));
