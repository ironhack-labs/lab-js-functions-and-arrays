// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else if (num1 === num2) {
    return num1, num2;
  } else {
    return "invalid number";
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

function findLongestWord(input) {
  let firstLongest = input[0];
  if (!input.length || !input) {
    return 0;
  }
  for (let i = 1; i < input.length; i++) {
    let currentString = input[i];
    if (currentString.length > firstLongest.length) {
      firstLongest = currentString;
    }
  }
  return firstLongest;
}
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
  let initialValue = 0;
  let sum = numArr.reduce((accu, currentValue) => {
    return accu + currentValue;
  }, initialValue);
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
  if (!numArr || !numArr.length) {
    return 0;
  }
  let initialValue = 0;
  let sum = numArr.reduce((accu, currentValue) => {
    let result = accu + currentValue;
    return result;
  }, initialValue);
  let average = sum / numArr.length;
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

function doesWordExist(arr, srcWord) {
  if (!arr || !arr.length) {
    return null;
  }
  if (arr.includes(srcWord)) {
    return true;
  } else {
    return false;
  }
}
