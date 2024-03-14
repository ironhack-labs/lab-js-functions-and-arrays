// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2)
    return num1;
  else if (num2 > num1) {
    return num2
  } else
    return num1
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  if (words.length) {
    let result = [""];
    words.forEach((element) => {
      if (result[0].length < element.length) {
        result[0] = element;
      }
    });
    return result[0];
  } else
    return 0;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length) {
    const sum = sumNumbers(numbers2);
    const avg = sum / numbers2.length;
    return avg;
  } else {
    return 0;
  }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, search) {
  if (!words2.length) {
    return null;
  }
  return words2.includes(search);
}
