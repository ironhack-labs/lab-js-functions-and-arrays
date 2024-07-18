// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
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
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sumTotal = 0;
  for (let j = 0; j < numbers.length; j++) {
    sumTotal += numbers[j];
  }
  return sumTotal;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0;
  }
  let sumTotal2 = 0;
  for (let f = 0; f < numbers2.length; f++) {
    sumTotal2 += numbers2[f];
  }
  let average = sumTotal2 / numbers2.length;
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

function doesWordExist(words, searchWord) {
  if (words.length === 0) {
    return null;
  }

  if (words.includes(searchWord)) {
    return true;
  } else {
    return false;
  }
}
