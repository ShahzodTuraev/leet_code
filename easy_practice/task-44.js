// 500. Keyboard Row
function findWords(words) {
  const lines = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const includeArr = words.map((ele) => {
    return lines
      .map((item) => item.includes(ele.toLowerCase()[0]))
      .indexOf(true);
  });
  return includeArr
    .map((ele, index) => {
      return words[index]
        .split("")
        .map((letter) => lines[ele].includes(letter.toLowerCase()))
        .includes(false);
    })
    .map((ele, index) => (ele == false ? words[index] : 0))
    .filter((ele) => ele !== 0);
}
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
