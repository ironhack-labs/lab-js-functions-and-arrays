/*
// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  if (a < b) {
    return b;
  }
  if (a === b) return a, b;
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
  let longestWord = "";
  if (words.length === 0) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let total = 0;
    avg = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    avg = total / arr.length;
  }
  return avg;
}
*/
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
  if (arr.length == 0) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === word) {
        return true;
      }
    }
    return false;
  }
}
