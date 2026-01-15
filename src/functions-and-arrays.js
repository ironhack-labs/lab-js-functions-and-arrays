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

  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) return 0;

  let sumNumbers = 0;
  for (let i = 0; i < numbers2.length; i++) {
    sumNumbers += numbers2[i];
  }
  return sumNumbers / numbers2.length;
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

function doesWordExist(wordsArr,word) {
  if (wordsArr.length === 0) {
    return null;
  }
  

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      return true;
    }
  }
  return false;
}
