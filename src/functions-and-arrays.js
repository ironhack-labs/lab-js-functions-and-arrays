// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1
    } else {
        return number2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    var lgth = 0;
    var longest;

    if (arr.length === 0) {
        return null
    } else if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > lgth) {
                var lgth = arr[i].length;
                longest = arr[i];
            }
        }
        return longest
    }
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;
    for (value of arr) {
        sum += value
    }
    return sum
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length == 0) {
        return 0
    } else {
        let average = sumNumbers(arr) / arr.length;
        return average;
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordToSearch) {
    if (arr.length == 0) {
        return null
    } else {
        for (value of arr) {
            if (value === wordToSearch) {
                return true
            }
        }
        return false
    }
}
