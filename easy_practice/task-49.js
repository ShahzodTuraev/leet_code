//2053. Kth Distinct String in an Array
function kthDistinct(arr, k) {
  let distinctItems = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter((ele) => ele == arr[i]).length === 1) {
      distinctItems.push(arr[i]);
    }
  }
  return distinctItems.length >= k ? distinctItems[k - 1] : "";
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
