// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number1 < number2) {
    return number2;
  } else {
    return number1;
  }
}
console.log(maxOfTwoNumbers(10, 9));

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

let longestWord = [];
function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sum = 0;
function sumNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0;
  }
  sum = 0;
  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }
  return sum / numbers2.length;
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

function doesWordExist(words2, wordToSearch) {
  if (words2.length === 0) {
    return null;
  }
  for (let i = 0; i < words2.length; i++) {
    if (words2[i] === wordToSearch) {
      return true;
    } else if (words2.length !== wordToSearch) {
      return false;
    }
  }
}
