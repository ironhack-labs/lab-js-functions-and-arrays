// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 < num2) {
    return num1;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord(words)); // Output: "crocodile"

// Iteration 3 | Sum Numbers
function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  return sum;
}

function averageNumbers(numbers) {
  if (numbers.length === 0) return 0; 
  const sum = sumNumbers(numbers);
  return sum / numbers.length;


// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWords, wordsToSearch) {
 
  for (let i = 0; i < arrayOfWords.length; i++) {
      if (arrayOfWords[i] === wordsToSearch) {
          return true; 
  }
  else{

  
  return false; }
