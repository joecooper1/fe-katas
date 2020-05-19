const { findPartner } = require("../findPartner");

const students = [
  ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
  ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"],
];

describe("findPartner()", () => {
  it("finds your partner if given a single input", () => {
    expect(findPartner(students, ["right"])).toEqual(["Harriet"]);
  });
  it("finds your partners if given multiple inputs", () => {
    expect(findPartner(students, ["right", "right"])).toEqual([
      "Harriet",
      "Mitch",
    ]);
  });
  it("loops horizontally", () => {
    expect(findPartner(students, ["left"])).toEqual(["Kavita"]);
  });
  it("does not loop vertically", () => {
    expect(findPartner(students, ["right", "up", "up"])).toEqual(["Harriet"]);
  });
});
