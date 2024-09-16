// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else if (a === b) {
    return a, b;
  }
}

maxOfTwoNumbers();

console.log(maxOfTwoNumbers(3, 3));

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

function findLongestWord(names) {
  let longestWord = "";
  if (names.length === 0) {
    return 0;
  }
  names.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
  let average = 0;
  if (nums.length === 0) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    average += nums[i];
  }
  return average / nums.length;
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

function doesWordExist(words, names) {
  if (words.length === 0) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (names === words[i]) {
      return true;
    }
  }
  return false;
}

console.log(doesWordExist(words2, "truth"));
