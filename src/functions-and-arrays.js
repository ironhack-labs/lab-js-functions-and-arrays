// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num, num2) {
  if (num > num2) {
    return num;
  } else if (num < num2) {
    return num2;
  } else {
    return num;
  }
}

console.log(maxOfTwoNumbers(2, 3));

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

function findLongestWord(words1) {
  if (!words1.length) return null;
  if (words1.length === 1) return words1[0];
  let longest = words1[0];

  for (let i = 1; i < words1.length; i++) {
    if (words1[i].length > longest.length) {
      longest = words1[i];
    }
  }
  return longest;
}

console.log(findLongestWord(words))

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers1) {
  if (!numbers1.length) {
    return 0;
} else if (numbers1.length === 1) { 
    return numbers1[0];
}
  let sum = 0;

  for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
  }
  return sum;
}
console.log(sumNumbers(numbers))

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers3) {
  if (!numbers3.length) return 0;
  if (numbers3.length === 1) return numbers3[0];
  let sum = 0;
  for (let i = 0; i < numbers3.length; i++) {
    sum += numbers3[i];
  }
  return sum / numbers3.length;
}
console.log(averageNumbers(numbers2))

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

function doesWordExist(words3, words4) {
  if (!words3.length) return null;
  for (let i = 0; i < words3.length; i++) {
    if (words3[i] === words4) return true;
  }

  return false;
}
console.log(doesWordExist(words2))
