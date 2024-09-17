// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1;
    }
    if (num1 < num2){
        return num2;
    }
    return num1;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = words[0];

    if (words.length === 0) {
        return 0;
    }
    if (words.length === 1) {
        return words[0];
    }
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(numbers) {
    let sum = 0;
    if (numbers.length === 0){
       return 0;
    }
    else if (numbers.length === 1){
        return numbers [0] ;
    }
    else for (let i = 0; i < numbers.length; i++ ) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    
    let average = sumNumbers(numbers2) / numbers2.length;
    if (numbers2.length === 0){
        return 0;
    }
    return average;

}
console.log(averageNumbers(numbers2));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience",];

function doesWordExist(words, wordToFind) {
    if (words.length === 0) {
        return null;
    }
    if (words.includes(wordToFind)) {
        return true; 
    } 
    else {
        return false; 
    }
}
console.log(doesWordExist(words2, "subset")); 