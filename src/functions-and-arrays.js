// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

    if (num1 > num2) {
        return num1;
    }
    else if (num2 >= num1) {
        return num2;
    }

}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    let longestWord;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (longestWord === undefined || word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let total;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (total === undefined) {
            total = 0;
        }
        total = total + number;
        console.debug('Total', total);
    }
    return total;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }

    let total = sumNumbers(numbers2);
    let numChar = numbers2.length;

    return total / numChar;
}
console.log(averageNumbers(numbers2));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, matchingWord) {
    if (words2.length === 0) {
        return null;
    }
    for (let i = 0; i < words2.length; i++) {
        const myWord = words2[i];
        if (myWord === matchingWord) {
            return true;
        }
    }
    return false;
}