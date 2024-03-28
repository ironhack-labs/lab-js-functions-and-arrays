// Iteration 1 | Find the Maximum
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
  let longestWord = words[0];

  if (words.length === 0) {
    longestWord = null;
    return longestWord;
  }

  for (i = 1; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  return numbers2.length === 0 ? 0 : sumNumbers(numbers2) / numbers2.length;
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

function doesWordExist(words2, checkerWord) {
  if (words2.length === 0) return null;
  return words2.includes(checkerWord);
}
