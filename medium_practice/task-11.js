// 539. Minimum Time Difference
function findMinDifference(timePoints) {
  const onlyMinList = timePoints
    .map((ele) => Number(ele.split(":")[0]) * 60 + Number(ele.split(":")[1]))
    .sort((a, b) => a - b);
  const difList = onlyMinList.map((ele, index) => {
    if (index < onlyMinList.length - 1) {
      return onlyMinList[index + 1] - ele >= 0
        ? onlyMinList[index + 1] - ele
        : 1440 + onlyMinList[index + 1] - ele;
    } else {
      return onlyMinList[0] - ele >= 0
        ? onlyMinList[0] - ele
        : 1440 + onlyMinList[0] - ele;
    }
  });
  return Math.min(...difList);
}

console.log(findMinDifference(["23:59", "00:00"]));
