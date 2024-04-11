// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, SecondNumber) {
    if (firstNumber > SecondNumber) {
        return firstNumber;
    } else {
        return SecondNumber;
    };
};




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayGiven) {
    if (arrayGiven.length !== 0) {
        let lengthList = [];
        for (i of arrayGiven) {
            lengthList.push(i.length);
        };
        const maxLength = Math.max(...lengthList);
        const indexMaxLength = lengthList.indexOf(maxLength);
        return arrayGiven[indexMaxLength];
    } else {
        return null;
    };
};




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayGiven) {
    let sum = 0;
    arrayGiven.forEach(function (number) { sum += number; });
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayGiven) {
    if (arrayGiven.length != 0) {
        return sumNumbers(arrayGiven) / arrayGiven.length;
    } else {
        return 0;
    };
};




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayGiven, wordToFind) {
    if (arrayGiven.length != 0){
        let flag = false;
        arrayGiven.forEach(function (element) { if (element === wordToFind) { flag = true } })
        return flag
    } else {
        return null
    }
}