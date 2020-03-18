const { rgbaModifier } = require("../rgbaModifier");

describe("rgbaModifier()", () => {
  it("does not change rgb values when arguments given are zero", () => {
    // first test here
    expect(rgbaModifier("rgba(100,100,100,0.6)", 0, 0.6)).toBe(
      "rgba(100,100,100,0.6)"
    );
  });
  it("changes the opacity to match the new value", () => {
    expect(rgbaModifier("rgba(100,100,100,0.3)", 0, 0.7)).toBe(
      "rgba(100,100,100,0.7)"
    );
  });
  it("changes the rgb values by the percentage", () => {
    expect(rgbaModifier("rgba(100,10,1,0.3)", 20, 0.7)).toBe(
      "rgba(120,12,1,0.7)"
    );
    expect(rgbaModifier("rgba(100,10,1,0.3)", -20, 0.7)).toBe(
      "rgba(80,8,1,0.7)"
    );
  });
  it("changes values too low or too high to be the max or min allowed", () => {
    expect(rgbaModifier("rgba(100,10,1,0.3)", 20, 5)).toBe("rgba(120,12,1,1)");
    expect(rgbaModifier("rgba(100,10,1,0.3)", -20, -0.3)).toBe(
      "rgba(80,8,1,0)"
    );
    expect(rgbaModifier("rgba(100,10,1,0.3)", 500, 0.5)).toBe(
      "rgba(255,60,6,0.5)"
    );
    expect(rgbaModifier("rgba(100,10,1,0.3)", -200, 0.5)).toBe(
      "rgba(0,0,0,0.5)"
    );
  });
});
