// 7. Reverse Integer
function reverse(x) {
  const reverseNum = Math.abs(x).toString().split("").reverse("").join("") * 1;
  const result = x > 0 ? reverseNum : 0 - reverseNum;
  if (result >= -1 * Math.pow(2, 31) && result <= Math.pow(2, 31) - 1) {
    return result;
  } else {
    return 0;
  }
}

console.log(reverse(112));
