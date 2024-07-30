// 922. Sort Array By Parity II
function sortArrayByParityII(nums) {
  const addArr = nums.filter((ele) => ele % 2 == 1);
  const evenArr = nums.filter((ele) => ele % 2 == 0);
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      arr.push(evenArr[i / 2]);
    } else {
      arr.push(addArr[(i - 1) / 2]);
    }
  }
  return arr;
}

console.log(sortArrayByParityII([4, 2, 5, 7]));
