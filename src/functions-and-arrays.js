// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if(a > b){
        return a;
    }else if(b > a){
        return b;
    }else{
        return a;
    }
}
//Iteration 1 completed



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(arr) {
if (arr.length === 0) return null; 
  
let longestWord = "" 
  for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] === "string" && arr[i].length > longestWord.length){
        longestWord = arr[i];
      }
  }
  return longestWord;
}
// Iteration 2 completed




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
let sum = 0;
   for(let i = 0; i < num.length; i++){
       sum += num[i];
   }
   return sum;
}
//Iteration 3 completed



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
   if (arr.length === 0) return 0;
   let total = sumNumbers(arr);
   return total / arr.length;
}
// Iteration 4 completed




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordsToSearch) {
    if(arr.length === 0) {
        return null
    }
    return arr.includes(wordsToSearch);    
}
console.log(doesWordExist(words2, "subset")); //True
console.log(doesWordExist(words2, "mango")); // False


//Iteration 5 completed 