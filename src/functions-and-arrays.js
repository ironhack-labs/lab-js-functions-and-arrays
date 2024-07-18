// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
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

function findLongestWord(wordsArr) {
  if (wordsArr.length === 0) return null;
  let longestWord = "";

  for (let word of wordsArr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numsArr) {
  if (numsArr.length === 0) return 0;

  let accumulator = 0;
  for (let num of numsArr) {
    accumulator += num;
  }
  return accumulator;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numsArr) {
  if (numsArr.length === 0) return 0;

  const sum = sumNumbers(numsArr);
  return sum / numsArr.length;
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

function doesWordExist(wordsArr, word) {
  if (wordsArr.length === 0) return null;
  return wordsArr.includes(word);
}
