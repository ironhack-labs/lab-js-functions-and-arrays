// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
        if (num1 > num2) { return num1;} else { return num2;}
      }


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    if (wordsArray.length === 0) {
      return null;
    }
  
    return wordsArray.reduce((longest, currentWord) => {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
  }



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {

    let sum = 0;
  
    for (let number of numbersArray) {sum += number; } return sum;
  }



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if (numbersArray.length === 0) {
      return null;
    }
    let sum = sumNumbers(numbersArray);
    let average = sum / numbersArray.length;

    return average;
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {
    if (wordsArray.length === 0) {
      return null;
    }
  
    return wordsArray.includes(wordToSearch);
  }
  