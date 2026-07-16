// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
   return(Math.max(num1, num2))
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if(arr.length>0){
        return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
    
  }, '');
  
}else{
    return null}
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return sumNumbers(arr) / arr.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return null;
    }
    return arr.includes(word);
}
