// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return (num1, num2)
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    let longerString = arrayOfWords[0]
    if (arrayOfWords.length === 0) {
        return null
    }
    for (i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longerString.length) {
            longerString = arrayOfWords[i]
        }
    } return longerString

}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    let counter = 0
    for (i = 0; i < arrayOfNumbers.length; i++) {
        counter += arrayOfNumbers[i]
    } return counter
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(number) {
    let result = 0
    if (number.length === 0) {
        return 0
    }
    for (i = 0; i < number.length; i++) {
        result += number[i]
    } return result / number.length
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    let result
    if (arrayOfWords.length === 0) {
        return null
    }
    for (let i = 0; i < arrayOfWords.length - 1; i++) {
        if (wordToSearch === arrayOfWords[i]) {
            result = true
        } else if (wordToSearch !== arrayOfWords[i]) {
            result = false
        }
    } return result
}


