// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
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

function findLongestWord(wordsArr) {
  if (wordsArr.length === 0) {
    return null;
  }

  let longestWord = "";
  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  let sum = 0;
  if (numbers2.length === 0) {
    return 0;
  }

  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }

  averageResult = sum / numbers2.length;

  return averageResult;
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

function doesWordExist(wordArr, word) {
  if (wordArr.length === 0) {
    return null;
  }

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === word) {
      return true;
    }
  }

  return false;
}
