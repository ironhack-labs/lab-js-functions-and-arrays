// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let returnvalue 
    if (num1 > num2) {
        returnvalue = num1
        } else if (num2 > num1) {
            returnvalue =num2 
        } else {
            returnvalue = num1; // or num2, since they are equal
        }
        return returnvalue;
    }
    maxOfTwoNumbers(2,12);
    console.log(maxOfTwoNumbers(2,12))





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null;
    let longestWord = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) return 0;
    let sum2 = 0
    let average = 0;
    for (i=0; i<numbers2.length; i++) {
        sum2 = sum2 + numbers2[i];
    }
    average = sum2 / numbers2.length;
    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, currentWord) {
    if (words2.length === 0) return null
    for (let i = 0; i < words2.length; i++ ) {
        if (currentWord === words2[i]) {
            return true; 
        } 
    }
    return false;
}
