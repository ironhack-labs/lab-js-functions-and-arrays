// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    // Math.max()
    return Math.max(num1, num2)

    // if statement
    /* if (num1 > num2) {
        return num1;
    } else {
        return num2;
    } */
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(word) {
    if (word.length === 0) {
        return null;
    }

    let longestWord = '';
    for (const singleWord of word) {
        if (singleWord.length > longestWord.length) {
            longestWord = singleWord;
        }
    }
    return longestWord;
}

console.log(findLongestWord(words));





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
    let sum = 0;
    for (let number of nums) {
        sum += number;
    }

    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
    if (nums.length === 0) { return 0; }
    let sum = 0;
    for (let number of nums) {
        sum += number;
    }
    const avg = sum / nums.length;

    return avg;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];


function doesWordExist(words, targetWord) {
    if (words.length === 0) {
        return null;
    }
    for (const singleWord of words) {
        if (singleWord === targetWord) {
            return true;
        }
    }
    return false;
}
