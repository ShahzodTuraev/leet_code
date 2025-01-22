// 599. Minimum Index Sum of Two Lists
function findRestaurant(list1, list2) {
  const minLengthList = list1.length <= list2.length ? list1 : list2;
  const otherList = list1.length <= list2.length ? list2 : list1;
  let minIndex = 0;
  let arrList = [];
  for (let i = 0; i < minLengthList.length; i++) {
    if (otherList.includes(minLengthList[i])) {
      if (
        arrList.length > 0 &&
        i + otherList.indexOf(minLengthList[i]) === minIndex
      ) {
        arrList.push(minLengthList[i]);
      }
      if (
        arrList.length > 0 &&
        minIndex > i + otherList.indexOf(minLengthList[i])
      ) {
        minIndex = i + otherList.indexOf(minLengthList[i]);
        arrList = [minLengthList[i]];
      }
      if (arrList.length === 0) {
        minIndex = i + otherList.indexOf(minLengthList[i]);
        arrList.push(minLengthList[i]);
      }
    }
  }
  return arrList;
}

console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]));
