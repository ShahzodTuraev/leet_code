// 1137. N-th Tribonacci Number
function tribonacci(n: number): number {
  if (n == 0) {
    return 0;
  } else if (n == 1 || n == 2) {
    return 1;
  } else {
    let a: number[] = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      a.push(a[i - 3] + a[i - 2] + a[i - 1]);
    }
    return a[a.length - 1];
  }
}
