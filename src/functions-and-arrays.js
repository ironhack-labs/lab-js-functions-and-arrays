// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    return Math.max(number1, number2)
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if (array.length !== 0) {
        let arrayLength = []
        array.forEach(function(element) {
            arrayLength.push(element.length);
        })
        let biggest = 0;
        let place;
        arrayLength.forEach(function(element, index) {
            if (element > biggest) {
                biggest = element;
                place = index;
            }
        })
        return array[place];
    } else {
        return 0
    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    if (array.length === 0) {
        return 0;
    } else if (array.length === 1) {
        return array[0];
    } else {
        let sum = 0;
        array.forEach(function(element) {
            sum += element;
        })
        return sum;
    }
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if (array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        array.forEach(function(element) {
            sum += element;
        })
        return sum/array.length;
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, wordToFind) {
    if (array.length === 0) {
        return null;
    } else {
        let wordFound = false;
        array.forEach(function(element) {
            if (element === wordToFind) {
                wordFound = true;
            }
        })
        return wordFound;
    }
}
