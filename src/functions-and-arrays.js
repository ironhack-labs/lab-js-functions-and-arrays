// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    if(typeof num1 === "number" && typeof num1 === "number") {
        if(num1 >= num2) return num1;
        else return num2;
    } else console.log("maxOfTwoNumbers(): need two arguments of type number");
}


// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if(arr.length === 0) return null;
    // remove elements from array if not type of "string"
    arr = arr.filter(e => {
        return typeof e === "string";
    });
    let maxWord = "";
    arr.forEach(word => {
        if(word.length > maxWord.length) maxWord = word;
    });
    return maxWord;
}


// Iteration 3 | Sum Numbers

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;
    // remove elements from array if not type of "number"
    arr = arr.filter(e => {
        return typeof e === "number";
    });
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}


// Iteration 4 | Numbers Average

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if(arr.length === 0) return 0;
    return sumNumbers(arr) / arr.length;
}


// Iteration 5 | Find Elements

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if(words.length === 0) return null;
    // remove elements from array if not type of "string"
    words = words.filter(e => {
        return typeof e === "string";
    });
    let found = false;
    words.forEach(w => {
        if(word.localeCompare(w) === 0) found = true;
    });
    return found;
}
