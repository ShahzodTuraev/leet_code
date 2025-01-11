// 2114. Maximum Number of Words Found in Sentences
function mostWordsFound(sentences) {
  const lengthList = sentences.map((ele) => ele.split(" ").length);
  return Math.max(...lengthList);
}

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
