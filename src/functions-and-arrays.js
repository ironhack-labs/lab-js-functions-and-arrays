// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
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

function findLongestWord(arr) {
  if (!Array.isArray(arr)) {
    return "You have to pass a Array to this function.";
  }

  if (arr.length === 0) {
    return null;
  }

  let longestWord = "";

  arr.forEach(function (el) {
    if (el.length > longestWord.length) {
      longestWord = el;
    }
  });

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  if (!Array.isArray(arr)) {
    return "You have to pass a Array to this function.";
  }

  let result = 0;
  arr.forEach(function (el) {
    result += el;
  });
  return result;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (!Array.isArray(arr)) {
    return "You have to pass a Array to this function.";
  }

  if (arr.length === 0) {
    return 0;
  }

  let result = 0;
  arr.forEach(function (el) {
    result += el;
  });
  return result / arr.length;
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

function doesWordExist(arr, word) {
  if (!Array.isArray(arr)) {
    return "You have to pass a Array to this function.";
  }

  if (arr.length === 0) {
    return null;
  }

  let result = false;
  arr.forEach(function (el) {
    if (el === word) {
      result = true;
    }
  });
  return result;
}
