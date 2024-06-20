// Iteration 1 | Find the Maximum
const maxOfTwoNumbers = (num1, num2) => (num1 > num2 ? num1 : num2);

console.log(maxOfTwoNumbers(3, 5));

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

const findLongestWord = (words) =>
  words.sort((a, b) => b.length - a.length)[0] || null;

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (numbers) => numbers.reduce((a, b) => a + b, 0);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = (numbers) =>
  numbers.length ? sumNumbers(numbers) / numbers.length : 0;

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

const doesWordExist = (words, word) =>
  words.length ? words.includes(word) : null;
