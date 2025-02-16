// 3099. Harshad Number
function sumOfTheDigitsOfHarshadNumber(x) {
  const sumDigits = x
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  return x % sumDigits === 0 ? sumDigits : -1;
}

console.log(sumOfTheDigitsOfHarshadNumber(18));
