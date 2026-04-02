// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
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

function findLongestWord(wordsarr) {
    if ( wordsarr.length === 0){
        return null;
    }
 let longestWord = wordsarr[0];
    
  for (let i = 1; i < wordsarr.length ; i++) {
    if (wordsarr[i].length > longestWord.length ) {
      longestWord = wordsarr[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
  if (num.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersarr) {
    if (numbersarr.length === 0 ){
        return 0;
    }
    let averageNum = sumNumbers(numbersarr)/ numbersarr.length ;
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

function doesWordExist(array, search) {
if (array.length === 0){
    return null;
}
else if (array.indexOf(search) !== -1) {
    return true;
  } 
  else {
    return false;
  }
}
