// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber;
    } else {
        return secondNumber;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }

    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    let counter = 0;

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        counter += number;
    }
    return counter;

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {

    let sum = 0;

    if (numbers.length == 0) {
        return 0;
    }

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        sum += number;
    }


    return sum / numbers.length
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToSearch) {
    if (words.length == 0) {
        return null;
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word === wordToSearch) {
            return true;
        } 
    }
    return false;
}
