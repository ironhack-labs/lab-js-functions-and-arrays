// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
if(num1 < num2){
    return num2
} else if (num1>num2){
    return num1
} else{
    return num1
}
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(allWords) {
    
    if (allWords.length === 0){
        return null
    }
    let longestWord = allWords[0]
    for (let i = 1; i< allWords.length; i++){
        if(allWords[i].length > longestWord.length ){
            longestWord = allWords[i]
        }
    }
    return longestWord
}
    
    



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sum = 0
    for (let i = 0; i< array.length; i++){
        sum += array[i]
    }
    return sum
       }



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(secondArray) {
    if(secondArray.length === 0){
        return 0
    }
    const sum2 = sumNumbers(secondArray)
    const average = sum2 / secondArray.length
   return average
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray, wordToSearch) {
    if( wordArray.includes(wordToSearch)){
        return true
    } else if (wordArray.length === 0 || wordToSearch.length === 0){
        return null
    }else {
        return false
    }
}
