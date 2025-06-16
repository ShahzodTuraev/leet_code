// 1588. Sum of All Odd Length Subarrays
function sumOddLengthSubarrays(arr) {
  let sum = 0;
  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end += 2) {
      for (let i = start; i <= end; i++) {
        sum += arr[i];
      }
    }
  }
  return sum;
}

console.log(sumOddLengthSubarrays([1, 2, 3, 4, 5, 6, 7]));
