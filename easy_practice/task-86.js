// 3340. Check Balanced String
function isBalanced(num) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      evenSum += Number(num[i]);
    }
    if (i % 2 === 1) {
      oddSum += Number(num[i]);
    }
  }
  return oddSum === evenSum;
}

console.log(isBalanced("02123"));
