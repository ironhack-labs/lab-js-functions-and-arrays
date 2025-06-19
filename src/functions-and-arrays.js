// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  let result;
  if (num1 > num2) {
    result = num1;
  } else if (num2 > num1) {
    result = num2;
  } else if (num1 === num2) {
    result = num1;
  }

  return result;
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

function findLongestWord(arr) {
  if (arr.length === 0) {
    return null;
  }
  let result = arr[0]; //start with first element of array to compare

  arr.forEach(function (element) {
    if (element.length > result.length) {
      //element [i] > element[i + 1] in a for loop wont work
      //because will get to nonexistent index in the i + 1
      result = element;
    }
  });

  return result;
}
//console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
  let result = 0;
  numArr.forEach(function (element) {
    result += element;
  });
  return result;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
  const sum = sumNumbers(numArr);
  let average = 0;

  if (sum === 0) {
    return average;
  }

  average = sum / numArr.length;

  return average;
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

function doesWordExist(arr, strToSearch) {
  let result = false;
  if (arr.length === 0) {
    return null;
  }

  arr.forEach(function (element) {
    if (element === strToSearch) {
      result = true;
    }
    //an else here putting "false" as the result will overwrite
    //the true, if found in the if. fixed with starting value of result to false
  });

  return result;
}

//console.log(doesWordExist(words2, "machine"));
