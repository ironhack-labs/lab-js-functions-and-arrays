// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {
    if (arrayWords.length === 0) {
        return null;
    }

    let masLarga = "";
    for (let i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i].length > masLarga.length) {
            masLarga = arrayWords[i];
        }

    }
    return masLarga;

}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNumbers) {
    let sumatoria = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        sumatoria += arrayNumbers[i];
    }
    return sumatoria;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNumbers2) {
    if (arrayNumbers2.length === 0) {
        return 0;
    }
    let promedio = sumNumbers(arrayNumbers2) / arrayNumbers2.length;
    return promedio;
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayWords2, word) {
    if (arrayWords2.length === 0) {
        return null;
    }
    return arrayWords2.includes(word);
}
