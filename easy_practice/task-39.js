// 520. Detect Capital
function detectCapitalUse(word) {
  if (word.toUpperCase() === word || word.toLowerCase() === word) {
    return true;
  }
  return (
    word[0] === word[0].toUpperCase() &&
    word.slice(1, word.length) === word.slice(1, word.length).toLowerCase()
  );
}
console.log(detectCapitalUse("KePlo"));
