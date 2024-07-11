// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1 || num2;
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

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let addNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    addNumbers += numbers[i];
  }

  return addNumbers;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function sumNumbers(numbs) {
  let sum = 0;
  for (let i = 0; i < numbs.length; i++) {
    sum += numbs[i];
  }
  return sum;
}
function averageNumbers(numbs) {
  if (numbs.length === 0) {
    return 0;
  }
  const totalSum = sumNumbers(numbs);
  const average = totalSum / numbs.length;

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

function doesWordExist(words2, wordToSearch) {
  if (words2.length === 0) {
    return null;
  }

  for (let i = 0; i < words2.length; i++) {
    if (words2[i] === wordToSearch) {
      return true;
    }
  }
  return false;
}
