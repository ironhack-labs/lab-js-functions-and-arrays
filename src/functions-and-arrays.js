// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(x, y) {
  const Maximum = Math.max(x, y);
  return Maximum;
}
maxOfTwoNumbers(8, 9);

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
findLongestWord(longestWord);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum;
}
sumNumbers(numbers);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0;
  }
  let sum = 0;
  let average = 0;
  for (let i = 0; i < numbers2.length; i += 1) {
    sum += numbers2[i];
  }
  average = sum / numbers2.length;
  return average;
}
averageNumbers(numbers2);

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

function doesWordExist(wordsArray, word1) {
  if (wordsArray.length === 0) {
    return null;
  }
  for (let i = 0; i < wordsArray.length; i += 1) {
    if (word1 === wordsArray[i]) {
      return true;
    }
  }
  return false;
}
doesWordExist(word2, "trouble");
