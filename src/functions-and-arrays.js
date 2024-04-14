// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) { 
        return a;
    }
    else if (b > a) {
        return b;
    }
    else if (a === b) {
        return a || b;
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let word = "";
    if (arr.length === 0 ) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length){
            word = arr[i];
        }
    }
    return word;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    const loop = arr.forEach(element => {
        sum += element;
    });
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        return 0;}

    return sumNumbers(arr) / arr.length;
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }
    return false;
}
