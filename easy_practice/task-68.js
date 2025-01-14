function countCharacters(words, chars) {
  let lengthSum = 0;
  const splitter = (text) => {
    let textChars = [];
    let frequency = [];
    for (const letter of text) {
      if (!textChars.includes(letter)) {
        const freq = text.split("").filter((ele) => ele == letter).length;
        textChars.push(letter);
        frequency.push(freq);
      }
    }

    return [textChars, frequency];
  };
  for (const word of words) {
    if (
      splitter(word)[0].filter((ele) => !splitter(chars)[0].includes(ele))
        .length === 0 &&
      splitter(word)[1].filter(
        (ele, index) =>
          ele <=
          splitter(chars)[1][
            splitter(chars)[0].indexOf(splitter(word)[0][index]).length ==
              word.length
          ]
      )
    ) {
      lengthSum += word.length;
    }
  }
  return lengthSum;
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
