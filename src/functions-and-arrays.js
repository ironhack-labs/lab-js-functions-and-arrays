// Iteration 1 | Find the Maximum
function maxOfTwoNumbers( num1, num2) {

if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1
  }
}
console.log(maxOfTwoNumbers(2, 18))

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsVariable) {

    if(wordsVariable.length === 0) {
        return null
    } 
    let longestWord = wordsVariable[0]

    for (let i=0 ; i < wordsVariable.length; i++){
        if( wordsVariable[i].length > longestWord.length) {
            longestWord = wordsVariable[i];
        }
    } 

return longestWord

}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersVariable) {

    let sum=0
     
    for (let i=0; i < numbersVariable.length ; i++){
        sum += numbersVariable[i] 
    }
    return sum;
} 
console.log(sumNumbers([6, 12, 1, 18, 13, 16, 2, 1, 8, 10]))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2Variable) {

if (numbers2Variable.length === 0) {

    return 0
}

let suma = 0;

for (let i=0 ; i < numbers2Variable.length; i++){
    suma += numbers2Variable [i]
}
let media = suma / numbers2Variable.length

return media
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsVariable) {

    if (wordsVariable.length === 0){
        return null;
    }
    for (let i=0; i<wordsVariable.length; i++) {
        
    }

}
