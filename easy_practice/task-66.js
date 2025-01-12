// 2744. Find Maximum Number of String Pairs
function maximumNumberOfStringPairs(words) {
  let reverseCount = 0;
  for (let i = 0; i < words.length; i++) {
    let j = i + 1;
    while (j < words.length) {
      if (words[i].split("").reverse().join("") == words[j]) {
        reverseCount += 1;
        break;
      } else {
        j += 1;
      }
    }
  }
  return reverseCount;
}

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));
