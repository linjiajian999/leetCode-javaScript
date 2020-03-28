/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length
  const resArr = []
  obstacleGrid[0].reduce((preValue, curValue, index) => {
    preValue += curValue
    resArr[index] = preValue > 0 ? 0 : 1
    return preValue
  }, 0)
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      resArr[0] = 0
    }
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        resArr[j] = 0
      } else {
        resArr[j] += resArr[j-1]
      }
    }
  }
  return resArr[n-1]
};
uniquePathsWithObstacles([[0, 1]])