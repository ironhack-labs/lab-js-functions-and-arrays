// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numb1, numb2) {
  if (numb1 > numb2) {
    return numb1;
  } else if (numb2 > numb1) {
    return numb2;
  } else {
    return numb2;
  }
}
console.log(maxOfTwoNumbers(7, 11));

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

function findLongestWord(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > newArr.length) {
      newArr = arr[i];
    }
  }
  return newArr;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNumber) {
  let sum = 0;
  if (arrayNumber.length === 0) {
    return sum;
  }
  return sumNumbers(arrayNumber) / arrayNumber.length;
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

function doesWordExist(arrayOfWord, theWord) {
  let word = [];
  if (word.length === 0) {
    return null;
  }
  for (let i = 0; i < arrayOfWord.length; i++) {
    if (arrayOfWord[i] === theWord) {
      return true;
    }
  }
  return false;
}
