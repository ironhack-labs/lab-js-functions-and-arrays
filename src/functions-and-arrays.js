// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
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

const findLongestWord = (arrayOfWords) => {
  let longestWord = "";
  if (arrayOfWords.length === 0) {
    return 0;
  }
  arrayOfWords.forEach((element) => {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  });
  return longestWord;
};

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach((number) => {
    total += number;
  });
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return 0;
  }
  const average = sumNumbers(arrayOfNumbers) / arrayOfNumbers.length;
  return average;
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

function doesWordExist(words2, searchedWord) {
  if (words2.length === 0) {
    return null;
  }
  let doesExist = false;
  words2.forEach((word) => {
    if (word === searchedWord) {
      doesExist = true;
    }
  });
  return doesExist;
}
