// 2373. Largest Local Values in a Matrix
function largestLocal(grid: number[][]): number[][] {
  let allSum = [];
  let lineSum = [];
  for (let i: number = 2; i < grid.length; i++) {
    for (let j: number = 0; j < grid.length - 2; j++) {
      lineSum.push(
        Math.max(
          ...grid[i - 2]
            .slice(j, j + 3)
            .concat(grid[i - 1].slice(j, j + 3).concat(grid[i].slice(j, j + 3)))
        )
      );
    }
    allSum.push(lineSum);
    lineSum = [];
  }
  return allSum;
}

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
