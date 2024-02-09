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
// const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

    let longestWord = ''
    words.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    })

    return longestWord ? longestWord : 0

}




// Iteration 3 | Sum Numbers
// const theseNnumbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let counter = 0
    numbers.forEach((number) => {
        counter += number
    })
    return counter
}




// Iteration 4 | Numbers Average
// const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    return numbers.length ? sumNumbers(numbers)/numbers.length : 0
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length < 1) {
        return null
    }

    let exists = false

    arr.forEach((element) => {
        if (element === word) {
            exists = true
        }
    })

    return exists
}