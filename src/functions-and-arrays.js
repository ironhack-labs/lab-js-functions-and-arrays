// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
maxOfTwoNumbers(20,5);
console.log(maxOfTwoNumbers);

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    let longestWord = words[0];
    for (let i = 0; i < words.length; i++){
        if (longestWord.length < words[i].length) {
            longestWord  = words[i];
        } 
    }
    return longestWord ;
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    if (arr.length === 0){
        return 0;
    }
    let sum = 0;
    for (let i =0;  i < arr.length; i++){
        sum += arr[i];      
    } 
    return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(arr) {
    if (arr.length === 0){
        return 0;
    }
    let sum = 0;
    for (let i =0;  i < arr.length; i++){
        sum += arr[i];      
    } 
    let average= sum / arr.length;
    return average;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, searchWord) {
    if (words.length === 0){
        return null;
    }
        return words.includes(searchWord); //
}
