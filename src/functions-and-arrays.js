// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
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
  if (words.length === 0) return null;
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) return 0;
  else if (numbers2.length === 1) {
    return numbers2[0];
  } else {
    let sum = 0; // Variable to store the sum of numbers
    numbers2.forEach((number) => {
      sum += number; // Add each number to the sum
    });
    let average = sum / numbers2.length; // Calculate the average
    return average; // Return the average
  }
}

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

function doesWordExist(words2, word) {
  if (words2.length === 0) return null;
  return words2.includes(word);
}

/**
 * 
 * WHY DOES THIS NOT WORK 
 * 
 * 
    else if(words2.includes(word)){
        return true;

    }else{
        return false;
    }
}
**/
