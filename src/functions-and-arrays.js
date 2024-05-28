// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
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

function findLongestWord(wordsArr) {
  let longestWord = "";
  if (wordsArr.length === 0) {
    return null;
  }

  for (let i = 0; i < wordsArr.length; i += 1) {
    if (wordsArr[i].length > longestWord.length) {
      longestWord = wordsArr[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
  const sum = numbersArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArr) {
  if (numbersArr.length === 0) {
    return 0;
  }

  const sum = numbersArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return sum / numbersArr.length;
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

function doesWordExist(wordsArr, wordToSearch) {
  if (wordsArr.length === 0) {
    return null;
  }

  if (wordsArr.includes(wordToSearch)) {
    return true;
  } else {
    return false;
  }
}
