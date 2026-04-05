// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
 

  if ( num1 > num2){
  return num1;
  }

  else if (num1 < num2){
    return num2;
  }
  else if( num1 === num2 ){
    return num1, num2;
  }
  
}
console.log(maxOfTwoNumbers(12, 12) )



// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

console.log (words[0])




function findLongestWord(arrOfWords) {

if (arrOfWords.length === 0) return null;  

let longestWord = arrOfWords[0]; //Mystery

  for (let i = 0; i < arrOfWords.length; i++){
     if ( arrOfWords[i].length > longestWord.length){
      longestWord = arrOfWords[i]; 
     }
}

return longestWord
   
}


console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  if (arr.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {

  if (arr.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}






// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];




function doesWordExist(arrayWords, wordExist) {

  if (arrayWords.length === 0) return null;
  
  for (let i = 0; i < arrayWords.length; i++){
    if (arrayWords[i] === wordExist) return true; 
  }

   return false
}