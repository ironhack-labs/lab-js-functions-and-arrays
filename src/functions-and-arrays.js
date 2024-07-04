// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 < num2) {
        return num2;
    }

    else if (num1 > num2) {
        return num1;
    }

    else if (num1 == num2) {
        return num1;
    }
}
console.log(maxOfTwoNumbers(8, 2))




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    let longestWord = " ";
    if (array.length === 0) {
        return null

    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }

    }
    return longestWord

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    let numbersSum = 0;
    if (numbersArray.length === 0) {
        return 0;
    }
    for (let i = 0; i < numbersArray.length; i++) {
        numbersSum += numbersArray[i];
    }
    console.log(numbersSum);
    return numbersSum;

}

console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray2) {
    if (numbersArray2.length === 0) {
        return 0;
    }

    let numbersSum2 = 0;

    for (let i = 0; i < numbersArray2.length; i++) {
        numbersSum2 += numbersArray2[i];
    }

    let average = numbersSum2 / numbersArray2.length;

    return average;
}
// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, word) {
    if (wordsArray.length === 0) {
        return null;
    }

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === word) {
            return true;
        }
    }

    return false;
}
   

