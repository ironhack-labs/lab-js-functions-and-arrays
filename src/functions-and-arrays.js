// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2 ) {
        return num1;
    }else if (num2 => num1){
        return num2;
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0){
        return null;
    }
let longestWord = words[0];

    for (let i = 0; i < words.length; i++){
       if (words[i].length > longestWord.length){
            longestWord = words[i];
        } 
    }
    return longestWord
}
console.log (findLongestWord);

// Iteration 3 | Sum Numbers

//should be defined as a function
//should return the sum when passed an array of numbers
//should return 0 when called with an empty array
//should return the first number when called with a single-element array


const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    return sum
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0){
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers2.length; i++){
        sum += numbers2[i];
    }
    return sum / numbers2.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2){
    if(words2.length === 0){
        return null;
    }
    let word = "truth";
    for (let i = 0; i < words2.length; i++){
        if (words2[i] === word){
            return true;
         }
    }
    return false;
    }
    

