// 941. Valid Mountain Array
function validMountainArray(arr) {
  if (arr.length > 2) {
    const upArr = arr.slice(0, arr.indexOf(Math.max(...arr)) + 1);
    const margeUpArr = upArr
      .map((ele, index) => upArr[index + 1] - ele)
      .slice(0, upArr.length - 1)
      .every((ele) => ele > 0);
    const downArr = arr.slice(arr.indexOf(Math.max(...arr)), arr.length);
    const margeDownArr = downArr
      .map((ele, index) => downArr[index + 1] - ele)
      .slice(0, downArr.length - 1)
      .every((ele) => ele < 0);
    return margeUpArr && margeDownArr && downArr.length > 1 && upArr.length > 1;
  } else {
    return false;
  }
}

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
