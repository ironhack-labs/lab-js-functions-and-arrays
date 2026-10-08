// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  let maxNum;
  num1 > num2
    ? (maxNum = num1)
    : num2 > num1
      ? (maxNum = num2)
      : num1 === num2
        ? (maxNum = num1)
        : null;
  return maxNum;
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

function findLongestWord(namesArr) {
  if (namesArr.length === 0) {
    return null;
  }
  if (namesArr.length === 1) {
    return namesArr[0];
  }

  let longestWord = namesArr.sort((a, b) => b.length - a.length)[0];
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
  let result = 0;
  if (numArr.length === 0) {
    return result;
  }
  if (numArr.length === 1) {
    return numArr[0];
  }
  for (let i = 0; i < numArr.length; i++) {
    result += numArr[i];
  }
  return result;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
  let result = 0;
  if (numArr.length === 0) {
    return result;
  }
  if (numArr.length === 1) {
    return numArr[0];
  }

  return sumNumbers(numArr) / numArr.length;
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

function doesWordExist(arrWords, word) {
  let result = null;
  arrWords.length === 0
    ? result
    : arrWords.includes(word)
      ? (result = true)
      : (result = false);

  return result;
}
