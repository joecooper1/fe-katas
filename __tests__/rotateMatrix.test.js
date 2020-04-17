const { rotateMatrix } = require("../rotateMatrix");

describe("rotateMatrix()", () => {
  it("when given a single array with a single value, returns that same array", () => {
    const matrix = [[1]];
    const output = [[1]];
    expect(rotateMatrix(matrix)).toEqual(output);
  });
  it("works for small, square arrays", () => {
    const matrix = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];
    const output = [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ];
    expect(rotateMatrix(matrix)).toEqual(output);
  });
  it("when for rectangular arrays", () => {
    const matrix = [
      [1, 2, 3, 5, 10, 1],
      [3, 3, 1, 1, 3, 6],
      [1, 6, 3, 2, 2, 1],
    ];
    const output = [
      [1, 3, 1],
      [6, 3, 2],
      [3, 1, 3],
      [2, 1, 5],
      [2, 3, 10],
      [1, 6, 1],
    ];
    expect(rotateMatrix(matrix)).toEqual(output);
  });
});
