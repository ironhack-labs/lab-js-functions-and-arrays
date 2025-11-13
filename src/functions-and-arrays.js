// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
   if (a > b){
    return a;
   } 
   else if (b > a){ 
    return b;
   }
   else if (b == a){
    return a , b;
   }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array){

let firstWord = array[0]


if (array.length === 0){
            return null;
        }

   array.forEach(function(longWord){
        if (longWord.length > firstWord.length ){
            firstWord = longWord;
        }
   })
      return firstWord  
};






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];



function sumNumbers(numbers) {
  
let sum = 0

  numbers.forEach(function(counter){
    sum += counter
   });
    return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {

    if (arr.length === 0) {
    return 0;
  }
let Average = 0;
let Sum = 0;

 arr.forEach(function(element){
    Sum  += element  
  
    return Sum;
 });
 
    Average = Sum / arr.length

    return Average
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(Array, wordTosearch) {
    if (Array.length === 0) {
        return null;
    }

    let found = false;

    Array.forEach(function (word2) {
        if (word2 === wordTosearch){
            found = true;
    }
})

    return found;
}

