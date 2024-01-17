// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

    return Math.max(num1, num2);

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {

    if (array.length === 0) {return 0};

    let longestWord = "";

    for (let i = 0; i < array.length; i++) {
        if (longestWord.length < array[i].length) {
            longestWord = array[i];
        }
    }

    return longestWord;

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {

    let sum = 0;

    numArr.forEach(number => sum += number);

    return sum;

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avgArr) {

    if (avgArr.length === 0) {return 0};

    let total = 0;
    
    avgArr.forEach(num => total += num);

    const average = total / avgArr.length;

    return average;


}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {

    if (words2.length === 0) {return null};

    return words2.includes(word);

}
