// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1
    } else if (number1 < number2) {
        return number2
    } else if (number1 === number2) {
        return number1 || number2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    let longestWord = ""

    if (arrayOfWords.length === 0) {

        return 0
    }

    arrayOfWords.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    })

    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {

    let sum = 0

    arrayOfNumbers.forEach((number) => {
        sum += number
    })

    return sum
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {

    let sum = 0

    arrayOfNumbers.forEach((number) => {
        sum += number
    })

    if (arrayOfNumbers.length === 0) {
        return 0
    } else {
        const average = sum / arrayOfNumbers.length
        return average
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if (arrayOfWords.length === 0) {
        return null
    }
    return arrayOfWords.includes(wordToSearch)
}

