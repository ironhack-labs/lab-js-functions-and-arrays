// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1:num2;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArr) {
    if( !wordsArr || wordsArr.length === 0){
        return null;
    }
    let longestWord = wordsArr[0];
    for( const word of wordsArr){
        longestWord = word.length > longestWord.length ? word : longestWord;
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let totalSum = 0;
    for( number of numbers){
        totalSum += number;
    }
    return totalSum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if(!numbers || numbers.length === 0){
        return 0;
    }
    const totalSum = sumNumbers(numbers);
    return totalSum/numbers.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, wordToFind){
    if(!wordsArr || wordsArr.length === 0){
        return null;
    }
    let existingWord =  wordsArr.find(word1 => wordToFind === word1);
    return existingWord? true:false;
}
