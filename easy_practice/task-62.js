// 1408. String Matching in an Array
function stringMatching(words) {
  let result = [];
  for (const word of words) {
    for (const wordItem of words) {
      if (
        word.length <= wordItem.length &&
        words.indexOf(word) !== words.indexOf(wordItem)
      ) {
        if (wordItem.includes(word) && !result.includes(word)) {
          result.push(word);
        }
      }
    }
  }
  return result;
}

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
