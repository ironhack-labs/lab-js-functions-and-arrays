// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber
    }
    else {
        return secondNumber
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if(arrayOfWords.length === 0){
        return null
    }
let longestWord = arrayOfWords[0];

for (let i = 0; i < arrayOfWords.length; i++) {
     if (arrayOfWords[i].length > longestWord.length) {
        longestWord = arrayOfWords[i]
      }
   }
   return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    if (arrayOfNumbers.length === 0) {
        return 0
    }
    let sumOfNumbers = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sumOfNumbers += arrayOfNumbers[i];
    }
    return sumOfNumbers
}
sumNumbers(numbers);




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers2) {
    if (arrayOfNumbers2.length === 0) {
        return 0
    }
    let averageOfNumbers = 0;
    for (let i = 0; i < arrayOfNumbers2.length; i++) {
        averageOfNumbers += arrayOfNumbers2[i];
        
    }
    return averageOfNumbers / arrayOfNumbers2.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords2, wordToFind) {
    if (arrayOfWords2.length === 0) {
        return null
    }

    let flag = false

    for (element of arrayOfWords2){
        if (element === wordToFind){
            flag = true
        }
    } 
    return flag
 }
    
    
