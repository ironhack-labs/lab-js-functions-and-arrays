// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

// Iteration 2 | Find the Longest Word

const wordParam = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(wordParam) {
  if (wordParam === null || wordParam.length === 0) {
    return 0;
  }

  let longestWord = "";

  for (let i = 0; i < wordParam.length; i++) {
    if (longestWord.length < wordParam[i].length) {
      longestWord = wordParam[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers === null || numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const param = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(param) {
  if (param === null || param.length === 0) {
    return 0;
  }

  let counter = 0;

  for (let i = 0; i < param.length; i++) {
    counter += param[i];
  }

  return counter / param.length;
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

let searchTerm = "machine";

function doesWordExist(words2, searchTerm) {
  if (words2 === null || words2.length === 0) {
    return null;
  }

  for (let i = 0; i < words2.length; i++) {
    if (words2[i] === searchTerm) {
      return true;
    }
  }
  return false;
}
