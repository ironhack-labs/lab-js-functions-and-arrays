// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else if (num1 <= num2) {
    return num2;
  }
}

// Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.
// The function should return null if an empty array is passed as an argument.
// You can use the following array to test your solution

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

function findLongestWord(arr1) {
  if (arr1.length === 0) {
    return null;
  } else {
    let longestString = "";
    for (let i = 0; i < arr1.length; i++) {
      if (longestString.length < arr1[i].length) [(longestString = arr1[i])];
    }
    return longestString;
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
  sumNums = 0;
  for (let i = 0; i < nums.length; i++) {
    sumNums += nums[i];
  }
  return sumNums;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    averageNums = sumNumbers(nums) / nums.length;
    return averageNums;
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

function doesWordExist(array1, searchWord) {
  let result = false;
  if (array1.length === 0) {
    return null;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (searchWord === array1[i]) {
        result = true;
      }
    }
  }
  return result;
}
