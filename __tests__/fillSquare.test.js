const { fillSquare } = require("../fillSquare");

describe("fillSquare()", () => {
  it("returns empty array when given empty array", () => {
    const square = [];
    const expected = [];
    expect(fillSquare(square)).toEqual(expected);
  });
  it("returns same array when given a complete square", () => {
    const square = [
      [1, 2],
      [1, 2],
    ];
    const expected = [
      [1, 2],
      [1, 2],
    ];
    expect(fillSquare(square)).toEqual(expected);
  });
  it("fills in empty spaces with null", () => {
    const square = [[1, 2, 3], [1, 2], [1]];
    const expected = [
      [1, 2, 3],
      [1, 2, null],
      [1, null, null],
    ];
    expect(fillSquare(square)).toEqual(expected);
  });
  it("does not mutate", () => {
    const square = [[1, 2, 3], [1, 2, 3, 4, 5, 6], [1]];
    const expected = [
      [1, 2, 3, null, null, null],
      [1, 2, 3, 4, 5, 6],
      [1, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ];
    expect(fillSquare(square)).toEqual(expected);
    expect(square).toEqual([[1, 2, 3], [1, 2, 3, 4, 5, 6], [1]]);
  });
  it("works for large arrays", () => {
    const square = [[1, 2, 3], [1, 2, 3], [1], [], [1, 2, 3], [1]];
    const expected = [
      [1, 2, 3, null, null, null],
      [1, 2, 3, null, null, null],
      [1, null, null, null, null, null],
      [null, null, null, null, null, null],
      [1, 2, 3, null, null, null],
      [1, null, null, null, null, null],
    ];
    expect(fillSquare(square)).toEqual(expected);
  });
});
