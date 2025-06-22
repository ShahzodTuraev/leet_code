// 819. Most Common Word
function mostCommonWord(paragraph, banned) {
  // 1. Normalize the paragraph
  const words = paragraph
    .toLowerCase()
    .replace(/[^a-z]/g, " ") // replace punctuation with space
    .split(/\s+/); // split by whitespace

  // 2. Create a Set of banned words for quick lookup
  const bannedSet = new Set(banned);

  // 3. Count word frequencies
  const freq = {};

  for (const word of words) {
    if (word && !bannedSet.has(word)) {
      freq[word] = (freq[word] || 0) + 1;
    }
  }

  // 4. Find the word with max frequency
  let maxWord = "";
  let maxCount = 0;

  for (const word in freq) {
    if (freq[word] > maxCount) {
      maxWord = word;
      maxCount = freq[word];
    }
  }

  return maxWord;
}

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);
