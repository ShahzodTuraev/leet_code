// 2085. Count Common Words With One Occurrence
function countWords(words1, words2) {
  const maxWords = words1.length >= words2.length ? words1 : words2;
  const minWords = words1.length < words2.length ? words1 : words2;
  let count = 0;
  for (const minWord of minWords) {
    if (
      maxWords.includes(minWord) &&
      minWords.filter((ele) => ele === minWord).length === 1 &&
      maxWords.filter((ele) => ele === minWord).length === 1
    ) {
      count++;
    }
  }
  return count;
}
console.log(
  countWords(
    ["leetcode", "is", "amazing", "as", "is"],
    ["amazing", "leetcode", "is"]
  )
);
