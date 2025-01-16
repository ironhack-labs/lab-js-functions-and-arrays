// Iteration 1 | Find the Maximum
function maxOfTwoNumbers() {}

function maxOfTwoNumbers(a, b) {
    if (a > b) {
      return a; 
    } else {
      return b; 
    }
  }
  
  console.log(maxOfTwoNumbers(10,13));

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a; // Return `a` if it is greater than `b`
  } else {
    return b; // Otherwise, return `b`
  }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
      return null; 
    }
  
    let longestWord = words[0]; // comienza con la primera palabra
  
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
  
    
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; 
    }
  
    return sum; 
  }
  
    
  console.log(sumNumbers(numbers)); 
  



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
      return 0;
    }
  
    let sum = 0; 
  
  
    for (let i = 0; i < numbers2.length; i++) {
      sum += numbers2[i]; 
    }
      return sum / numbers2.length;
  }
  
  
  console.log(averageNumbers(numbers2));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToSearch) {
    if (words2.length === 0) {
      return null; 
    }
  
    for (let i = 0; i < words2.length; i++) {
      if (words2[i] === wordToSearch) {
        return true; 
      }
    }
  
    return false; 
  }
  
    
  console.log(doesWordExist(words2, "matter")); 
  console.log(doesWordExist(words2, "hello"));  
  console.log(doesWordExist([], "matter"));    
   
