// 2418. Sort the People
function sortPeople(names, heights) {
  const innerArr = names
    .map((ele, index) => [ele, heights[index]])
    .sort((a, b) => b[1] - a[1]);

  return innerArr.map((ele) => ele[0]);
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
