// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    return (a > b) ? a : b
}


// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";

    if(words.length === 0) return null;

    words.forEach(function (element){
    if(element.length>longestWord.length) longestWord = element;   
    })
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let result = 0;
    array.forEach(function (element){
        result += element;
    })
    return result;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if(array.length===0) return 0;
    return sumNumbers(array)/array.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, searchWord) {
    if(array.length === 0) return null;
    let result = false;
    array.forEach(function (element){
        if(element === searchWord) result = true;
    })
    return result;
}
