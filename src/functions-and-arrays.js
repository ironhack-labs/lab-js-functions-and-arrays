// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
    return Math.max(firstNumber, secondNumber);
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (!arr.length) {
        return null;
    } 
    let maxWordLength = 0;
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxWordLength) {
            maxWordLength = arr[i].length;
            longestWord = arr[i];
        }
    }
    return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArr) {
    let sum = 0;
    numberArr.forEach(number => sum += number);
    return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (!arr.length) return 0;

    return sumNumbers(arr) / arr.length;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordSearched) {
    if (!arr.length) return null;

    return arr.includes(wordSearched);
}

