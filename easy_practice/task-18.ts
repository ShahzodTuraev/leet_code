// 100296. Permutation Difference between Two Strings

function findPermutationDifference(s: string, t: string): number {
  let sum: number = 0;
  for (let i = 0; i < s.length; i++) {
    sum += Math.abs(i - t.indexOf(s[i]));
  }
  return sum;
}

console.log(findPermutationDifference("abc", "bac"));
