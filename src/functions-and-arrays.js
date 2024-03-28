// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 < num2) {
    return num2;
  } else if (num1 > num2) {
    return num1;
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

function findLongestWord() {
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

function sumNumbers() {
  let sum = 0;

  numbers.forEach(function (num) {
    sum += num;
  });
  return sum;
}

console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
  const aveNumbers = sumNumbers(numbers2) / numbers2.length;
  return aveNumbers;
}
console.log(averageNumbers(numbers2));

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
