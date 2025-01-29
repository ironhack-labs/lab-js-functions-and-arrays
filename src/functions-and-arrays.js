// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
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

function findLongestWord(wordsArray) {
  if (wordsArray.length === 0) {
    return null;
  }
  let longestWord = "";
  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
  if (numberArray.length === 0) {
    return 0;
  }
  let totalSum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    let num = numberArray[i];
    totalSum += num;
  }
  return totalSum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArray) {
  if (numberArray.length === 0) {
    return 0;
  }
  let sum = sumNumbers(numberArray);
  let average = sum / numberArray.length;
  return average;
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

function doesWordExist(searchWords, searchWord) {
  if (searchWords.length === 0) {
    return null;
  }
  for (let i = 0; i < searchWords.length; i++) {
    if (searchWords[i] === searchWord) {
      return true;
    }
  }
  return false;
}
