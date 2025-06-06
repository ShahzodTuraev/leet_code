// 2427. Number of Common Factors
function commonFactors(a, b) {
  const minNum = Math.min(a, b);
  let comFac = 0;
  for (let i = 1; i <= minNum; i++) {
    if (a % i === 0 && b % i === 0) comFac++;
  }
  return comFac;
}

console.log(commonFactors(12, 7));
