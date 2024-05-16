// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
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
function findLongestWord(wordsArray) {
  let longestWord = "";
  if (wordsArray.length === 0) {
    return null;
  }
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let total = 0;
  if (numbers.length === 0) {
    return 0;
  }
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
sumNumbers(numbers);
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  let total = 0;
  if (numbers.length === 0) {
    return 0;
  }
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  const average = total / numbers.length;
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

function doesWordExist(wordsArray, searchedWord) {
  if (wordsArray.length === 0) {
    return null;
  }
  for (let i = 0; i < wordsArray.length; i++) {
    console.log("kpok", wordsArray[i]);
    if (wordsArray[i] === searchedWord) {
      console.log(wordsArray[i]);
      return true;
    }
  }
  return false;
}
