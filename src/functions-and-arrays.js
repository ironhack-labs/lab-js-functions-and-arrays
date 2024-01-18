// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {
    if (value1 > value2) {
        return value1
    }
    if (value1 < value2) {
        return value2
    }
    if (value1 === value2) {
        return value1
    }

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {
    if (arrayWords.length === 0) {
        return 0
    }
    else if (arrayWords.length === 1) {
        return arrayWords[0]
    }
    else {
        let longestWord = ""
        for (let i = 0; i < arrayWords.length; i++) {
            if (longestWord.length < arrayWords[i].length) {
                longestWord = arrayWords[i]
            }
        }
        return longestWord
    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayAverage) {
    if (arrayAverage.length === 0) {
        return 0
    } else if (arrayAverage.length === 1) {
        return arrayAverage[0]
    } else {

        let sum = 0
        for (let i = 0; i < arrayAverage.length; i++) {
            sum += arrayAverage[i]
        }
        const prom = sum / arrayAverage.length
        return prom
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayWords2, wordsToSearch) {
    if (arrayWords2.length === 0) {
        return null
    } else if (arrayWords2.includes(wordsToSearch)) {
        return true
    } else if (!arrayWords2.includes(wordsToSearch)) {
        return false
    }
}
