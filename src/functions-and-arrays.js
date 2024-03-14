// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  if (num2 > num1) {
    return num2;
  } else {
    return num1, num2;
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
    return 0;
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

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  let sum1 = 0;
  for (let i = 0; i < numbers2.length; i++) {
    sum1 += numbers2[i];
  }
  if (numbers2.length > 0) {
    let result = sum1 / numbers2.length;
    return result;
  } else if (numbers2.length === 0) {
    return 0;
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

function doesWordExist(words2, searchWord) {
  if (words2.length === 0) {
    return null;
  }
  for (let i = 0; i < words2.length; i += 1) {
    if (words2[i] === searchWord) {
      return true;
    }
  }
  return false;
}
