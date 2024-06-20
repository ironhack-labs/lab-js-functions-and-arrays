// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

    if (num1 > num2){
        return num1
    } else if (num2 > num1){
        return num2
    } else if (num1 === num2){
        return num1

    }
    

}

console.log(maxOfTwoNumbers(2,8))


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(longArray){

let longestword = 0;

if (longArray.length === 0){
return null
}

for (let i = 0; i < longArray.length; i++){
    if (longArray[i] > longestword){
        longestword = longArray[i]
    } 
} 

}

console.log(findLongestWord(words))

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNumbers) {
let suma = 0

for (let i = 0; i < arrayNumbers.length; i++){
    suma += arrayNumbers[i]
}
return suma

}

console.log(sumNumbers(numbers))


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(palabras, otros) {

    if (palabras.length === 0){
        return null

    }

    if (palabras.includes(otros)=== true){
return true
    } else if (palabras.includes(otros) === false){
        return false
    }
    
    console.log(doesWordExist(words2, "machine"))
}
