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
  if (!wordsArr) {
    return "Null";
  }
  let longWord = "";
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longWord.length) {
      longWord = wordsArr[i];
    }
  }
  return longWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let suma = [];
function sumNumbers(suma) {
  for (let i = 0; 1 < suma.length; i++) {
    suma += suma[i];
    
  }
  return suma;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}

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
