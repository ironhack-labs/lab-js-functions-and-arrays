// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    return a > b ? a : b; 
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length >0) return words.reduce((longest, current) => current.length > longest.length ? current : longest,);
    return null;
    // let long = null;
    // let cant = 0;
    // words.forEach(word => {
    //     if (cant < word.length){
    //         cant = word.length;
    //         long = word;
    //     }
    // });
    // return long;

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length >0) return numbers.reduce((a,b) => a+b,0);
    return 0;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    return numbers.length > 0 ? numbers.reduce((a,b) => a+b,0) / numbers.length : 0;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if (words.length > 0) return words.indexOf(word) >= 0 ? true : false;
    return null;
}
