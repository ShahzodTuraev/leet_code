// 861. Score After Flipping Matrix
function matrixScore(grid) {
  let checkGrid = [];
  let toDirDecimal = 0;
  let toUnDirDecimal = 0;
  for (let i = 0; i < grid.length; i++) {
    grid[i];
    let toUnDir = grid[i].map((ele) => {
      return ele == 0 ? 1 : 0;
    });
    for (let j = 0; j < grid[i].length; j++) {
      toDirDecimal += grid[i][j] * Math.pow(2, grid[i].length - 1 - j);
      toUnDirDecimal += toUnDir[j] * Math.pow(2, grid[i].length - 1 - j);
    }
    if (Math.max(toDirDecimal, toUnDirDecimal) == toDirDecimal) {
      checkGrid.push(grid[i]);
    } else {
      checkGrid.push(toUnDir);
    }
    toDirDecimal = 0;
    toUnDirDecimal = 0;
  }
  let rotateResult = [];
  let verLine = [];
  for (let i = 0; i < checkGrid[0].length; i++) {
    for (let j = 0; j < checkGrid.length; j++) {
      verLine.push(checkGrid[j][i]);
    }
    if (verLine.filter((ele) => ele == 1).length >= verLine.length / 2) {
      rotateResult.push(verLine);
    } else {
      rotateResult.push(
        verLine.map((ele) => {
          return ele == 0 ? 1 : 0;
        })
      );
    }
    verLine = [];
  }
  let finalResult = 0;
  for (let i = 0; i < rotateResult[0].length; i++) {
    for (let j = 0; j < rotateResult.length; j++) {
      finalResult +=
        rotateResult[j][i] * Math.pow(2, rotateResult.length - 1 - j);
    }
  }
  return finalResult;
}
console.log(matrixScore([[0]]));
