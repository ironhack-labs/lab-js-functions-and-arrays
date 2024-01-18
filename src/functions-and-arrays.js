// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if(a > b){
        return a;
    }
    else if (a === b){
        return a, b;
    }
    else{
        return b;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
let longestWord = array[0];
if(array.length === 0){
    return 0;
}
for(let i = 0; i < array.length; i++){
    if(array[i].length > longestWord.length){

    longestWord = array[i];
}
}
return longestWord;
}

findLongestWord(words);


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
    let sum = 0;
    if(numArray.length !== 0){
    for(let i = 0; i < numArray.length ; i++){
    sum += numArray[i];
    }
    return sum;
    }
    if(numArray.length === 0){
        return 0;
    }
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(numberArray){
    if(numberArray.length !== 0){
      let sum = 0;
      for(let i = 0; i < numberArray.length; i++){
        sum += numberArray[i];
      }
      const average = sum / numberArray.length;
     return average;
    } 
     else if(numberArray.length === 1){
     return numberArray[0];  
     }
    else if (numberArray.length === 0){
    return 0;  
    }
   }




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, wordToSearch) {
    if(array.length === 0){
        return null;
    }

    for(let i = 0; i < array.length; i++){
        if(wordToSearch === array[i]){
        return true;
        }
    }

    
            return false;
        }

