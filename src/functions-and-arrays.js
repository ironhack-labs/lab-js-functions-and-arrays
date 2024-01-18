// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else if (num1 === num2) {
    return num1, num2;
  }
}

// maxOfTwoNumbers (1200, 1200); // --> they are the same number
// maxOfTwoNumbers (12, 1200); // --> console log the biggets one (num2)
//maxOfTwoNumbers(120, 34); // --> console log the biggest one (num1)

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

function findLongestWord(names) {
  if (names.length === 0) {
    return 0;
  }
  let longestWord = "";
  names.forEach((element) => {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  });

  return longestWord;
}
findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

sumNumbers(numbers);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function sumAgain(nums2) {
  let sum2 = 0;
  for (let i = 0; i < nums2.length; i++) {
    sum2 += nums2[i];
  }
  return sum2;
}
sumAgain(numbers2);

function averageNumbers(average) {
  if (average.length === 0) {
    return 0;
  }
  if (average.length !== 0) {
    return sumAgain(average) / average.length;
  }
  /* console.log(sumAgain(average) / average.length); */
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

function doesWordExist(arrayToSearch, word) {
  if (arrayToSearch.length === 0) {
    return null;
  }
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i] === word) {
      return true;
    }
  }
  return false;
}

doesWordExist(words2);
