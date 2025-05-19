// 1550. Three Consecutive Odds
function threeConsecutiveOdds(arr) {
  let result = 0;
  let count = 0;
  for (const ele of arr) {
    ele % 2 === 1 ? count++ : (count = 0);
    if (count === 3) {
      result++;
    }
  }
  return result > 0;
}
