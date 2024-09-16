// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2){
    if(value1 > value2){
        return value1
    } else if (value2 > value1){
        return value2
    } else {
        return value1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if(arrayOfWords.length === 0){
        return 0
    } else if (arrayOfWords.length === 1){
        return arrayOfWords[0]
    } else {
        let maxLength = ""
        for (let i = 0; i < arrayOfWords.length; i++){
        if (maxLength.length < arrayOfWords[i].length){
            maxLength = arrayOfWords[i]
        }}
        return maxLength 
    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    if(arrayOfNumbers.length === 0){
        return 0
    } else if (arrayOfNumbers.length === 1){
        return arrayOfNumbers[0]
    } else {
        let sum = 0
        for (let i = 0; i < arrayOfNumbers.length; i++){
            sum += arrayOfNumbers[i]
        } return sum
    }

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageOfNumbers) {
    if (averageOfNumbers.length === 0){
        return 0
    } else if (averageOfNumbers.length === 1){
        return averageOfNumbers[0]
    } else {
        let sum = 0
        for(let i = 0; i < averageOfNumbers.length; i++){
            sum += averageOfNumbers[i]
        } return sum / averageOfNumbers.length
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if(arrayOfWords.length === 0){
        return null
    } else if (arrayOfWords.includes(wordToSearch)){
        return true
    } else {
        return false
    }
}
