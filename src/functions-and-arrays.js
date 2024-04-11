// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber
    } else {
        return secondNumber
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if (arrayOfWords.length === 0) {
        return null
    }

    let longestWord = arrayOfWords[0];

    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        }
    }
    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sumOfNumbers) {
if (sumOfNumbers.length === 0) {
    return 0
}

    let sum = 0;
    for (let i = 0; i < sumOfNumbers.length; i++) {
        sum += sumOfNumbers[i];
    }
    return sum
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfAverage) { 
    if (arrayOfAverage.length === 0) {
        return 0
    };
    let average = 0
    for (i = 0; i < arrayOfAverage.length; i++) {
        average += arrayOfAverage[i];
    }
    return average / arrayOfAverage.length
}
console.log(average)


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(elementFound, wordToFind) {
    if (elementFound.length === 0) {
        return null
    }
    let wordy = false
    for (let i = 0; i < elementFound.length; i++) {
        if (elementFound[i] === wordToFind) {
            wordy = true
           } else {
        }
    }
    return wordy 
 }
