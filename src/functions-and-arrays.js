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

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i];
  }
  return longest;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(calculate) {
  if (calculate.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < calculate.length; i++) {
    sum += calculate[i];
  }
  return sum / calculate.length;
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

function doesWordExist(calculate2) {
  if (calculate2.length === 0) {
    return null;
  }
  for (let i = 0; i < calculate2.length; i++) {
    if ((calculate2.includes = [i])) return true;
  }
  return false;
}
