// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNum, secondNumber) {
  if (firstNum > secondNumber) {
    return firstNum;
  } else if (firstNum < secondNumber) {
    return secondNumber;
  } else {
    return firstNum || secondNumber;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arrayOfWords) {
  if (arrayOfWords.length === 0) {
    return null;
  }
  let iteration2Word = "";
  for (let i = 0; i < arrayOfWords.length; i++) {
    let arraylength = arrayOfWords[i];
    if (arraylength.length > iteration2Word.length) {
      iteration2Word = arraylength;
    }
  }
  return iteration2Word;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let total = 0;
  for (const number of array) {
    total += number;
  }
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayAverage) {
  if (arrayAverage.length === 0) {
    return 0;
  }
  return sumNumbers(arrayAverage) / arrayAverage.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, element) {
  if (array.length === 0) {
    return null;
  }
  for (const word of array) {
    if (word === element) {
      return true;
    }
  }
  return false;
}
