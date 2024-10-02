// Iteration 1 | Find the Maximum
function maxOfTwoNumbers() {
 let max = arguments [0];
 for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
        max = arguments[i];
    }
 }
 return max
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  let long = words[0];
  let LongestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > long) {
        long = words[i].lenght;
        LongestWord = words[i];
    }
  }
  return long;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function(a){sum += a})
  return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  let average = 0;
  numbers2.forEach(function(b){average += b})
  return average
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {

}
