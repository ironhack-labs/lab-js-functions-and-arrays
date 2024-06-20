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

function findLongestWord(arrWords) {
  if (!arrWords.length) {
    return null;
  }

  if (arrWords.length === 1) {
    return arrWords[0];
  }

  let largestWord = arrWords[0];

  for (let word of arrWords) {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  }

  return largestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let result = 0;

  for (let number of numbers) {
    result += number;
  }

  return result;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  if (!numbers.length) {
    return null;
  } else {
    return sumNumbers(numbers) / numbers.length;
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

function doesWordExist(arr, word) {
  if (arr.length === 0) {
    return null;
  }

  return arr.includes(word);
}
