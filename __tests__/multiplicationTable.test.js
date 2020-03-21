const { multiplicationTable } = require("../multiplicationTable");

describe("multiplicationTable()", () => {
  it("returns an empty array when given 0", () => {
    expect(multiplicationTable(0)).toEqual([]);
  });
  it("returns an array of arrays when given a valid integer", () => {
    expect(multiplicationTable(1)).toEqual([
      [0, 0],
      [1, 1]
    ]);
  });
  it("returns an array of arrays when given a valid integer", () => {
    expect(multiplicationTable(3)).toEqual([
      [0, 0, 0, 0],
      [1, 1, 2, 3],
      [2, 2, 4, 6],
      [3, 3, 6, 9]
    ]);
  });
});
