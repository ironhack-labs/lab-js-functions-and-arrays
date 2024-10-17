// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

    if (words.length === 0) {
        return null;
    }

    let longestWords;
    let maxLength = 0;
    let currentWordName;

    for (let i = 0; i < words.length; i++) {
        let currentWordLength = words[i].length;

        if (currentWordLength > maxLength) {
            maxLength = currentWordLength;
            currentWordName = words[i];
            longestWords = words[i];
        } else if (currentWordLength === maxLength) {
            longestWords = currentWordName;
        }
    }
    console.log(longestWords);
    return longestWords;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    if (numbers2.length === 0) {
        return 0;
    }

    let sum2 = 0;
    for (let i = 0; i < numbers2.length; i++) {
        sum2 += numbers2[i];
    }
    let promedio = sum2 / numbers2.length;
    return promedio;
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, search) {
    if (words2.length === 0) {
        return null;
    }

    busqueda = false;
    for (let i = 0; i < words2.length; i++) {
        if (words2[i] === search) {
            busqueda = true;
        }
    }
    return busqueda;
}