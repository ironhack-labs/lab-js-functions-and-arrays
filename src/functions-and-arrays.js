// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let result = ''
    if (arr.length === 0){
        return null
    } 
    arr.forEach(function(element) {
        if (element.length > result.length){
            result = element
        }
    })
    return result
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let result = 0;
  for (const num of arr) {
    result += num;
  }
  return result;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0){
        return 0
    }
    const sum = sumNumbers(arr);
    return sum / arr.length

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
  if (arr.length === 0) {
    return null;
  }
  for (const element of arr){
    if(element === word){
        return true
    }
  }
  return false
}
