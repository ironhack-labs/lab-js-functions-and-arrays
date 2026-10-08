// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a
    } else if (a < b) {
        return b
    } else {
        return a
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longestWord = ''

    // my first thought to check for an empty array was with arr.length === 0, but googled it and found out this way is stronger.
    if (!Array.isArray(arr) || !arr.length) {
        return null
    } else if (arr.length === 1) {
        return arr[0]
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        } // here a made an "else if (arr[i].length === longestWord.length) {continue}" but then I realized I didn't need it.
    }

    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let averageNumber = sumNumbers(arr) / arr.length

    if (!Array.isArray(arr) || !arr.length) {
        averageNumber = 0
    }

    return averageNumber
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (!Array.isArray(arr) || !arr.length) {
        return null
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true
        } 
    }

    return false
}
