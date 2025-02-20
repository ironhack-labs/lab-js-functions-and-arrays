// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

// // Iteration 2 | Find the Longest Word <- So bad at this!
// const words = [
//   "mystery",
//   "brother",
//   "aviator",
//   "crocodile",
//   "pearl",
//   "orchard",
//   "crackpot",
// ];

// function findLongestWord(words) {
//   if (words.length === 0) {
//     return null;
//   } else {
//   }
// }

// Iteration 3 | Sum Numbers

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < numbers2.length; i++) {
      sum += numbers2[i];
    }
    return sum / numbers2.length;
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

function doesWordExist(allWords, searchWord) {
  if (allWords.length === 0) {
    return null;
  } else {
    for (let i = 0; i < allWords.length; i++) {
      if (searchWord === allWords[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(doesWordExist(words2, "starting"));
