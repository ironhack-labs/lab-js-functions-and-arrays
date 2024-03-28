// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 === num2) {
    return num1;
  } else if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
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
  if (words.length === 0) {
    return null;
  } else {
    console.log(words.length);
    let LongestWord = "";
    let longwordLength;
    for (let i = 0; i < words.length; i++) {
      //console.log(words[i]);
      if (words[i].length > LongestWord.length) {
        LongestWord = words[i];
      }
    }
    console.log(LongestWord);
    longwordLength = LongestWord.length;
    for (let i = 0; i < words.length; i++) {
      //console.log(words[i]);
      if (words[i].length === LongestWord.length) {
        return words[i];
      }
    }
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sumNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNum += numbers[i];
  }
  return sumNum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  let averageNumber = 0;
  if (numbers.length !== 0) {
    averageNumber = sumNumbers(numbers) / numbers.length;
  }
  return averageNumber;
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

function doesWordExist(wordsArray, searchTerm) {
  if (wordsArray.length === 0) {
    return null;
  } else {
    // let searchCount = 0;
    // for (let i = 0; i < wordsArray.length; i++) {
    //   if (wordsArray[i] === searchTerm) {
    //     searchCount++;
    //   }
    // }
    // if (searchCount === 0) {
    //   return false;
    // } else {
    //   return true;
    // }
    return wordsArray.includes(searchTerm);
  }
}
