// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else if (number2 > number1) {
        return number2;
    } else {
        return number1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if (array.length === 0) {
        return null;
    }

    let longestWordIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i].length > array[longestWordIndex].length) {
            longestWordIndex = i;
        }
    }

    return array[longestWordIndex];
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    let sumOfNumbers = 0;

    for (let singleNumber of arrayOfNumbers) {
        sumOfNumbers += singleNumber;
    }

    return sumOfNumbers;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
    if (arrayOfNumbers.length === 0) {
        return 0;
    }

    let sumOfNumbers = 0;

    for (let singleNumber of arrayOfNumbers) {
        sumOfNumbers += singleNumber;
    }

    return sumOfNumbers / arrayOfNumbers.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToFind) {
    if (arrayOfWords.length === 0) {
        return null;
    }

    for (let singleWord of arrayOfWords) {
        if (singleWord === wordToFind) {
            return true;
        }
    }

    return false;
}
