// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {

    if (number1 > number2) {
        return number1
    }
    else if (number2 > number1)
        return number2

    else {
        return number1, number2

    }

}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWord) {

    let longestWord = ""

    if (arrayOfWord.length === 0) {
        return null
    }

    else {
        arrayOfWord.forEach((element) => {

            if (element.length > longestWord.length)

                longestWord = element
        })
        return longestWord
    }

}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(listOfNumbers) {

    let sum = 0

    listOfNumbers.forEach((element) => {
        sum += element
    })

    return sum
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(listOfNumbers) {

    if (listOfNumbers.length === 0) {
        return 0
    }

    let sum = 0

    listOfNumbers.forEach((element) => {
        sum += element
    })

    return sum / listOfNumbers.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {

    if (arrayOfWords.length === 0) {
        return null
    }

    let eureka = false

    arrayOfWords.forEach((item) => {

        if (word === item) {
            eureka = true
        }
    })

    return eureka


}
