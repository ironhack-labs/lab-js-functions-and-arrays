// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }   
}


//Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    let longestWord = "";
    if (wordsArray.length === 0) {
        return 0;
    }
    wordsArray.forEach((currentWord) => {
        if(currentWord.length > longestWord.length){
            longestWord = currentWord;
        }        
    });
    return longestWord;
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNumbers) {
    if (!arrayNumbers) {
        return 0;
    }
    let sum = 0;
       for (let i = 0; i < arrayNumbers.length; i++) {
        const number = arrayNumbers[i]; 
        sum += number;
       } 
       return sum;
    }



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayAvg) {
   if (arrayAvg.length === 0) {
    return 0;
} else {
    return sumNumbers(arrayAvg) / arrayAvg.length;
};
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];


function doesWordExist(array, word) {
    if (array.length == 0) {
        return null; 
    }
    let wordExist = false; 
    for (let i = 0; i < array.length; i++) {
        if(array[i] === word) { 
            wordExist = true; 
            break; 
        } 
    }
    return wordExist;
}

