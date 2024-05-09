// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number1 < number2) {
    return number2;
  } else {
    return number1;
  }
}
// console.log(maxOfTwoNumbers(2, 2));

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
  let longestWord = "";

  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === longestWord.length) {
      continue;
    } else if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    } else if (arr.length === 1) {
      longestWord = arr[0];
    }
  }

  return longestWord;
}
// console.log(findLongestWord([]));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    if (arr.length === 0) {
        return 0;
      }
    let sum = 0
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        return 0;
        }

    let sum = 0
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length
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
