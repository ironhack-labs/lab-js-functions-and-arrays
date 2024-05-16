// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    return a < b ? b : a;
}
console.log(maxOfTwoNumbers(50, 10));

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    if (!words) {
        return null;
    }
    for (let index = 0; index < words.length; index++) {
        longestWord = longestWord.length < words[index].length ? words[index] : longestWord;
    }
    return longestWord;
}
console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    return sum;
}
console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    const sum = sumNumbers(numbers2);
    return sum / numbers2.length;
}
console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if (!words) {
        return null;
    }
    for (let index = 0; index < words.length; index++) {
        if (word === words[index]) {
            return true;
        }
    }
    return false;
}
console.log(doesWordExist(words2, "subsets"));
