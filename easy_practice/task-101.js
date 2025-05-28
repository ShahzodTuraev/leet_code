// 1952. Three Divisors
function isThree(n) {
  let checkNum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      checkNum++;
    }
    if (checkNum > 3) {
      break;
    }
  }
  return checkNum === 3;
}
console.log(isThree());
