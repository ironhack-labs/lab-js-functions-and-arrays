// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
    if(firstNumber>secondNumber){
        return firstNumber
    }
    else{
        return secondNumber
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if(arrayOfWords.length === 0 ){
        return null
    }
    let longestWord = arrayOfWords[0];

    for (let i = 0; i < arrayOfWords.length; i++) {
        console.log(arrayOfWords[i].length);
        if(arrayOfWords[i].length > longestWord.length){
            longestWord = arrayOfWords[i];
        }
    }
    return longestWord
}
findLongestWord(words)



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    if (arrayOfNumbers.length === 0) {
        return 0;
    }
    let sum = 0
    
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]
        
    }
    return sum
}
console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAverage) {
    if (numbersAverage.length === 0) {
        return 0
    }
    let sum = 0
    for (let i = 0; i < numbersAverage.length; i++) {
        sum += numbersAverage[i];
        
    }
    let average = sum/numbersAverage.length
    return average
}
console.log(averageNumbers(numbers2));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(findElements, wordToFind) {
    if (findElements.length === 0){
        return null
    }
    for (let i = 0; i < findElements.length; i++) {
        if (findElements[i] === wordToFind) {
            return true
        }
        
    }
    return false
}
