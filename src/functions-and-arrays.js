// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  } else {
    return n2;
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
  let result = "";
  if (words.length == 0) {
    return null;
  } else if (words.length == 1) {
    return words[0];
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > result.length) {
      result = words[i];
    }
  }
  return result;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(number) {
  if (number.length == 0) {
    return 0;
  } else if (number.length == 1) {
    return number[0];
  } else {
    let result = 0;

    for (let i = 0; i < number.length; i++) {
      result = result + number[i];
    }
    return result;
  }
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(number) {
  if (number.length == 0) {
    return 0;
  } else if (number.length == 1) {
    return number[0];
  } else {
    let result = 0;

    for (let i = 0; i < number.length; i++) {
      result = result + number[i];
    }

    result = result / number.length;
    return result;
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

function doesWordExist(word, elem) {
  if (word.length == 0) {
    return null;
  } else if (word.includes(elem)) {
    return true;
  } else {
    return false;
  }
}
