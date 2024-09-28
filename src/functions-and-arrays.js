// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else if (n2 > n1) {
        return n2;
    } else {
        return n1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    let longestWord = null;
    for (let i = 0; i < arrayOfWords.length; i++) {
        const currentWord = arrayOfWords[i];
        if (!longestWord || currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i];
        sum += number;
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
    let average = 0;
    if (arrayOfNumbers.length === 0) {
        return 0;
    }
    return sumNumbers(arrayOfNumbers) / arrayOfNumbers.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if (arrayOfWords.length === 0) {
        return null;
    }
    return arrayOfWords.includes(wordToSearch);
}
