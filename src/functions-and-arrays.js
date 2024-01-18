// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    if(num1>num2){
        return num1
    } else if(num1<num2){
        return num2
    } else if(num1===num2){
        return num1
    };
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"]

function findLongestWord(arrWords) {

    let longestWord = arrWords[0]
    if (arrWords.length === 0){
        return 0;
    }
    for (let i=0; i < arrWords.length; i++) {
        if (arrWords[i].length > longestWord.length) {
            longestWord = arrWords[i]
        } else if (arrWords.length === 0){
            return 0;}
    }

    return longestWord
}
console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(value1) {
    let emptyArr = 0; 
if (value1.length === 0){
    return 0;
}
    return sumNumbers(value1)/ value1.length;
    }







// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, matchArray) {

    if (wordsArray.length === 0){
        return null;
    }
    for (let i = 0; i < wordsArray.length; i++){
        if( wordsArray[i] === matchArray){
        return true;
        }
    }
    return false;
}
