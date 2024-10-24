// Iteration 1 | Find the Maximum

var num1 = 15
var num2 = 15

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if(num2 > num1) {
      return num2;
    } else {
      return num2
    }
  }
  console.log(maxOfTwoNumbers(num1,num2));


// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  } else {
    let n = 0;
    let index = 0;
    for (let i = 0; i < words.length; i++) {
      if (n < words[i].length) {
        n = words[i].length;
        index = i;
        return words[index];
      }
    }
  }
}
console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
      }
  return sum;
}

console.log(sumNumbers(numbers));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

  let sum = 0;

  for (let i = 0; i < numbers2.length; i++) {
     sum += numbers2[i];
    
  }

  return sum / numbers2.length;

}

console.log(sumNumbers(numbers2));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2) {

  if (condition) {
    
  } else {
    
  }

}
