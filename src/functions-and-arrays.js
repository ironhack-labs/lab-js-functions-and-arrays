// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else if (a === b) {
        return a && b;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(words) {
    if (words.length === 0) {
        // Return null if the array is empty
        return null;
    }
    // Initialize to an empty string
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; // Update longestWord if found longer word
        }
    }
    // Return the longest word found
    return longestWord;
}

console.log(findLongestWord(words));
console.log(findLongestWord([]));
console.log(findLongestWord(["pearl"]));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr.reduce((acc, curr) => acc + curr, 0);
    }
}

console.log(sumNumbers(numbers));
console.log(sumNumbers([]));
console.log(sumNumbers([9]));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        // Return 0 if the array is empty
        return 0;
    } else {
        const sum = arr.reduce((acc, curr) => acc + curr, 0);
        return sum / arr.length; // Return the average
    }
}

console.log(averageNumbers(numbers2));
console.log(averageNumbers([]));
console.log(averageNumbers([5]));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordToSearch) {
    if (arr.length === 0) {
        // Return null if the array is empty
        return null;
    }

    // Iterate through the array with a for loop
    for (let i = 0; i < arr.length; i++) {
        // If current item is equals to the word to search, return true
        if (arr[i] === wordToSearch) {
            return true;
        }
    }
    // If word not found, return false
    return false;
}

const result = doesWordExist(words2, 'eating');
console.log(result); 