// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 < num2){
        return num2
    }
    else {
        return num1
  }
}




// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(words) {
    if (words.length === 0) {
        return null
    }
    let longestWord = words[0]
    for (let i = 1; i < words.length ; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord
}

console.log (findLongestWord(words))


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let suma = 0
    for (let i=0; i< numbers.length; i++){
       suma += numbers[i]
    }
    return suma

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0){
        return 0
    }
 let suma = 0
    for (let i=0; i< numbers2.length; i++){
       suma += numbers2[i]
    }
    return suma/numbers2.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToFind) {
    if (words2.length === 0){
        return null
    }

    for (let i=0; i<words2.length; i++){
        if(words2[i] === wordToFind){
            return true
        }
       
    }
    return false;
       
}
