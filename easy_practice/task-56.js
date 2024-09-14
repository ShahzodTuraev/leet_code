// 2404. Most Frequent Even Element
function mostFrequentEven(nums) {
  const evenList = nums.filter((ele) => ele % 2 == 0).sort((a, b) => a - b);
  let allArr = [];
  let singleArr = [];
  if (evenList.length > 0) {
    for (let i = 0; i < evenList.length; i++) {
      if (singleArr.length === 0) {
        singleArr.push(evenList[i]);
      } else {
        if (singleArr.includes(evenList[i])) {
          singleArr.push(evenList[i]);
        } else {
          allArr.push(singleArr);
          singleArr = [];
          singleArr.push(evenList[i]);
        }
      }
    }
    if (singleArr.length > 0) allArr.push(singleArr);
    const lengthArr = allArr.map((ele) => ele.length);
    return allArr[lengthArr.indexOf(Math.max(...lengthArr))][0];
  } else {
    return -1;
  }
}
console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
