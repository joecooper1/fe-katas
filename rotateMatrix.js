// Please do not change the name of this function
const rotateMatrix = (matrix) => {
  const newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    let subMatrix = matrix[i];
    for (let j = 0; j < subMatrix.length; j++) {
      if (i === 0) newArray.push([]);
      newArray[j].unshift(subMatrix[j]);
    }
  }
  return newArray;
};

module.exports = { rotateMatrix };
