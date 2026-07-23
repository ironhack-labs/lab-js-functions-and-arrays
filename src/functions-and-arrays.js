// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if(number1 > number2){
        return number1;
    } else if(number2 > number1){
        return number2;
    }else{
        return number1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {

    if(arrayOfWords.length === 0){
        return null;
    }
    let longestWord = "";
    for(i = 0; i < arrayOfWords.length; i++){
        if( arrayOfWords[i].length > longestWord.length){
            longestWord = arrayOfWords[i];
        }
    }

    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {

    if(arrayOfNumbers.length === 0){
        return 0;
    }

    let sumOfNumbers = 0;

    for(let i = 0; i < arrayOfNumbers.length; i++){
        sumOfNumbers += arrayOfNumbers[i];
    }

    return sumOfNumbers;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
    if(arrayOfNumbers.length === 0){
        return 0;
    }

    let sumOfNumbers = 0;

    for(let i = 0; i < arrayOfNumbers.length; i++){
        sumOfNumbers += arrayOfNumbers[i];
    }

    let average = sumOfNumbers / arrayOfNumbers.length;

    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {

    if(arrayOfWords.length === 0){
        return null;
    }

    for(let i = 0; i < arrayOfWords.length; i++){
        if(arrayOfWords[i] === word){
            return true;
        }
    }

    return false;
}
