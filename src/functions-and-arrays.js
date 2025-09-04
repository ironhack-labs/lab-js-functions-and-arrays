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
  if (arr.length == 0) return null;

  let maxLength = 0;
  let theLongestInd = -1;

  arr.forEach((el, ind) => {
    if (el.length > maxLength) {
      maxLength = el.length;
      theLongestInd = ind;
    }
  });
  return arr[theLongestInd];
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length === 0) return 0;
  return sumNumbers(arr) / arr.length;
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

function doesWordExist(array, word) {
  if (array.length === 0) return null;

  let doesExist = false;
  array.forEach((el) => {
    if (el === word) doesExist = true;
  });
  return doesExist;
}
