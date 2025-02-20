// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1, num2;
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

function findLongestWord(array) {
  if (array.length === 0) {
    return null;
  } else {
    let bigWord = "";
    array.forEach((element) => {
      if (element.length > bigWord.length) {
        bigWord = element;
      }
    });
    return bigWord;
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let sum = 0;
  if (array.length === 0) {
    return sum;
  } else {
    array.forEach((element) => {
      sum += element;
    });
    return sum;
  }
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  let average = sumNumbers(array);
  if (average === 0) {
    return average;
  } else {
    return average / array.length;
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

function doesWordExist(array, word) {
  if (array.length === 0) {
    return null;
  } else {
    return array.includes(word);
  }
}
