// Please do not change the name of this function
const multiplicationTable = num => {
  if (num === 0) return [];

  const newArray = [];
  for (let i = 0; i < num + 1; i++) {
    const subArray = [i];
    for (let j = 1; j < num + 1; j++) {
      subArray.push(j * i);
    }
    newArray.push(subArray);
  }
  return newArray;
};

module.exports = { multiplicationTable };
