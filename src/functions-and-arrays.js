// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {
    if (value1 > value2) {
        return value1
    } else if (value2 > value1) {
        return value2
    } else if (value1 === value2) {
        return value1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length === 0) {
        return null
    }
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(eachNumber) {
    let sum = 0
    for (let i = 0; i < eachNumber.length; i++) {
        sum += eachNumber[i]
    }
    return sum
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(eachNumber) {
    let sum = 0
    let average = 0
    for (let i = 0; i < eachNumber.length; i++) {
        sum += eachNumber[i]
        average = sum / eachNumber.length
    }
    return average
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordToSeach) {

    if (arr.length === 0) {
        return null
    } else if (arr.includes(wordToSeach)) {
        return true
    } else if (!arr.includes(wordToSeach)) {
        return false
    }
}

