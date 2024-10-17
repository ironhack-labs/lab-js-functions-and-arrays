// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {

    if (number1 > number2) {
        return number1
    } else if (number2 > number1) {
        return number2
    } else {
        return number1
    }

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(myArray) {

    let longestWord = ""


    if (myArray.length === 0) {
        return null

    }

    for (let i = 0; i < myArray.length; i++) {

        if (longestWord.length < myArray[i].length) {

            longestWord = myArray[i];
        }

    }

    return longestWord
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(myArray) {

    let totalSum = 0;

    for (let i = 0; i < myArray.length; i++) {

        totalSum += myArray[i]

    }

    return totalSum

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(myArray) {

    let totalSum = 0;

    if (myArray.length === 0) {
        return 0;

    } else {

        for (let i = 0; i < myArray.length; i++) {

            totalSum += myArray[i]

        }

    }

    return (totalSum / myArray.length)
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(myArray, myWord) {

    let wordFound;

    if (myArray.length === 0) {
        wordFound = null;
    } else {
        if (myArray.indexOf(myWord) > 0) {
            wordFound = true
        } else {
            wordFound = false
        }

    }


    return wordFound

}
