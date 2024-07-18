// 342. Power of Four
function isPowerOfFour(n) {
  if (n > 0) {
    return Number.isInteger(Math.log(n) / Math.log(4));
  }
}
console.log(isPowerOfFour(14));
