function reversePrefix(word: string, ch: string): string {
  const baseText: string = word.slice(0, word.indexOf(ch) + 1);
  const reversedText: string = baseText.split("").reverse().join("");
  return reversedText.concat(word.slice(word.indexOf(ch) + 1));
}
