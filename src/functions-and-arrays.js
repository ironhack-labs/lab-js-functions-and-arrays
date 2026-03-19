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

function findLongestWord(array) {
  let longestWord = array[0];
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}
// console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  let sumOfNumbers = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sumOfNumbers += arrayOfNumbers[i];
  }
  return sumOfNumbers;
}

// console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return 0;
  }
  let averageOfNumbers = sumNumbers(arrayOfNumbers) / arrayOfNumbers.length;

  return averageOfNumbers;
}
// console.log(averageNumbers(numbers2));

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
const words22 = [];
function doesWordExist(arrayOfWords, word) {
  if (arrayOfWords.length === 0) {
    return null;
  } else if (arrayOfWords.includes(word)) {
    return true;
  } else {
    return false;
  }
}
// console.log(doesWordExist(words2, "truthy"));
