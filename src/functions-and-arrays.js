// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    return a > b ? a : b;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length !== 0){
        let longestWord = arr[0];
        for ( let item of arr)
            if ( item.length > longestWord.length)
                longestWord = item;
        return longestWord;
    }
    return null;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;
    for (let item of arr)
        sum += item;
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length !== 0 )
        return sumNumbers(arr) / arr.length;
    return 0;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr , wordToFind) {
    if(arr.length !== 0){
        for (let word of arr)
            if(word === wordToFind) return true;
        return false;
    }
    return null;
}
