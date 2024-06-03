// 2595. Number of Even and Odd Bits
function evenOddBit(n) {
  const newNum = Number(n).toString(2);
  let even = 0;
  let odd = 0;
  for (let i = 0; i < newNum.length; i++) {
    if (newNum[i] == "1" && i % 2 == 0) {
      even++;
    }
    if (newNum[i] == "1" && i % 2 == 1) {
      odd++;
    }
  }

  return [even, odd];
}

console.log(evenOddBit(2));
