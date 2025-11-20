// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1;
    } else {
        return num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length === 0) return null;

    let longestWord = ""
    for (let i=0; i<arr.length; i++){
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    if (arr.length === 0) return 0;

    let resultNumber = 0;
    for (let i=0; i<arr.length; i++){
        resultNumber += arr[i]
    }
    return resultNumber;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) return 0;

    let result = 0;
    for (let i=0; i<arr.length; i++){
        result += arr[i]
    }
    return result / arr.length

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordSearch) {
    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === wordSearch) {
            return true
        }
    }

    return false
}
