// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {
    if (value1 > value2) {
        return value1
    }
    if (value1 < value2) {
        return value2
    }
    if (value1 === value2) {
        return value1, value2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {
    if (arrayWords.length === 0) {
        return 0
    }
    let longest = ""
    arrayWords.forEach((word) => {
        if (word.length > longest.length) {
            longest = word
        }
    })
    return longest
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sum = 0
function sumNumbers(numbersValue) {
    if (numbersValue.length === 0) {
        return 0
    }
    let sum = 0
    numbersValue.forEach((number) => {
        sum += number
    })
    return sum
}





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAverage) {
    if (numbersAverage.length === 0) {
        return 0
    }
    const result = sumNumbers(numbersAverage) / numbersAverage.length
    return result
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(listWords, searchWord) {
    if (listWords.length === 0) {
        return null
    }
    else if (listWords.includes(searchWord)) {
        return true
    }
    else if (!listWords.includes(searchWord)) {
        return false
    }
}
