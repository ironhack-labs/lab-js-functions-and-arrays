// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
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

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNumbers) {
  let total = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    const currentNumber = arrNumbers[i];
    total += currentNumber;
  }
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
  let arrNumbers2Elements = 0;
  for (let i = 0; i < numbers2.length; i++) {
    arrNumbers2Elements += numbers2[i];
  }
  return arrNumbers2Elements;
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

function doesWordExist(words2, matter) {
  // if array is empty
  if (words2.length === 0) {
    return null;
  }

  if (words2.includes(matter)) {
    return true;
  }

  return false;
}
