// 857. Minimum Cost to Hire K Workers
// TIME LIMIT ERROR FOR THIS CASE:
function mincostToHireWorkers(quality, wage, k) {
  let acum = [];
  for (let i = 0; i < quality.length; i++) {
    let newWageArr = quality.map((ele, index) => {
      const proportion = (ele / quality[i]) * wage[i];
      return proportion >= wage[index] ? proportion : 0;
    });
    const sortArr = newWageArr.filter((ele) => ele !== 0).sort((a, b) => a - b);
    if (sortArr.length >= k) {
      acum.push(sortArr.slice(0, k).reduce((a, b) => a + b, 0));
    }
  }
  return acum.sort((a, b) => a - b)[0];
}

console.log(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2));
