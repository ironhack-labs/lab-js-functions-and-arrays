// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) return a;
     else if (a < b) return b;
     else return a;
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    let longestWordLength = 0;  
    let longestWord = "";
    if (array.length === 0) return 0;
    for (let i=0; i< array.length;i++) {
        const currentWordLength = array[i].length;
        if (currentWordLength > longestWordLength){
            longestWordLength = currentWordLength;
            longestWord = array[i];
        }
    }
    return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let totalSum = 0;
    for (let i =0; i < array.length; i++){
        totalSum += array[i];
    }
    return totalSum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) return 0;
    return (sumNumbers(numbers)/numbers.length)
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {
    if (array.length === 0) return null;
    for (let i=0; i < array.length; i++){
        if (word === array[i]){
            return true;
        }
    }
    return false;
}
