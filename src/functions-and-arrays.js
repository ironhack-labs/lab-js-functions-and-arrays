// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
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

function findLongestWord(wordsArray) {
  if (wordsArray.length === 0) return 0;
  // wordsArray.sort()
  let longest = "";

  wordsArray.forEach((element) => {
    if (longest.length < element.length) longest = element;
  });

  return longest;
}
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      let result = sum += numbers[i];
      }
     return sum;
    }

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAverage) {
  let sum = 0;

  for (i = 0; i < numbersAverage.length; i++) {
    sum += numbersAverage[i];
  } // end sum for loop

  let average = sum / numbersAverage.length; // get average

  if (numbersAverage == 0) {
    // condition to avoid / 0
    return 0;
  } else {
    return average;
  }
}

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
// Iteration 5 | Find Elements
function doesWordExist(wordsArray, chosenWord) {
  if (!wordsArray.length) return null;

  if (wordsArray.includes(chosenWord)) {
    return true;
  } else {
    return false;}
}