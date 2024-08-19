// 1684. Count the Number of Consistent Strings
function countConsistentStrings(allowed, words) {
  return words
    .map((word) => {
      return word.split("").every((ele) => allowed.includes(ele));
    })
    .filter((ele) => ele == true).length;
}
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
