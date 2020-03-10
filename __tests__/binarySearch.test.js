const { binarySearch } = require("../binarySearch");

describe("binarySearch()", () => {
  it("uses binary search to find index of a number in a small, sorted array", () => {
    expect(binarySearch(1, [1, 2, 3, 4, 5])).toBe(0);
    expect(binarySearch(4, [1, 2, 3, 4, 5])).toBe(3);
    expect(
      binarySearch(14, [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ])
    ).toBe(13);
  });
  it("works on arrays of non-consecutive numbers", () => {
    expect(binarySearch(7, [2, 4, 5, 7, 9, 12, 11, 13, 189])).toBe(3);
  });
});
