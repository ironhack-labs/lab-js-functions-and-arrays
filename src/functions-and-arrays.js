// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else if (a === b) return a, b;
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
  let firstLong = words[0];
  if (!words[0]) {
    return 0;
  }

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length > firstLong.length) {
      firstLong = currentWord;
    }
  }
  return firstLong;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numb) {
  let num = 0;
  for (let i = 0; i < numb.length; i++) {
    num += numb[i];
  }
  return num;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avg) {
  if (!avg[0]) {
    return 0;
  }
  let avgn = 0;
  for (let i = 0; i < avg.length; i++) {
    avgn += avg[i];
  }
  return avgn / avg.length;
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

function doesWordExist(arrW, wordTo) {
  if (!arrW[0]) {
    return null;
  }
  for (i = 0; i < arrW.length; i++) {
    if(wordTo === arrW[i]){   
        return true
    } 
  }
  return false 
  }
