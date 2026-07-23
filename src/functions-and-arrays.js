// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

    let resultIt1 = ''

    if (num1 > num2){
        resultIt1 = num1
    } else if (num1 < num2){
        resultIt1 = num2
    } else resultIt1 = num1

    return resultIt1

}

console.log(maxOfTwoNumbers(24, 2))


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

const testarray2 = ["helloooooooo", "hello", "ill"];



function findLongestWord(array) {

    if (array.length === 0){
        return null
    }

    let longestElement = array[0]

    for (let i = 0; i < array.length; i++){
        let currentElement = array[i]

        if (currentElement.length > longestElement.length){
        longestElement = currentElement 
        }

    }

    return longestElement

}

//console.log(findLongestWord(words))

console.log(findLongestWord(testarray2))




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {

    let totalSum = 0

    for (let i = 0; i < array.length; i++){
       
        totalSum =  totalSum + array[i]

    }

    return totalSum

}

console.log(sumNumbers(numbers))




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {

    let sum = 0
    let average = 0

    for (let i = 0; i < array.length; i++){

        sum = (sum + array[i])

        average =  sum / array.length

    }

    return average
}

console.log(averageNumbers(numbers2))


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word4) {

    if (!array || array.length === 0) { // if array doesn't exist OR if it is empty
        return null
    }

    let resultIt5 = false

    if (array.includes(word4) === true){
        resultIt5 = true
    }

      return resultIt5

    
}

console.log(doesWordExist(words2, "machine"))