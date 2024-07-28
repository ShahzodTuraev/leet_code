// 463. Island Perimeter
function islandPerimeter(grid) {
  let comulator = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        comulator = comulator + 4;
      }

      if (j > 0 && grid[i][j] == 1 && grid[i][j - 1] == 1) {
        comulator--;
      }
      if (j < grid[i].length - 1 && grid[i][j] == 1 && grid[i][j + 1] == 1) {
        comulator--;
      }
      if (i > 0 && grid[i][j] == 1 && grid[i - 1][j] == 1) {
        comulator--;
      }
      if (i < grid.length - 1 && grid[i][j] == 1 && grid[i + 1][j] == 1) {
        comulator--;
      }
    }
  }
  return comulator;
}

console.log(islandPerimeter([[1, 0]]));
