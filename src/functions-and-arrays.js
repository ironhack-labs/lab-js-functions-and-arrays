// Iteration 1 | Find the Maximum // DONE
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return `Number ${num1} is bigger than number ${num2}`;
  } else if (num1 < num2) {
    return `Number ${num1} is smaller than number ${num2}`;
  } else if (num1 === num2) {
    return `Numbers are identical`;
  } else {
    return `Invalid entry`;
  }
}

console.log(maxOfTwoNumbers(2, 5));

// Iteration 2 | Find the Longest Word // DONE
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

let longestWord = "";

function findLongestWord(arrayWords) {
  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].length > longestWord.length) {
      longestWord = arrayWords[i];
      console.log(longestWord, arrayWords[i]);
    }
  }
  return longestWord;
}

console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers // DONE
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sum = 0;

function sumNumbers(numbersArray) {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average // DONE
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
let sum2 = 0;
let avg = 0;

function averageNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    sum2 += array[i];
    avg = Math.round(sum2 / array.length);
  }
  return avg;
}

console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements // IN P

// Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other.
//Return true if the word exists in the array; otherwise, return false.

//The function should return null if an empty array is passed as an argument.
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

let valueFound = "";

function doesWordExist(words, wordToSearch) {
  if (words.length === 0) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
      return true;
    }
  }
  return false;
}

console.log(doesWordExist(words, "truth"));
