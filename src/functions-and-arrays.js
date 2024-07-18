// Iteration 1 | Find the Maximum



function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return num1;
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {

    let longestWord = "";

    if (arr.length > 0){
        for (let i = 0; i < arr.length; i++) {
            const word = arr[i];
            
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        }
        return longestWord;
    } else {
        return null;
    }
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let totalSum = 0;

    if (arr.length > 0) {
        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                totalSum += arr[i];
            }
        }
        return totalSum;
    } else {
        return 0;
    }
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let totalSum = 0;

    if (arr.length > 0) {
        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                totalSum += arr[i];
            }
        }
        return totalSum / arr.length;
    } else {
        return 0;
    }
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    let result;
    
    if (arr.length > 0){
        for (let i = 0; i < arr.length; i++) {
            if (arr.includes(word)) {
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    } else {
        return null;
    }
}
