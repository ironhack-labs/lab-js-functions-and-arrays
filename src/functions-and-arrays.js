// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  } else {
    return a;
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
  if (words.length === 0) {
    return null;
  }

  let longestWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let sums = 0;

    for (let i = 0; i < nums.length; i++) {
        sums += nums[i];
    }

    const average = sums / nums.length;

    return average;

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

function doesWordExist(words2, word2) {
    if (words2.length === 0) {
        return null;
    }

    let wordExist = words2[0];

  for (let i = 0; i < words2.length; i++) {
    if (words2[i] === word2) {
     return true;
    }
  }
  return false;
}
