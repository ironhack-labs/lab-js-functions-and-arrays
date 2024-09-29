// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
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

function findLongestWord(arrayWords) {
  if (arrayWords.length === 0) {
    return null;
  }
  let longestWord = "";
  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].length > longestWord.length) {
      longestWord = arrayWords[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNumbersTwo) {
    const sum = sumNumbers(arrayNumbersTwo);
    const elements = arrayNumbersTwo.length;
    if(arrayNumbersTwo.length=== 0){
        return 0;
    }
    const average = sum/elements;
    return average;
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

function doesWordExist(arrayWordsTwo,wordToSearch) {
    if (arrayWordsTwo.length===0){
        return null;
    } else{
        return arrayWordsTwo.includes(wordToSearch);
    }
}
