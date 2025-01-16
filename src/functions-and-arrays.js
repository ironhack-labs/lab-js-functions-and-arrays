// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    else if (number1 < number2) {
        return number2;
    }
    else { return number1, number2 }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrWords) {

    if (arrWords.length === 0) {
        return null;
    }
    let longestWord = arrWords[0]
    for (let i = 0; i < arrWords.length; i++) {

        if (longestWord.length < arrWords[i].length) {
            longestWord = arrWords[i];
        }

    }
    return longestWord;

}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNumbers) {
    let total = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        total += arrNumbers[i]
    }
    return total
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNumbers2) {
    if (arrNumbers2.length === 0) {
        return 0
    }
    else {
        return sumNumbers(arrNumbers2) / arrNumbers2.length
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords2, wordToSearch) {
    if (arrWords2.length === 0) {
        return null;
    }
    if (arrWords2.includes(wordToSearch)) { return true }
    else { return false }
}
