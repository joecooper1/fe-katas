// Please do not change the name of this function
const binarySearch = (num, arr, pagesChecked = 0) => {
  const indexToCheck = Math.floor(arr.length / 2);
  const numToCheck = arr[indexToCheck];

  if (numToCheck === num) {
    return indexToCheck + pagesChecked;
  } else if (numToCheck > num) {
    return binarySearch(num, arr.slice(0, indexToCheck), pagesChecked);
  } else if (num > numToCheck) {
    return binarySearch(
      num,
      arr.slice(indexToCheck + 1, arr.length),
      pagesChecked + indexToCheck + 1
    );
  }
};

module.exports = { binarySearch };
