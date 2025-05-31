// 1470. Shuffle the Array
function shuffle(nums, n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(nums[i]);
    newArr.push(nums[i + n]);
  }
  return newArr;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
