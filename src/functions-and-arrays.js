// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
 if (num1 > num2 ){
    return num1;  
 }else {
    return num2;
 }
 }

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length === 0){
        return null;
    }
    let largest ='';
    for (let i= 0; i <arr.length; i++){
      if (arr[i].length > largest.length){
        largest = arr[i];
      }    
    }
       return largest;
} 




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers( arrOfNumbers) {
    if (arrOfNumbers.length === 0){
        return 0;
    }
    let sum = 0;
    for (let i= 0; i< arrOfNumbers.length; i++){
     sum += arrOfNumbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
// const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
// function sumNumbers(arrOfNumbers){
//     if (arrOfNumbers.length === 0){
//         return null
//     }
//     let sum = 0;
//     for (let i= 0; i < arrOfNumbers.length; i++){
//         sum += arrOfNumbers[i]/ arrOfNumbers.length;
//        }
//        return sum;

// }
function averageNumbers(arrOfNumbers) {
    if (arrOfNumbers.length === 0) {
        return 0;
    }

    const total = sumNumbers(arrOfNumbers);
    const average = total / arrOfNumbers.length;
    return average;
}   





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrOfWords,wordToSearch){
     
    if (arrOfWords.length === 0){
        return null;
    } 
    for (let i= 0; i <arrOfWords.length; i++){
    if ( arrOfWords[i] === wordToSearch){
        return true;
    }
       
   }
   return false;
}
console.log(doesWordExist (words2,"starting"))