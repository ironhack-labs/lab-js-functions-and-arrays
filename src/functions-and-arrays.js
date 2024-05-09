// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

maxOfTwoNumbers(10,5);



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord() {

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sumOfNums = 0
function sumNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        sumOfNums += numbers[i];
    }
    return sumOfNums;
}

sumNumbers();



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
    for (let i=0; i<numbers2.length; i++) {
        let totalNum = numbers++;
        let avgNum = totalNum/numbers2.length
    }
    return avgNum;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
