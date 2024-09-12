// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return num2
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(arr) {
    if (arr.length == 0){
        return 0;
    }
        let longestWord= [];
        arr.forEach((currentElement) => {
            if (currentElement.length > longestWord.length) {
                longestWord= currentElement;
            }
        })
        return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(numbersArray) {
    if (numbersArray.length == 0){
        return 0
    }
        let sum=0;
        for (let i=0; i< numbersArray.length; i++) {
          sum += numbersArray[i];
        }
        return sum;

}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if (numbersArray.length == 0){
        return 0
    }
    let avr=0;
    let sum=0;
    for (let i=0; i< numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    avr= sum/ numbersArray.length;
    return avr;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length == 0){
        return null
    }
    if (arr.includes(word) === true){
        return true
    } else {
        return false
    }
}
