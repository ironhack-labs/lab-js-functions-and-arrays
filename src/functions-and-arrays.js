// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(t1, t2) {
  if (t1 > t2) {
    return t1;
  } else if (t2 > t1) {
    return t2;
  } else {
    return t1 = t2;
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

function findLongestWord(inputWord) {
  if (inputWord.length === 0) {
    return null;
  }

  let longestWord = "";
  for (let i = 0; i < inputWord.length; i++) {
    if (inputWord[i].length > longestWord.length) {
      longestWord = inputWord[i];
    }
  }

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(trump) {
  let sum = 0;
  for (let i = 0; i < trump.length; i++) {
    sum += trump[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(tinNum) {
    if(tinNum.length === 0) {
    return 0   
    }
        let allNum = 0
    for (let i = 0; i < tinNum.length; i++) {
        allNum += tinNum[i];
        allNum1 = allNum / tinNum.length
    }
    return allNum1;
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

function doesWordExist(inputSet, searchWord) {
  if (inputSet.length === 0) {
    return null;
  }
  for (let i = 0; i < inputSet.length; i++) {
    if (inputSet[i] === searchWord) {
      return true;
    }
  }
  return false;
}