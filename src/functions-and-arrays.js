// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if ((Math.max(num1, num2)) === num1) {
        return num1;
    }
    else if ((Math.max(num1, num2) === num2)) {
        return num2;
    }
    else {
        return num1;
    }
};



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longestWord = '';

    if (arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
};



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let addedSum = 0;

    for (let i = 0; i < numbers.length; i += 1) {
        addedSum += numbers[i];
    }
    return addedSum;
};




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
    let addedSum = 0;

    if (numArr.length === 0) {
        return addedSum;
    }

    for (let i = 0; i < numArr.length; i += 1) {
        addedSum += numArr[i];
    }
    return addedSum / numArr.length;
};



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return null;
    }
    else if (arr.includes(word) === true) {
        return arr.includes(word);
    }
    else {
        return arr.includes(word);
    }
};
