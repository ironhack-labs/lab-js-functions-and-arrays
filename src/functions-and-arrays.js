// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1
    }
    else if(num1 < num2){
        return num2
    }
    else{
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if(arrayOfWords.length === 0){
        return 0
    }
    var longestWord = ""
    for(let i=0; i<arrayOfWords.length; i++){
        if(arrayOfWords[i].length > longestWord.length){
            longestWord = arrayOfWords[i]
        }
    }
    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    if(arrayOfNumbers.length === 0){
        return 0
    }
    var sum = 0;
    for(let i=0; i<arrayOfNumbers.length; i++){
        sum += arrayOfNumbers[i];
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
    if(arrayOfNumbers.length === 0){
        return 0
    }
    return sumNumbers(arrayOfNumbers)/arrayOfNumbers.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {
    if(arrayOfWords.length === 0){
        return null
    }   
    for(let i=0;i<arrayOfWords.length;i++){
        if(word === arrayOfWords[i]){
            return true
        }
    }
    return false
}
