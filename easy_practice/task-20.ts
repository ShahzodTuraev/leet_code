// 1380. Lucky Numbers in a Matrix
function luckyNumbers(matrix: number[][]): number[] {
  const hMax: number[] = matrix.map((ele) => Math.min(...ele));
  let vNums: number[] = [];
  let luckyNumbers: number[] = [];
  for (let i: number = 0; i < hMax.length; i++) {
    const index: number = matrix[i].indexOf(hMax[i]);
    for (let j: number = 0; j < matrix.length; j++) {
      vNums.push(matrix[j][index]);
    }
    if (Math.max(...vNums) == hMax[i]) {
      luckyNumbers.push(hMax[i]);
    }
    vNums = [];
  }
  return luckyNumbers;
}
console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
);
