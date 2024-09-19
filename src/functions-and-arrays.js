// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1,number2) {
    return Math.max(number1,number2);
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArray) {
    if (wordArray.length === 0) return null;
    let wordArrayLength = []
    wordArrayLength = wordArray.map((el) => el.length);
    longestWord = Math.max(...wordArrayLength); // unpacking array w/ ...
    return wordArray[wordArrayLength.indexOf(longestWord)];
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
    let sum = 0;
    numberArray.forEach(element => {sum += element});
    return sum;
    };




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArray) {
    if (numberArray.length === 0) return 0;
    return sumNumbers(numberArray)/numberArray.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray, searchTerm) {
    if (wordArray.indexOf(searchTerm) != -1) return true;
    if (wordArray.length === 0) return null;
    return false;
}