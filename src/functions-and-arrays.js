// Iteration 1 | Find the Maximum
let num1 = 0;
let num2 = 0;
let num = 0;
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;

    } else if (num2 > num1) {
        return num2;
    } else {
        return num1, num2
    }

}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null;

    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}







// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0
    for (i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === 'number') {
            sum += numbers[i]

        }
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < numbers2.length; i++) {
        if (typeof numbers2[i] === 'number') {
            sum += numbers2[i];
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    return sum / count;
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
let wordToFind = "";
function doesWordExist(words2, wordToFind) {
    if (words2.length === 0) {
        return null
    }
    for (i = 0; i < words2.length; i++) {
        if (words2[i] === wordToFind) {
            return true;
        }
    }
    return false

}
