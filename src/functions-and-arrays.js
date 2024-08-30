// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 <num2){
        return num2
    }else if (num2<num1){
        return num1
    }else if (num1===num2){
        return num1
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(arrayOfWords) {
let longestElement = ""
    if (arrayOfWords.length === 0){
        return null
    }for (let i = 0; i<arrayOfWords.length; i++){
        if (arrayOfWords[i].length > longestElement.length){
            longestElement = arrayOfWords[i]
        }
     }return longestElement
 }

console.log(findLongestWord(words))




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
    let sumNum = 0
    for (let i = 0; i<arrNum.length; i++){
         sumNum +=arrNum[i]
    }return sumNum
}
            
console.log (sumNumbers (numbers))





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    let sumNum = 0
    for (let i = 0; i<array.length; i++){
         sumNum +=array[i]
    }return sumNum
    
    sumNum/array.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist (arrayOfWords, wordToSearch){
    if(arrayOfWords.length === 0){
        return null
    }for (let i = 0; i<arrayOfWords.length; i++){
        if (arrayOfWords[i] !== wordToSearch){
            return false
        } arrayOfWords === wordToSearch
            return true
        }
    }

console.log(doesWordExist(words2, "dog"))