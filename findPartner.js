// Please do not change the name of this function
const findPartner = (students, directions) => {
  const studentsMovedOver = [];
  //Define x and y, where x is the column and y is the row
  let x = 0;
  let y = 0;
  for (let i = 0; i < directions.length; i++) {
    switch (directions[i]) {
      case "right":
        x += 1;
        if (x >= students[0].length) x = 0;
        studentsMovedOver.push(students[y][x]);
        break;
      case "left":
        x -= 1;
        if (x < 0) x = students[0].length - 1;
        studentsMovedOver.push(students[y][x]);
        break;
      case "up":
        if (y === 1) {
          y -= 1;
          studentsMovedOver.push(students[y][x]);
        }
        break;
      case "down":
        if (y === 0) {
          y += 1;
          studentsMovedOver.push(students[y][x]);
        }
    }
  }
  return studentsMovedOver;
};

module.exports = { findPartner };
