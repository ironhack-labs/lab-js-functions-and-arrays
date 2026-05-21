// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 >= number2) {
        return number1;
    }
    else {
        return number2;
    }
}
// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrWords) {
    if(!arrWords||arrWords.length === 0){
       return null;
    }
    let longestWord=arrWords[0];
    arrWords.forEach(function(wordLength) {
        if (wordLength.length>longestWord.length){
            longestWord=wordLength;
        }
    });
    return longestWord;
}  console.log (findLongestWord(words));
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(someNumbers) {
    let sum=0;
    for(let i=0; i<someNumbers.length; i++) {
        sum += someNumbers[i];
    }
    return sum;
}  console.log(sumNumbers(numbers));
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(someNumbers) {
    if (someNumbers.length === 0){
        return 0;
    } else {
        return sumNumbers(someNumbers) / someNumbers.length;
    }
}  console.log(averageNumbers(numbers2));
// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToFind) {
    if (wordsArray.length === 0) {
    return null;
  } else {
    return wordsArray.includes(wordToFind);
  }
  
} console.log(doesWordExist(words2));
