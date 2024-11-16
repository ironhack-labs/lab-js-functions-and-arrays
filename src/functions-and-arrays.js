// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
 if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longestWord = arr[0];
    if (arr.length === 0) {
        return null;
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }

    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
 
function averageNumbers(arr) {
   
    if (arr.length === 0) {
        return 0;
    }
    return sumNumbers(arr) / arr.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, findWord) {
    if (arr.length === 0) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === findWord) {
            return true;
        }
    }
    return false;
}
