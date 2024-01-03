/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
const originalColor = image[sr][sc];
  if (originalColor === color) return image; // 이미 같은 색이면 변경할 필요 없음

  const fillAdjacentCells = (row, col) => {
    // 범위를 벗어나거나 원래 색상과 다른 경우 반환
    if (row < 0 || row >= image.length || col < 0 || col >= image[row].length || image[row][col] !== originalColor) {
      return;
    }

    image[row][col] = color; // 색상 변경
    // 상하좌우에 대해 재귀적으로 함수 호출
    fillAdjacentCells(row - 1, col);
    fillAdjacentCells(row + 1, col);
    fillAdjacentCells(row, col - 1);
    fillAdjacentCells(row, col + 1);
  };

  fillAdjacentCells(sr, sc); // 시작점에서 재귀 호출
  return image;
};