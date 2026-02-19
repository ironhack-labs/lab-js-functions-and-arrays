// Iteration 1 | Find the Maximum

const firstNumber = 38;
const secondNumber = 36;

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a, b;
  }
}

result = maxOfTwoNumbers(firstNumber, secondNumber);
console.log(result);

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

  if (words.length === 0) {
    return null
  }

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }
  return longestWord
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  
  if(arr.length === 0){    
    return 0 
   }

  let summOfAllNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    summOfAllNumbers += arr[i];
  }
  return summOfAllNumbers
 }


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(arr) { 

  if(arr.length === 0){    
    return 0 
   }

  let total = 0

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, searchWord ) { 
  if(arr.length === 0){
    return null
  }

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === searchWord){
      return true
    }
  }
  return false
}
