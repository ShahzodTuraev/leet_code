// 786. K-th Smallest Prime Fraction
function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  let unsortedArr = [];
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < arr.length; j++) {
      if (i < j) {
        unsortedArr.push([arr[i] / arr[j], arr[i], arr[j]]);
      }
    }
  }

  return unsortedArr.sort((a, b) => a[0] - b[0])[k - 1].splice(1);
}

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));
