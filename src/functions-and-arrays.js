// Iteration 1 | Find the Maximum

function maxOfTwoNumbers (m, n){
  if(m > n) {
    return m;
  }
  else if(m < n){
    return n;
  }
  else if(m === n){
    return m;
  }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord (array) {
  if (array.length === 0){
    return 0;
  }
  let longestWord = array[0]; 

  array.forEach(function (el) {
    if (el.length > longestWord.length) {
      longestWord = el;
    }
  })
  return longestWord; 
}
      
  



// Iteration 3 | Sum Numbers

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log(sumNumbers(numbers)); // Output: 87


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function sumNumbers(numbers) {
  let sum = 0;
  for (let number of numbers) {
      sum += number;
  }
  return sum;
}

function averageNumbers(numbers) {

  if (numbers.length === 0) {
      return 0; //
  }
  const sum = sumNumbers(numbers);
  
  const average = sum / numbers.length;
  
  return average;
}

const numbers02 = [2, 6, 9, 10, 7, 4, 1, 9];

const average = averageNumbers(numbers02);
console.log("Average:", average); 


// Iteration 5 | Find Elements

function doesWordExist(wordArray, wordToSearch) {
  if (wordArray.length === 0) {
      return null;
  }
  if (wordArray.indexOf(wordToSearch) !== -1) {
      return true;
  } else {
      return false;
  }
}
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
