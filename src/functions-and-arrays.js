// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let maxNumber = maxOfTwoNumbers(10, 16);
console.log(maxNumber);

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
let longestWord = findLongestWord(words);
console.log(longestWord);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let totalSum = sumNumbers(numbers);
console.log(totalSum);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  const sum = sumNumbers(numbers);
  const average = sum / numbers.length;

  return average;
}
let average = averageNumbers(numbers2);
console.log(average);

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

function doesWordExist(wordsArray, wordToSearch) {
  if (wordsArray.length === 0) {
    return null;
  }
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToSearch) {
      return true;
    }
  }
  return false;
}
console.log(doesWordexist(words2, "Hotel"));
