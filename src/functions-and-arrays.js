// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
  let bigNumber;
  let bothAreDifferent = false;
  if (firstNumber > secondNumber) {
    bigNumber = firstNumber;
    bothAreDifferent = true;
  } else if (secondNumber > firstNumber) {
    bigNumber = secondNumber;
    bothAreDifferent = true;
  } else {
    bothAreDifferent = false;
    bigNumber = firstNumber;
  }
  return bigNumber;
}

let biggestNumber = maxOfTwoNumbers(354, 32);

console.log(biggestNumber);

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

function findLongestWord(array) {
  if (array.length === 0) {
    return null;
  }
  let longestName = "";

  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    if (name.length > longestName.length) {
      longestName = name;
    }
  }

  return longestName;
}

let longestNameArray = findLongestWord(words);

console.log(longestNameArray);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

let sum = sumNumbers(numbers);

console.log(sum);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = sumNumbers(array);
  let totalIndex = array.length;

  return sum / totalIndex;
}

let average = averageNumbers(numbers2);

console.log(average);

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

let word = "subset";
function doesWordExist(array, word) {
    if(array.length === 0){
        return null;
    }
    let isWordThere;
    for( const name of array){
        if(name === word){
            return true
        }
    }
    return false;
}

let isWordInArray = doesWordExist(words2, word);

console.log(isWordInArray);
