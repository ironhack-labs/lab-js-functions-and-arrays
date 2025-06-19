// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 === num2) {
        return num1
    }
    const maxNum = Math.max(num1, num2)
    return maxNum
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(myArray) {
    let maxWord = [];
    if (myArray.length === 0) {
        return null;
    }
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].length > maxWord.length) {
            maxWord = myArray[i]
        }
    }
    return maxWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(NumbArray) {
    let sum = 0;
    for (i = 0; i < NumbArray.length; i++) {
        sum += NumbArray[i]
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(NumbArray) {
    if (NumbArray.length === 0) {
        return 0;

    }
    let sum = 0;
    for (i = 0; i < NumbArray.length; i++) {
        sum += NumbArray[i]
    }
    return sum / NumbArray.length
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return null;
    }
    return arr.includes(word)
}
