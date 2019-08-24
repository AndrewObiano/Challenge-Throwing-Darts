// write tests here
const chai = require("chai");
const expect = chai.expect;
const scoreCalculator = require("../index.js");

describe("scoreCalculator", () => {
  it("should be a function", () => {
    expect(scoreCalculator).to.be.a("function");
  });

  it("should return a number", () => {
    let testArray = [1, 5, 15];
    let finalScore = scoreCalculator(testArray);
    expect(finalScore).to.be.a("number");
  });

  it("should calculate dart scores correctly", () => {
    let array1 = [1, 5, 15];
    let array2 = [15, 20, 30];
    let array3 = [];
    let finalScore1 = scoreCalculator(array1);
    let finalScore2 = scoreCalculator(array2);
    let finalScore3 = scoreCalculator(array3);
    expect(finalScore1).to.equal(15);
    expect(finalScore2).to.equal(0);
    expect(finalScore3).to.equal(-1);
  });

  it("should give a bonus 100 points appropriately", () => {
    let array = [1, 2, 1, 4, 4, 2];
    let finalScore = scoreCalculator(array);
    expect(finalScore).to.equal(160);
  });
});
