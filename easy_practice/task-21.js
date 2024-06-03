function addBinary(a, b) {
  const toDecimal = (string) => {
    let biNum = 0;
    let powReverse = 0;
    for (let i = string.length - 1; i >= 0; i--) {
      biNum += string[i] * Math.pow(2, powReverse);
      powReverse++;
    }
    return biNum;
  };
  //   return toDecimal(a) + toDecimal(b);

  let i = 7;
  let res = [];
  while (i / 2 < 1) {
    res.push(i % 2);
  }

  return res;
}

console.log(addBinary("1101001", "1111110"));
