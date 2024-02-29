// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
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

function findLongestWord(array) {
  let tmp = array[0];
  if (array != 0) {
    for (let word in array) {
      if (array[word].length > tmp.length) {
        tmp = array[word];
      }
    }
    return tmp;
  } else {
    return 0;
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let total = 0;
  for (let number in array) {
    total += array[number];
  }
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array != 0) {
    return sumNumbers(array) / array.length;
  } else {
    return 0;
  }
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
  if (array != 0) {
    for (let element in array) {
      if (array.includes(word)) {
        return true;
      }
      return false;
    }
  }
  return null;
}
