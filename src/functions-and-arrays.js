// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
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

function findLongestWord(wordArray) {
  let longestWord = "";
  if (wordArray.length === 0) {
    return null;
  }
  if (wordArray.length === 1) {
    return wordArray[0];
  }
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) {
      longestWord = wordArray[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
  let sumArray = 0;
  for (let i = 0; i < numArray.length; i++) {
    sumArray += numArray[i];
  }
  return sumArray;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray) {
  let sumArray = 0;
  for (let i = 0; i < numArray.length; i++) {
    sumArray += numArray[i];
  }
  if (numArray.length !== 0) {
    let averageArray = sumArray / numArray.length;
    return averageArray;
  } else {
    return sumArray;
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

function doesWordExist(wordsArray, wordSought) {
  if (wordsArray.includes(wordSought)) {
    return true;
  } else if (!wordsArray.includes(wordSought) && wordsArray.length !== 0) {
    return false;
  } else if (wordsArray.length === 0) {
    return null;
  }
}
