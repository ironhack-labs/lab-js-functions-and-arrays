// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
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

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
  }

  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray) {
  if (numArray.length === 0) {
    return 0;
  }
  return sumNumbers(numArray) / numArray.length;
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

function doesWordExist(words, searchWord) {
  if (words.length === 0) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    const currentword = words[i];
    if (currentword === searchWord) {
      return true;
    }
  }

  return false;
}
