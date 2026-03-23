// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
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
  if (words.length != 0) {
    let wordsLength = [];
    words.forEach((lengthPush) => {
      wordsLength.push(lengthPush.length);
    });
    let maxChars = 0;
    for (let i = 0; i < wordsLength.length; i++) {
      wordsLength[i] > maxChars && (maxChars = wordsLength[i]);
    }
    return words[wordsLength.indexOf(maxChars)];
  } else {
    return null;
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let total = 0;
  numbers.forEach((sum) => {
    total += sum;
  });
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  let total = 0;
  numbers2.forEach((sum) => {
    total += sum;
  });
  average = total / numbers2.length;
  return (average = average ? average : 0);
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
  if (words2 != 0) {
    return words2.indexOf(wordToSearch) != -1 ? true : false;
  } else {
    return null;
  }
}
