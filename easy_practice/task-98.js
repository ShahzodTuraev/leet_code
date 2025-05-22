// 1323. Maximum 69 Number
function maximum69Number(num) {
  const numStr = num.toString().split("");
  const newNum = [];
  let firstSix = true;
  for (const digit of numStr) {
    if (firstSix && digit === "6") {
      newNum.push("9"), (firstSix = false);
    } else {
      newNum.push(digit);
    }
  }
  return +newNum.join("");
}

console.log(maximum69Number(9999));
