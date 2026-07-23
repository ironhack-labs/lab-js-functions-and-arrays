// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    return number1 >= number2 ? number1 : number2;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    // Return 0 if wordsArray is empty
    if (wordsArray.length === 0) {
        return null;
    }

    let longestWord = wordsArray[0];

    for (let i = 1; i < wordsArray.length; i++) {
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }

    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    let sumOfNumbers = 0;

    for (let singleNumber of arrayOfNumbers) {
        if (typeof singleNumber !== 'number') {
            continue;
        }

        sumOfNumbers += singleNumber;
    }

    // In case of an empty array, the function will return 0
    return sumOfNumbers;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
    // Return 0 if arrayOfNumbers is empty
    if (arrayOfNumbers.length === 0) {
        return 0;
    }

    return sumNumbers(arrayOfNumbers) / arrayOfNumbers.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToFind) {
    // Return null if arrayOfWords is empty
    if (!Array.isArray(arrayOfWords) || arrayOfWords.length === 0) {
        return null;
    }

    for (let singleWord of arrayOfWords) {
        if (singleWord === wordToFind) {
            return true;
        }
    }

    return false;
}
