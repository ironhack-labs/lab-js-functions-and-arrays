// Iteration 1 | Find the Maximum
function maxOfTwoNumbers (num1, num2){
  if(num1 > num2)
    return num1;
  else
    return num2;
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
  if (array.length === 0) {
    return null;
  }

  let longestWord = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (arrayNum){
  let total = 0;
  for(let i = 0; i < arrayNum.length; i++)
    total += arrayNum[i];

return total;
}
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNum2) {
  if (arrayNum2.length === 0) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < arrayNum2.length; i++) {
    total += arrayNum2[i];
  }

  return total / arrayNum2.length;
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, word) {
  if (wordsArray.length === 0) {
    return null;
  }

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === word) {
      return true;
    }
  }

  return false;
}


