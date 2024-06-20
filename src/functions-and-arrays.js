// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
  return num1;
}
console.log(maxOfTwoNumbers(7, 7));

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
  }
  let longestWord = arr[0];
  console.log(longestWord);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }

  return longestWord;
}
findLongestWord(words);
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }

  return sum;
}
sumNumbers(numbers);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let sum = sumNumbers(arr);
  console.log(sum);
  if (!arr.length) {
    return 0;
  } else {
    return (sum /= arr.length);
  }
}
console.log(averageNumbers(numbers2));
//Iteration 5 | Find Elements
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

function doesWordExist(arr, word) {
  if (arr.length === 0) {
    return null;
  }
  return arr.includes(word);
}
console.log(doesWordExist(words2, "trouble")); // true
console.log(doesWordExist(words2, "Jasmin")); // false
console.log(doesWordExist([], "anyName")); // null
