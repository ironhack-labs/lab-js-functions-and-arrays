// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n, n2) {
    if (n < n2) {
        return n2
    } else {
        return n
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {

    if (arrayOfWords.length === 0) {
        return 0
    }

    let longestWord = ""

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

    if (arrayOfNumbers.length === 0) {
        return 0
    }

    let sum = 0

    arrayOfNumbers.forEach((number) => {
        sum += number
    })

    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {

    if (arrayOfNumbers.length === 0) {
        return 0
    }

    let result = sumNumbers(arrayOfNumbers) / arrayOfNumbers.length

    return result

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if (arrayOfWords.length === 0) {
        return null
    }

    let result = arrayOfWords.includes(wordToSearch)

    return result
}
