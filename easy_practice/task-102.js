// 415. Add Strings
function addStrings(num1, num2) {
  const differ = Math.abs(num1.length - num2.length);
  const fillZero = new Array(differ).fill("0").join("");
  const maxLengNum = num1.length >= num2.length ? num1 : num2;
  const minLengNum = maxLengNum === num1 ? fillZero + num2 : fillZero + num1;
  let remain = 0;
  let sum = "";
  for (let i = maxLengNum.length - 1; i >= 0; i--) {
    const digitSum = Number(maxLengNum[i]) + Number(minLengNum[i]) + remain;
    remain = 0;
    if (digitSum < 10) {
      sum = digitSum.toString() + sum;
    } else {
      sum = (digitSum - 10).toString() + sum;
      remain++;
    }
  }
  return remain > 0 ? remain.toString() + sum : sum;
}

console.log(addStrings("99", "1"));
