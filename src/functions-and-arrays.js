// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    // argument comparison
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(myArray) {
    // Return 0 if array is empty
    if (myArray.length === 0) {
        return 0;
    } 

    // Initialize necessary variables
    let longestWordLength = 0;
    let longestWord = "";

    // Loop through provided array
    myArray.forEach(function(word) {
        
        // Compare length of current word with current longest word
        if (word.length > longestWordLength) {
            // Replace current longest word and longest word length
            longestWordLength = word.length;
            longestWord = word;
        }
    })
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
    // Initialize necessary variables
    let arraySum = 0;

    // Return 0 if array is empty
    if (numberArray.length === 0) {
        return 0;
    }

    // Return first element in array if it's the only value
    // in the array
    if (numberArray.length === 1) {
        return numberArray[0];
    }
    numberArray.forEach(function(number) {
        arraySum += number;
    })
    return arraySum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArray) {
    if (numberArray.length === 0) {
        return 0;
    }
    // Initialize necessary variables
    const divisor = numberArray.length;
    let arraySum = 0;

    // Loop through array, add each value to total
    numberArray.forEach(function(number) {
        arraySum += number;
    })

    // Return average of array elements:
    // Divide sum of elements by number of elements
    return arraySum / divisor;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(elementArray, soughtWord) {
    if (elementArray.length === 0) {
        return null;
    }

    // Initialize necessry variables
    let wordExists = false;

    elementArray.forEach(function(element) {
        if (element === soughtWord) {
            wordExists = true;
        }
    })
    return wordExists;
}
