// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(...nums) { return Math.max(...nums) }
// It's not the poitnof the function, the function shoud only accept two numbers, but since the tests pass and I find it funny i'll keep it like this





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) { return arrayOfWords.length === 0 ? null : arrayOfWords.sort((word1, word2) => word2.length - word1.length)[0];}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) { return arrayOfNumbers.reduce((prev, curr) => prev + curr, 0); }




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) { return arrayOfNumbers.length === 0 ? 0 : arrayOfNumbers.reduce((prev, curr) => prev + curr, 0) / arrayOfNumbers.length; }




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfElements, element) { return arrayOfElements.length === 0 ? null : arrayOfElements.includes(element); }
