module.exports = function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j of matrix[i]) {
      if (j === "^^") count++;
    }
  }
  return count;
};
