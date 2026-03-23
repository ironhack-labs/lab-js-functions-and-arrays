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
  let container = words[0];
  if (words.length === 0) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > container.length) {
      container = words[i];
    }
  }
  return container;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  let total2 = 0;
  if (numbers2.length === 0) {
    return 0;
  }
  for (let j = 0; j < numbers2.length; j++) {
    total2 = total2 + numbers2[j];
  }
  return total2 / numbers2.length;
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

function doesWordExist(arrayWord, wordToSearch) {
  if (arrayWord.length === 0) {
    return null;
  }
  for (let k = 0; k < arrayWord.length; k++) {
    if (arrayWord[k] === wordToSearch) {
      return true;
    }
  }
  return false;
}
