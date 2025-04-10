// 3498. Reverse Degree of a String
function reverseDegree(s) {
  // for generating alphabet
  // let alphabet = new Map()
  // let value = 26
  // let total = 0
  // for (let i = 97; i <= 122; i++) {
  //     alphabet.set(String.fromCharCode(i), value--);
  // }
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const letterPosition = 26 - letters.indexOf(s[i]);
    sum += letterPosition * (i + 1);
  }
  return sum;
}

console.log(reverseDegree("aa"));
