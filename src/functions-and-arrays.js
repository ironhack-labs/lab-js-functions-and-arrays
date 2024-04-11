// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (Math.max(number1, number2) === number1) {
    return number1;
  }
  else if (Math.max(number1, number2) === number2) {
    return number2;
  }
  else if (number1 === number2) {
    return number1;
  }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordList) {

  let word = '';

  if (wordList.length === 0) {
    word = null;
    return word;
  }

  for (let i = 0; i < wordList.length; i++) {
    if(word.length < wordList[i].length) {
      word = wordList[i];
    }
  }
  return word;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
  
  let sum = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    number = numbersArr[i];
    sum += number
  }
  return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {

  if (numbersArray.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    number = numbersArray[i];
    sum += number;
  }
  
  const average = sum / numbersArray.length;

  return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsList, word) {
  if (wordsList.length === 0) {
    return null;
  }

  if (wordsList.indexOf(word) === -1) {
    return false;
  }
  else {
    return true;
  }
}
