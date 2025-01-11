// 2185. Counting Words With a Given Prefix
function prefixCount(words: string[], pref: string): number {
  return words.filter((ele) => ele.startsWith(pref)).length;
}
