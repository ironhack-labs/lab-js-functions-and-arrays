// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
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

function findLongestWord(arr) {
  if (arr == "") {
    return null;
  }

  let word = "";
  for (let i = 1; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(summe) {
  let count = 0;
  for (let i = 0; i < summe.length; i++) {
    count += summe[i];
  }
  return count;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageArray) {
  if (averageArray == "") {
    return 0;
  } else {
    return sumNumbers(averageArray) / averageArray.length;
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

function doesWordExist(enterArray, searchedWord) {
  if (enterArray == "") {
    return null;
  }

  for (let i = 0; i < enterArray.length; i++) {
    if (enterArray.includes(searchedWord)) {
      return true;
    } else {
      return false;
    }
  }
}

// better solution:

// for (let i = 0; i < enterArray.length; i++) {
//   if (enterArray[i] === searchedWord) {
//     return true;
//   }
// }
// return false;
