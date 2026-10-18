// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else return num2;
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

function findLongestWord(list) {
  if (list.length === 0) return null;
  let longestWord = "";
  for (let i = 0; i < list.length; i++) {
    const currentWord = list[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersList) {
  let numberAddition = 0;
  for (let i = 0; i < numbersList.length; i++) {
    numberAddition = numbersList[i] + numberAddition;
  }
  return numberAddition;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersList) {
  if (numbersList.length === 0) return 0;

  let numberAddition = 0;
  for (let i = 0; i < numbersList.length; i++) {
    numberAddition = numbersList[i] + numberAddition;
  }
  const averageNum = numberAddition / numbersList.length;

  return averageNum;
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

function doesWordExist(arrayWords, word) {
  if (arrayWords.length === 0) return null;
  let wordCheck = "";
  for (let i = 0; i < arrayWords.length; i++) {
   wordCheck = arrayWords[i];
  
  if (wordCheck === word) {
    return true;
  } 
}
   return false;
}
