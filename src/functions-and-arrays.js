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

function findLongestWord(words) {
  let longestString = "";
  for (let i = 0; i < words.length; i++) {
    if (
      typeof words[i] === "string" &&
      words[i].length > longestString.length
    ) {
      longestString = words[i];
    } else if (words == [" "]) {
      return null;
    }
  }
  return longestString;
}

//console.log(findLongestWord());

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers == [" "]) {
      return null;
    }
    sum += numbers[i];
  }
  console.log(sum);
}
sumNumbers(numbers);
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  let sum = 0;
  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }
  return sum / numbers2.length;
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

function doesWordExist(arr, word) {}
doesWordExist(words2, trouble);
