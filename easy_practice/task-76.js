// 191. Number of 1 Bits
function hammingWeight(n) {
  let num = n;
  let bits = 0;
  while (num !== 1) {
    num = Math.floor(num / 2);
    if (num % 2 === 1) {
      bits++;
    }
  }
  return n % 2 === 0 ? bits : bits + 1;
}

console.log(hammingWeight(8));
