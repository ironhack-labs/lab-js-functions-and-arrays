// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 === number2) return number1, number2;
    return Math.max(number1, number2);
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    if(!wordsArray.length) return null;
    let longestWord = "";
    for (const word of wordsArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }    
  return longestWord;
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    if (!array.length) return 0;
    let sum = 0
    for (let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray) {
    if (numArray.length === 0) {
        return 0
    }

    let sum = 0
    numArray.forEach(number => {
        sum += number
    })

    return sum / numArray.length; 

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray, word) {
    if(!wordArray.length) return null;
    let exist = false;
    wordArray.forEach(currentWord => {
        if (word === currentWord) exist = true;
    });
    return exist
}


