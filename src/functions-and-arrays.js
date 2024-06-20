// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) return number1;
  if (number2 > number1) return number2;
  if (number1 === number2) return number1;
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
  if (!array.length) return null;
  let longestWord = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    } else if (array[i].length === longestWord.length) {
      continue;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (!numbers.length) {
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

function doesWordExist(array, searchedWord) {
  if (!array.length) return null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchedWord) {
      return true;
    }
  }
  return false;
}
