// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(5, 6));

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
  let longestWord = arr[0];

  if (arr.length === 0) {
    return null;
  }
  for (let i = 1; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let total = 0;
  if (!arr.length) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (!arr.length) {
    return 0;
  }
  let average = sumNumbers(arr) / arr.length;

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

function doesWordExist(word, wordSearched) {
  if (!word.length) {
    return null;
  }
  for (let i = 0; i < word.length; i++) {
    if (wordSearched === word[i]) {
      return true;
    }
  }
  return false;
}
console.log(doesWordExist(words2, "disobedience"));
