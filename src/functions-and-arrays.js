// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    const bothNumbers = [num1, num2];
    function randomNumber(numberArray){
        const randomIndex = Math.floor(Math.random()*numberArray.length);
        return numberArray[randomIndex];
    }
    if (num1 > num2){
        return num1;
    } else if (num1 < num2){
        return num2;
    } else {
        return randomNumber(bothNumbers);
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    if (wordsArray.length === 0){
        return null;
    }
    let longestWord = "";
    wordsArray.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    let sum = 0;
    numbersArray.forEach(number => {
        sum += number;        
    });
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if (numbersArray.length === 0){
        return 0;
    }
    const average = sumNumbers(numbersArray) / numbersArray.length;
    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, search) {
    if (wordsArray.length === 0){
        return null;
    }
    return wordsArray.includes(search);
}
