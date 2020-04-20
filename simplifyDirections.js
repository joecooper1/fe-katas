// Please do not change the name of this function
const simplifyDirections = (directions) => {
  const opposites = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  const newDirections = [];

  for (let direction in opposites) {
    let numberOfStepsInDirection =
      directions.filter((step) => step === direction).length -
      directions.filter((step) => step === opposites[direction]).length;
    if (numberOfStepsInDirection > 0) {
      for (let i = 0; i < numberOfStepsInDirection; i++) {
        newDirections.push(direction);
      }
    }
  }

  return newDirections;
};

module.exports = { simplifyDirections };
