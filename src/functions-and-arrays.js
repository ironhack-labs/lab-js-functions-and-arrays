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
  if (!wordsArr.length) return 0;
  let longestWord = wordsArr[0];
  for (let i = 1; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longestWord.length) {
      longestWord = wordsArr[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sumNumbers = 0;
  numbers.forEach((number) => {
    sumNumbers += number;
  });

  return sumNumbers;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  let sumNumbers = 0;
  if (numbers.length == 0) {
    return 0;
  }
  let countNumbersArray = numbers.length;
  numbers.forEach((number) => {
    sumNumbers += number;
  });

  return sumNumbers / countNumbersArray;
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

function doesWordExist(wordsArray, wordToFind) {
  return wordsArray.length > 0 ? wordsArray.includes(wordToFind) : null;
}
