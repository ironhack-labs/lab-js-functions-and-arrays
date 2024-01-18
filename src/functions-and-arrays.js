// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1
    } else if (number2 > number1) {
        return number2
    } else if (number1 === number2) {
        return number1, number2
    }

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"]

function findLongestWord(arrayWords) {
    if (arrayWords.length === 0) {
        return 0
    }
    let longest = " "
    arrayWords.forEach((word) => {
        if (word.length > longest.length) {
            longest = word
        }
    })
    return longest
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    let sum = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]
    }
    return sum
}

// let sum = 0
// function sumNumbers(numbersValue) {
//     if (numbersValue.length === 0) {
//         return 0
//     }
//     let sum = 0
//     numbersValue.forEach((number) => {
//         sum += number
//     });
//     return sum
// }





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
    let sum = 0
    let result = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]
        result = sum / arrayOfNumbers.length
    }
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