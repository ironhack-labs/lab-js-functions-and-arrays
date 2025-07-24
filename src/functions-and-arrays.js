// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    return Math.max(num1, num2);
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrWords) {
    let longestWord = null;
    for (let i = 0; i < arrWords.length; i++){
        if (!longestWord || arrWords[i].length > longestWord.length) {
            longestWord = arrWords[i];
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNumbers) {
    let sum = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        sum += arrNumbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNumbers) {
    return (arrNumbers && arrNumbers.length !== 0) ? sumNumbers(arrNumbers) / arrNumbers.length : 0;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords, word2Search) {
    let found = null;
    if (arrWords && arrWords.length !== 0) {
        found = false, i = 0;
        while (i < arrWords.length && !found) {
            found = (arrWords[i] === word2Search);
            i++;
        }
    }
    return found;
}
