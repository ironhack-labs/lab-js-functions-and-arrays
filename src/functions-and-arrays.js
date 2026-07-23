// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else 
        return num1;
}
console.log(maxOfTwoNumbers(4,5));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    if(wordsArray.length === 0) {
        return null;
    }
    let longestWord = wordsArray[0];

    for(let i = 1; i < wordsArray.length; i++) {
        if(wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    let sum = 0;
    for(let i  = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    return sum;
}

console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum/array.length;
}
console.log("Average:" );



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {

    if (wordsArray.length === 0) {
        return null;
    }
    return wordsArray.includes(wordToSearch);
}
