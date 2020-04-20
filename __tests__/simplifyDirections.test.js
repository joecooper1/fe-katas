const { simplifyDirections } = require("../simplifyDirections");

describe("simplifyDirections()", () => {
  it("returns empty array if given empty array", () => {
    expect(simplifyDirections([])).toEqual([]);
  });
  it("returns array with one direction when given one direction", () => {
    expect(simplifyDirections(["NORTH"])).toEqual(["NORTH"]);
  });
  it("returns array with one direction when all others cancel out", () => {
    expect(
      simplifyDirections(["NORTH", "WEST", "SOUTH", "WEST", "EAST"])
    ).toEqual(["WEST"]);
  });
  it("works with any number of directions", () => {
    expect(
      simplifyDirections(["NORTH", "EAST", "SOUTH", "WEST", "NORTH", "NORTH"])
    ).toEqual(["NORTH", "NORTH"]);
  });
});
