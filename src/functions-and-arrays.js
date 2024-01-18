// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2){
        return number1
    }
    else if (number2 > number1){
        return number2
    }
    else {
        return (number1)
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if (arrayOfWords.length === 0){
        return 0
    }
    let longestWord = ''
    for (let i = 0; i < arrayOfWords.length; i++){
        if (arrayOfWords[i].length > longestWord.length){
          longestWord = arrayOfWords[i]  
        }
        else {continue
        }
    }
  return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    let totalNumbers = 0
    if (arrayOfNumbers.length === 0){
        return 0
    }
    for (let i = 0; i < arrayOfNumbers.length; i++){
        totalNumbers += arrayOfNumbers[i]
    }
    return totalNumbers
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers2) {
    let totalNumbers = 0
    if (arrayOfNumbers2.length === 0){
        return 0
    }
    for (let i = 0; i < arrayOfNumbers2.length; i++){
        totalNumbers += arrayOfNumbers2[i]
    }
    let averagedNumbers = totalNumbers / arrayOfNumbers2.length
    return averagedNumbers
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords2, wordToSearch) {
    if (arrayOfWords2.length === 0){
        return null
    }
    if (arrayOfWords2.includes(wordToSearch)){
        return true
    }
    else return false
}
