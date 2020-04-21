// Please do not change the name of this function
const fillSquare = (arr) => {
  let squareSize = arr.length;
  const maxSubArrLength = (() => {
    if (arr.length > 0) {
      return [...arr].sort((a, b) => b.length - a.length)[0].length;
    } else return 0;
  })();
  if (maxSubArrLength > arr.length) squareSize = maxSubArrLength;

  const newArr = [];
  for (let i = 0; i < squareSize; i++) {
    newArr.push([]);
    for (let j = 0; j < squareSize; j++) {
      if (arr[i]) {
        if (arr[i][j]) {
          newArr[i].push(arr[i][j]);
        } else {
          newArr[i].push(null);
        }
      } else {
        newArr[i].push(null);
      }
    }
  }

  return newArr;
};

module.exports = { fillSquare };
