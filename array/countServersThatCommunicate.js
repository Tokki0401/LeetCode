/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;

  const rowCounts = new Array(rows).fill(0);
  const colCounts = new Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 1) {
              rowCounts[i]++;
              colCounts[j]++;
          }
      }
  }

  let result = 0;

  for (let i = 0; i < rows; i++) {
      if (rowCounts[i] > 1) {
          result += rowCounts[i];
      } else if (rowCounts[i] === 1) {
          for (let j = 0; j < cols; j++) {
              if (grid[i][j] === 1 && colCounts[j] > 1) {
                  result++;
              }
          }
      }
  }

  return result;
};