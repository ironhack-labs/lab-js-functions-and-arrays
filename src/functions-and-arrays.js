// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 < num2) {
    return `${num2} is bigger!`;
  } else if (num1 > num2) {
    return `${num1} is biger!`;
  } else {
    return "Woho! both numbers are equal!";
  }
}

console.log(maxOfTwoNumbers(5, 7));

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

console.log(findLongestWord(words)); // Output will be "crocodile"

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(sumNumbers(numbers)); // Output will be 87

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
    return null; // Returning null for an empty array
  }

  const sum = sumNumbers(numbers);
  return sum / numbers.length;
}

console.log(averageNumbers(numbers2)); // Output will be 5.375

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

function doesWordExist(words, wordToSearch) {
  if (words.length === 0) {
    return null; // Returning null for an empty array
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
      return true;
    }
  }

  return false;
}

console.log(doesWordExist(words2, "machine")); // Output will be true
console.log(doesWordExist(words2, "apple")); // Output will be false
