// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  if (num1 < num2) {
    return num2;
  }
  return num1;
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

function findLongestWord(words) {
  let longestWord;
  if (words.length == 0) {
    return null;
  }

  words.forEach((word) => {
    if (!longestWord) {
      longestWord = word;
    } else {
      if (longestWord.length < word.length) {
        longestWord = word;
      }
    }
  });

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sumNumbers = 0;
  numbers.forEach((number) => {
    sumNumbers += number;
  });

  return sumNumbers;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  let sumNumbers = 0;
  if (numbers.length == 0) {
    return null;
  }
  let countNumbersArray = numbers.length;
  numbers.forEach((number) => {
    sumNumbers += number;
  });

  return sumNumbers / countNumbersArray;
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

function doesWordExist(words2, word) {
  if (words2.length == 0) {
    return null;
  }
  for (let wordElement of words2) {
    if (wordElement === word) {
      return true;
    }
  }

  return false;
}
