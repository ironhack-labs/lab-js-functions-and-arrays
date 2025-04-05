// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    let maxNumber;

    if (number1 > number2) {
        maxNumber = number1;
    }
    if (number2 > number1) {
        maxNumber = number2;
    } 
    if (number1 === number2) {
        maxNumber = number1 && number2;
    }

    return maxNumber;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    
    let longestWord = "";
    if (words.length === 0) {
            return null;
        }
        
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        

        if (word.length > longestWord.length) {
            longestWord = word;
        } 
        
        
        
    }
    
    return longestWord;

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let summedNumbers = 0;

    for (let i = 0; i < numbers.length; i++ ) {
        
        summedNumbers += numbers[i];


    }

    return summedNumbers;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {

    
    let average = 0;
    
    if (numbers.length !== 0) {
        average = sumNumbers(numbers) / numbers.length;
    }
   

    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    let existingWord;

    if (words.length === 0) {
        return null;
    }
    if (words.includes(word)) {
        existingWord = true;
    } else {
        return false;
    }

    return existingWord;
}
