// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
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

function findLongestWord(array) {
  if (array.length === 0) { return 0}
  let longestWord = '';

  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  console.log(longestWord);
  return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
  let sum = 0;
  nums.forEach(function (element) {
    sum += element;
  });
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return sumNumbers(numbers) / numbers.length;
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

function doesWordExist(array, searchedWord) {
    if (array.length === 0) {return null}

    let existens = array.includes(searchedWord);

    if (existens) {
      return true
    } else if(!existens) {
      return false
    }


    

}
doesWordExist(words2, "subset")

