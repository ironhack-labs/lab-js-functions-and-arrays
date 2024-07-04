// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrOfWords) {
    let longestString = ""

    if (arrOfWords.length === 0) {
        return null
    } else {
        for (let i = 0; i < arrOfWords.length; i++) {
            let word = arrOfWords[i]
            if (word.length > longestString.length) {
                longestString = word
            } else if (arrOfWords.length === 0) {
                longestString = null
            }
        }
        return longestString
    }
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrOfNum) {
    let sum = 0
    for (let i = 0; i < arrOfNum.length; i++) {
        sum += arrOfNum[i]
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrOfNum) {
    let sum = 0
    if (arrOfNum.length === 0) {
        return 0
    } else {
        for (let i = 0; i < arrOfNum.length; i++) {
            sum += arrOfNum[i]
        }
        return sum / arrOfNum.length
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrOfWords, word) {
    if (arrOfWords.length === 0) {
        return null
    } else if (arrOfWords.includes(word)) {
        return true
    } else {
        return false
    }
}
