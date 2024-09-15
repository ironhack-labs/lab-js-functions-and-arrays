// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// console.log(maxOfTwoNumbers(10, 3));

// Iteration 2 | Find the Longest Word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];

function findLongestWord(arr) {
  if (!arr.length) return 0;
  let longestWorld = '';
  arr.forEach((x) =>
    x.length > longestWorld.length ? (longestWorld = x) : longestWorld
  );
  return longestWorld;
}

// console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  if (!arr.length) return 0;
  let sum = 0;
  arr.forEach((x) => (sum += x));
  return sum;
}

// console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (!arr.length) return 0;
  let sum = 0;
  arr.forEach((x) => (sum += x));
  return sum / arr.length;
}

// console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements
const words2 = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

function doesWordExist(arr, word) {
  if (!arr.length) return null;
  const arrayToLowerCase = arr.map((x) => x.toLowerCase());
  const wordToLowerCase = word.toLowerCase();
  return arrayToLowerCase.includes(wordToLowerCase);
}

// console.log(doesWordExist(words2, 'TRUTH'));
