// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {
    if (value1 > value2) {
        return value1
    }
    if (value1 < value2) {
        return value2
    }
    if (value1 === value2) {
        return value1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
let longestWord = ""

function findLongestWord() {
    if (words.length === 0) {
        return 0;
    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sum = 0

function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0
    } else
        for (let i = 0; i < numbers.length; i++)
            sum += numbers[i]
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;
    if (numbers2.length === 0) {
        return 0
    } else
        for (var i = 0; i < numbers2.length; i++) {
            sum += numbers2[i];
        }
    return sum / numbers2.length;
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() { }
