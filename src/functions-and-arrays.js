// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) return a;
  return b;
}
// console.log(maxOfTwoNumbers(4,3))

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
  let longestWord = '';
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
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

function averageNumbers(numbers2) {
  let sum = sumNumbers(numbers2);
  if (sum === 0) return 0;
  return sum / numbers2.length;
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

function doesWordExist(arr, words2) {
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === words2) return true;
  }
  return false;
}
