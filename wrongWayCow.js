// Please do not change the name of this function
const wrongWayCow = (field) => {
  const fieldArray = field.split("\n");
  //Set numbers of cows/wocs and coords of last of each
  let cowCoords = [0, []];
  let wocCoords = [0, []];
  for (let i = 0; i < fieldArray.length; i++) {
    let fieldRow = fieldArray[i].match(/.{1,3}/g);
    fieldArray[i] = fieldRow;
    for (let j = 0; j < fieldRow.length; j++) {
      if (fieldRow[j] === "woc") {
        wocCoords[0] += 1;
        wocCoords[1] = [i, j];
      };
      if (fieldRow[j] === "cow") {
        cowCoords[0] += 1;
        cowCoords[1] = [i, j];
      };
    }
  }
  //If number of cows and wocs are both zero return empty array
  if (cowCoords[0] === 0 || wocCoords[0] === 0) return [];
  //Else return coords of type with least occurences
  if (cowCoords[0] > wocCoords[0]) return wocCoords[1];
  else return cowCoords[1];
};

module.exports = { wrongWayCow };
