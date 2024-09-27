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

function findLongestWord(wordsArray) {
    if (wordsArray.length === 0) {
        return 0
    } else if (wordsArray.length === 1) {
        return wordsArray[0]
    } else {
        let longestWord = ""
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].length > longestWord.length) {
                longestWord = wordsArray[i]
            }
        }
        return longestWord
    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    if (numbersArray.length === 0) {
        return 0
    } else if (numbersArray.length === 1) {
        return numbersArray[0]
    } else {
        let sumNumbers = 0
        for (let i = 0; i < numbersArray.length; i++) {
            sumNumbers += numbersArray[i]
        }
        return sumNumbers
    }
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray) {
    if (numArray.length === 0) {
        return 0
    } else if (numArray.length === 1) {
        return numArray[0]
    } else {
        let sum = 0
        for (let i = 0; i < numArray.length; i++) {
            sum += numArray[i]
        }
        return sum / numArray.length
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {
    if (wordsArray.length === 0) {
        return null
    } else {
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray.indexOf(wordToSearch) != -1) {
                return true
            } else {
                return false
            }
        }
    }
}
