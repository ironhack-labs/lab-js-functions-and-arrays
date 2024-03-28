// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else if (num2 > num1) {
        return num2;
    }
    return num1;
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return 0;
    }

    let maxVal = 0;
    let maxPos = 0;

    // iterate words get all length, save only max(currLength, maxCurr) 
    for (let i = 0; i < words.length; i++) {

        if (words[i].length > maxVal) /*current word is the biggest up to now */ {
            maxVal = words[i].length;
            maxPos = i;
        }

    }
    return words[maxPos];
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
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
    return sumNumbers(numbers) / numbers.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, searchWord) {

    // early exit if it is empty
    if (wordsArray.length === 0) {
        return null;
    } else {

    // ... if we are here, it is not empty (length > 0)
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === searchWord) {
            return true;
        }  
    }



    // if we are here, we found any word with the array matching
    return false;
}
}




/* Let's create a simple array search.

Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.

The function should return null if an empty array is passed as an argument.

You can use the following array to test your solution: */