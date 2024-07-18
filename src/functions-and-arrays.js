// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    }
    else if (a < b) {
        return b;
    }
    else {
        return a;
    }
};

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longest = '';
    if (words.length === 0) {
        return null;
    }
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length)
            longest = words[i];
    }
    return longest;
};

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < numbers.length ; i++){
        result += numbers[i];
    }
    return result;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) { 
    if (numbers.length === 0) {
        return 0;
    }
    let average = sumNumbers(numbers) / numbers.length;
    for (let i = 0; i < numbers.length ; i++){
        return average;
    }
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordSearch) { 
    if (words2.length === 0) {
        return null;
    }
    if (words2.includes(wordSearch)) {
        return true;
     }
     else {
        return false;
     }
}