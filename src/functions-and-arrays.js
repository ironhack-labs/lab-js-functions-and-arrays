// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const result1 = maxOfTwoNumbers(10, 20);
console.log("The maximum is:", result1);

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
const longestWord = findLongestWord(words);
console.log("The longest word is:", longestWord);
const emptyArray = [];
console.log("Result with an empty array:", findLongestWord(emptyArray));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  if (!numbers || numbers.length === 0) {
    return 0;
  }
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const totalSum = sumNumbers(numbers);
console.log("The sum of all numbers is:", totalSum);

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
    return 0;
  }
  const totalSum = sumNumbers(numbers);
  return totalSum / numbers.length;
}
const average = averageNumbers(numbers2);
console.log("The average of all numbers is:", average);

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

function doesWordExist(words, word) {
  if (words.length === 0) {
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      return true;
    }
  }
  return false;
}

console.log(doesWordExist(words2, "matter"));
console.log(doesWordExist(words2, "hello"));
console.log(doesWordExist([], "anyword"));
