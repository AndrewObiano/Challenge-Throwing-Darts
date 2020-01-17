"use strict";

function scoreCalculator(arr) {
  // do work here
  let finalScore = 0;

  if (arr.length === 0) {
    finalScore = -1;
  }

  // Scoring functions
  arr.forEach(element => {
    if (element > 0 && element < 5) {
      finalScore += 10;
    } else if (element >= 5 && element <= 10) {
      finalScore += 5;
    }
  });

  // Bonus scoring function
  if (
    arr.every(element => {
      return element < 5;
    }) &&
    arr.length > 0
  ) {
    finalScore += 100;
  }
  return finalScore;
}

module.exports = scoreCalculator;
