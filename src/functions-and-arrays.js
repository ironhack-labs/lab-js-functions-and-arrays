// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber,secondNumber) {
    
    let bothNumbers = [firstNumber,secondNumber];

    if (firstNumber>secondNumber) {
        return firstNumber;
    }
    else  {return secondNumber}
}

console.log(bothNumbers)


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    
    if (!array.length) {return null;}

    let long1 = "";
    
    for (i = 0; i < array.length; i++) {

        if (array[i].length > long1.length) {
            long1 = array[i];
          }
    }
    return long1;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sum = 0;
    for (let i=0; i<array.length; i++) {
        sum += array[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if (!array.length) {return 0}
return sumNumbers(array)/array.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array,word) {
    if (!array.length) {return null}
    for (let i=0; i < array.length; i++) {
        if (word === array[i]) {
            return true
        }
    } return false
}
