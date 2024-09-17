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

function findLongestWord(wordArray) {
  let theLongestWord = "";
  if (wordArray.length == 0) {
    return 0;
  }
  wordArray.forEach((currentWord) => {
    if (currentWord.length > theLongestWord.length) {
      theLongestWord = currentWord;
    }
  });

  return theLongestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNumbers) {
  let sum = 0;
  arrayNumbers.forEach((arrayElement) => {
    sum += arrayElement;
  });
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  if (numbersArray.length == 0) {
    return 0;
  }
  return sumNumbers(numbersArray) / numbersArray.length;
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

function doesWordExist(blablaArray, wordToSearch) {
  let existsInArray = false;
  if (blablaArray.length === 0) {
    return null;
  }
  blablaArray.forEach((word) => {
    if (word == wordToSearch) {
      existsInArray = true;
    }
  });
  return existsInArray;
}
