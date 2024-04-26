function plusOne(digits) {
  function plusOne(digits: number[]): number[] {
    let a: number[] = [];
    let n: number = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits.length == 1 && digits[0] == 9) {
        a.unshift(1);
      }
      if (n == 1 && digits[0] == 9) {
        a.unshift(1);
      }
      if (digits[i] < 9) {
        a.unshift(digits[i] + n);
        n = 0;
      } else {
        a.unshift(0);
        n = 1;
      }
    }

    return a;
  }
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
