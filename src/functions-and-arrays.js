// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a || b;
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

function findLongestWord(arr) {
  let result = arr[0];
  if (arr.length === 0) {
    return 0;
  }
  for (element of arr) {
    if (element.length > result.length) {
      result = element;
    }
  }
  return result;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (element of arr) {
    sum += element;
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (element of arr) {
    sum += element;
  }
  return sum / arr.length;
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
  if (arr.length === 0) {
    return null;
  }
  for (element in arr) {
    if (arr.includes(word)) {
      return true;
    } else {
      return false;
    }
  }
}
