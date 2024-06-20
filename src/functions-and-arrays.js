// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
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
  if (!wordsArr.length) {
    return null;
  }

  let longestWord = "";
  wordsArr.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 10, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
  let sum = 0;
  numbersArr.forEach((number) => {
    sum += number;
  });
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArr) {
  let sum = 0;
  let average = 0;

  numbersArr.forEach((number) => {
    sum += number;
    average = sum / numbersArr.length;
  });
  return average;
}

const avg = averageNumbers(numbers2)
console.log(avg)

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

function doesWordExist() {}
