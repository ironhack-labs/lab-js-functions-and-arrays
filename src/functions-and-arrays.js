// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    let result= 0
    if(number1>number2){
        result += number1
    } else if(number2>number1){
        result +=number2
    } else {
       result += number1
    }
    return result
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(word) {
   if (word.length === 0){
    return null
   }
   let longestWord= ""   
    for (let i = 0 ; i < word.length ; i++) {
    if(word[i].length > longestWord.length) {
        longestWord = word[i]
    }
}
    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(number) {
    let result= 0
    for (let i=0 ; i< number.length; i++) {
        result += number[i]
    }
    return result
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(number2) {
   if(number2.length === 0) {
    return 0;
   }
    let result2= 0
    for (let j=0 ; j< number2.length; j++) {
        result2 += number2[j]
    }
    return result2 /number2.length
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayWords, word3) {
    if (arrayWords.length === 0){
        return null
    }
    for(let k= 0 ; k < arrayWords.length ; k++) {
        if (word3 === arrayWords[k]){
            return true
        } 
    }
return false
}
