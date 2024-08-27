// 1492. The kth Factor of n
function kthFactor(n, k) {
  let i = 1;
  let deviders = [];
  while (i <= n && deviders.length <= k) {
    if (n % i == 0) {
      deviders.push(i);
    }
    i++;
  }
  if (deviders.length >= k) {
    return deviders[k - 1];
  } else {
    return -1;
  }
}

console.log(kthFactor(4, 4));
