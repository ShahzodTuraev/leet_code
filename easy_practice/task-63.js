// 3042. Count Prefix and Suffix Pairs I
function countPrefixSuffixPairs(words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      if (
        i < j &&
        words[j].includes(words[i]) &&
        words[j].indexOf(words[i]) === 0 &&
        words[j].lastIndexOf(words[i]) == words[j].length - words[i].length
      ) {
        count++;
      }
    }
  }
  return count;
}
