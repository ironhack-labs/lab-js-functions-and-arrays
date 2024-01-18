// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
if (a>b){
    return a
}
else {
    return b
}
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
let word = "";
for (let i=0; i< arr.length; i++) {
    if (word.length < arr[i].length) {
        word = arr[i];
    }
}
if (arr.length > 0) {
return word;
}
else {
return 0
}

}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    if (arr.length > 0) {
    return sum / arr.length;
    }
    else { 
    return 0
    }
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {return null}
    for (let i=0; i<arr.length; i++){
        if (arr[i] === word) {
            return true
        }   
    }   
    return false
}