// 1002. Find Common Characters
function commonChars(words) {
  let uniqueLetter = [];
  for (let i = 0; i < words[0].length; i++) {
    if (!uniqueLetter.includes(words[0][i])) {
      uniqueLetter.push(words[0][i]);
    }
  }

  let commonLetters = [];
  for (let i = 0; i < uniqueLetter.length; i++) {
    let j = 0;
    let repeatLetter = [];
    let minRepeatCount = 0;
    while (j < words.length) {
      if (words[j].includes(uniqueLetter[i])) {
        const repeatCount = words[j]
          .split("")
          .filter((ele) => ele == uniqueLetter[i]).length;
        j++;
        if (minRepeatCount !== 0) {
          if (minRepeatCount > repeatCount) {
            minRepeatCount = repeatCount;
          }
        } else {
          minRepeatCount = repeatCount;
        }
        repeatLetter.push(uniqueLetter[i]);
      } else {
        break;
      }
      if (repeatLetter.length == words.length) {
        commonLetters.push([repeatLetter[0], minRepeatCount]);
        repeatLetter = [];
        minRepeatCount = 0;
      }
    }
  }
  let result = [];
  for (const commonLetter of commonLetters) {
    Array(commonLetter[1])
      .fill(commonLetter[0])
      .map((ele) => result.push(ele));
  }
  return commonLetters;
}

console.log(commonChars(["cool", "lock", "cook"]));
