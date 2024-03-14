// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
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
  let maxLenght = 0;
  let maxIndex = 0;

  if (words.length > 0) {
    for (let i = 0; i < words.length; i++) {
      console.log(words[i]);
      if (words[i].length > maxLenght) {
        maxLenght = words[i].length;
        maxIndex = i;
      }
    }
    return words[maxIndex];
  } else {
    return 0;
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
  // Implemented with reduce()
  const initialValue = 0;

  const result = numArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  // Implemented with for loop
  /*let result = 0;
  for (let i = 0; i < numArray.length; i++) {
    result += numArray[i];
  }*/

  return result;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray) {
  if (numArray.length > 0) {
    return sumNumbers(numArray) / numArray.length;
  } else {
    return 0;
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

function doesWordExist(wordArray, word) {
  if (wordArray.length > 0) {
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === word) {
        return true;
      }
    }
    return false;
  } else {
    return null;
  }
}
