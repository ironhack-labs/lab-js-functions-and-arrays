// Iteration 1 | Find the Maximum
function maxOfTwoNumbers( num1 , num2 ) {
    if  (num1 > num2) {
        return num1;
    } else  {
        return num2;
    } 
}
console.log(maxOfTwoNumbers(7,90));



// Iteration 2 | Find the Longest Word
const words = ["myst", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsarr) {
   if (!wordsarr.length ) {
    return null
   }
    let longestWord = "";
    for (let i = 0 ; i < wordsarr.length ; i++) {
        if (wordsarr[i].length > longestWord.length ) {
            longestWord = wordsarr[i];
        } 
    } return longestWord

}
console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
    let sumedNum = 0;
    for ( let i = 0; i < numbersArr.length ; i++){
        sumedNum += numbersArr[i]
    } return sumedNum 
} 




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2Arr) {
    if (!numbers2Arr.length) {
        return 0
    } else {
  return sumNumbers(numbers2Arr) / numbers2Arr.length }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(word2Arr, wordToSearch) {
    if (!word2Arr.length) {
        return null;
    }
    for (let i = 0 ; i < word2Arr.length ; i++) {
        if (word2Arr[i] === wordToSearch) {
            return true
        }
     } 
   return false
        
}
console.log(doesWordExist(words2, "matter"));