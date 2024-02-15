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

const emptyArray = [];

function findLongestWord(array) {
  if (array.length === 0) {
    return 0;
  }
  let theLongestWord = "";
  array.forEach((element) => {
    if (element.length > theLongestWord.length) {
      theLongestWord = element;
    }
  });
  return theLongestWord;
}

const result = findLongestWord(words);
const resultEmpty = findLongestWord(emptyArray);
console.log(result);
console.log(resultEmpty);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let total = 0;
  array.forEach((element) => {
    total += element;
  });
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length == 0) {
    return 0;
  }
  let average = 0;
  array.forEach((element) => {
    average += element;
  });
  return average / array.length;
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

function doesWordExist() {}
