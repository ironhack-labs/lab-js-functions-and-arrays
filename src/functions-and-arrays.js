// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
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

function findLongestWord(word) {
  if (word.length === 0) {
    return null;
  } else if (word.length === 1) {
    return word[0];
  } else {
    let longestLength = 0;
    for (let i = 0; i < word.length; i++) {
      longestLength =
        longestLength < word[i].length ? word[i].length : longestLength;
    }
    // console.log(longestLength);

    const newArr = word.filter((element) => element.length === longestLength);
    return newArr[0];
  }
}

// console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

// console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let sum = 0;
  arr.forEach((element) => (sum += element));

  const averageNum = sum / arr.length;

  return arr.length === 0 ? 0 : averageNum;
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

function doesWordExist(arr, word) {
  const isIncludeArr = arr.filter((element) => element === word);

  const isInclude = isIncludeArr.length !== 0 ? true : false;
  return arr.length === 0 ? null : isInclude;
}

doesWordExist(words2, "subset");
