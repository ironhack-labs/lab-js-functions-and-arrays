// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1, num2;
  }
}
const result1 = maxOfTwoNumbers(10, 20);
console.log("The maximum is:", result1);

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
  if (words.length === 0) {
    return null;
  }
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}
const longestWord = findLongestWord(words);
console.log("The longest word is:", longestWord); // Output: The longest word is: crocodile

// Testing with empty array
const emptyArray = [];
console.log("Result with an empty array:", findLongestWord(emptyArray));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  if(numbers === 0){
    return = sum;
    
  }
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  return sum;
  }

  const totalSum = sumNumbers(numbers);
  console.log("The sum of all numbers is:", totalSum);
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}

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

function doesWordExist() {}
