// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else if (num2 === num1) {
    return num1;
  }
}

maxOfTwoNumbers(9, 21);

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

function findLongestWord(arr) {
  if (arr.length === 0) {
    return null;
  } else if (arr.length === 1) {
    return arr[0];
  }

  let lengthArray = arr.map((item) => item.length);
  const longestWordIndex = lengthArray.indexOf(Math.max(...lengthArray));
  return arr[longestWordIndex];
}

findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum / arr.length;
}

averageNumbers(numbers2);

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

console.log(doesWordExist(words2, "machine"));

function doesWordExist(arr, str) {
  if (!arr.length) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(str)) {
      return true;
    } else {
      return false;
    }
  }
}

doesWordExist(words2, str);
