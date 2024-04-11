// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else return num2
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordList) {
    if (wordList.length > 0) {
        let longest = ''
        wordList.forEach((word) => {
            if (word.length > longest.length) longest = word
        })
        return longest
    } else return null
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
    let totalSum = 0
    numberArray.forEach((num) => {
        totalSum += num
    })
    return totalSum
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArray) {
    let totalSum = 0
    const totalNumbers = numberArray.length
    if (totalNumbers !== 0) {
        numberArray.forEach((num) => {
            totalSum += num
        })
        return totalSum / totalNumbers
    }
    return totalNumbers
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray, word) {
    const itsIncluded = wordArray.includes(word)
    if (wordArray.length !== 0) {
        return itsIncluded
    } else return null
}
