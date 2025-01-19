function isPrefixString(s, words) {
  let text = s;
  if (words.join("").startsWith(s)) {
    for (const word of words) {
      if (text.startsWith(word) && word.length <= text.length) {
        text = text.slice(word.length);
      }
    }
  }
  if (text.length == 0) {
    return true;
  }
  return words.join("").startsWith(s);
}

console.log(
  isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
);
