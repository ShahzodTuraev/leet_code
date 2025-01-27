// 171. Excel Sheet Column Number
function titleToNumber(columnTitle) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let arr = [];
  let number = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    arr.push(letters.indexOf(columnTitle[i]) + 1);
    number +=
      (letters.indexOf(columnTitle[i]) + 1) *
      Math.pow(26, columnTitle.length - i - 1);
  }
  return number;
}

console.log(titleToNumber("DGR"));
