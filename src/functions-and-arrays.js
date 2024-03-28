// Iteration 1 | Find the Maximum
let a;
let b;
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
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
  if (words.length === 1) {
    return words[0];
  }
  for (let i = 0; i <= words.length - 1; i++) {
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
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return sumNumbers(numbers) / numbers.length;
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

function doesWordExist(words2, wordToFind) {
  if (words2.length === 0) {
    return null;
  }
  for (let i = 0; i <= words2.length; i++) {
    if (wordToFind === words2[i]) {
      return true;
    }
  }
  return false;
}
