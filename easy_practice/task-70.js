// 2586. Count the Number of Vowel Strings in Range
function vowelStrings(words, left, right) {
  let count = 0;

  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = left; i <= right; i++) {
    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(words[i][words[i].length - 1])
    ) {
      count++;
    }
  }
  return count;
}

console.log(vowelStrings(["are", "amy", "u"], 0, 2));

// console.log(['u']);

// vowels.includes(words[i][0]) &&
// vowels.includes(words[i][words.length - 1])
