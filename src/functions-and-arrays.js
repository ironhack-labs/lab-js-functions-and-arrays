// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {

    if (a > b) {
        return a;
    }
    else if (a < b) {
        return b;
    }

    else if (a === b) {
        return a, b;
    }

}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

    // Si el array words está vacío, devolver null

    if (!words || words.length === 0) {
        return null;
    }

    // Coger elementos del array y leer su longitud, usando el método forEach

    let longest = "";
    words.forEach(word => {
        if (word.length > longest.length) {
            longest = word;
        }
    });

    return longest;

}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    // Si el array está vacío, devolver 0

    if (!numbers || numbers.length === 0) {
        return 0;
    }
    // Coger elementos del array y sumarlos 
    let sumNumbers = 0;

    numbers.forEach(number => {

        sumNumbers += number;

    })

    return sumNumbers;

}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    // Si el array está vacío, devolver 0

    if (!numbers2 || numbers2.length === 0) {
        return 0;
    }

    // Sumar todos los números de los elementos del array 
    let sumNumbers2 = 0;
    numbers2.forEach(numbers => {
        sumNumbers2 += numbers;
    }
    )

    // Declarar la media haciendo la operación de división y devolver el resultado

    let average = sumNumbers2 / numbers2.length;

    return average;

}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToSearch) {
    // Si el array está vacío, devolver null 
    if (!words2 || words2.length === 0) {
        return null;
    }

    let wordSearched = false;

    // Comparar la palabra buscada con elementos del array, si coinciden, asigna true a wordSearched
    
    words2.forEach(word => {
        if (word === wordToSearch) {
            wordSearched = true;
        }
    });

    return wordSearched;
}