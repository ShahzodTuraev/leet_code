// 69. Sqrt(x)
// Math.round
function mySqrt(x: number): number {
  let result: number;
  let i: number = 0;

  do {
    i = i + 1;
    result = i;
  } while (i * i <= x);
  return result - 1;
}

console.log(mySqrt(8));
