// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return num1;
    }
}

console.log(maxOfTwoNumbers(3, 9));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length === 0) {
        return null;
    }
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(words));






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    let average = total / arr.length;
    return average;
}
console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordFind) {
    if (arr.length === 0) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === wordFind) {
            return true;
        }
    }
        return false;
}
console.log(doesWordExist(words2, "truth"));
console.log(doesWordExist(words2, "world"));