// 476. Number Complement
function findComplement(num) {
  let number = num;
  let arr = [];
  do {
    arr.push(number - Math.floor(number / 2) * 2);
    number = Math.floor(number / 2);
  } while (Math.floor(number / 2) !== 0);
  if (num > 1) arr.push(number);
  return arr
    .reverse()
    .map((ele, index, array) =>
      ele == 0 ? Math.pow(2, array.length - index - 1) : 0
    )
    .reduce((a, b) => a + b, 0);
}

console.log(findComplement(2));
