// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if(number1 > number2){
        return number1;
    }else{
        return number2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longestWord = "";
    if(arr.length === 0){
            return null;
        }
    for(let i = 0; i < arr.length; i++){
        if (arr[i].length > longestWord.length){
            longestWord = arr[i];
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArr) {
    let total = 0;
    for(let i = 0; i < numberArr.length; i++){
        total += numberArr[i];
    }
    return total;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(arr) {
    let total = 0;
    if(arr.length === 0){
            return 0;
        }
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    let average = total / arr.length;
    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if(arr.length === 0){
        return null;
    }else if(arr.includes(word)){
        return true;
    }else{
        return false;
    }
}
