// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } else {
    return num1
  }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
  let longestWord = ""
  if (array.length === 0) {
    return null
  }

  for (let i = 0; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i]
    }
  }
  return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
  let arrayTotal = 0
  for (let i = 0; i < arrNum.length; i++) {
    arrayTotal += arrNum[i]
  }
  return arrayTotal
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrSum) {
  let sumTotal = 0
  let result = 0
  for (let i = 0; i < arrSum.length; i++) {
    sumTotal += arrSum[i]
    result = sumTotal / arrSum.length
  }
  return result
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {

  if (array.includes(word)) {
    return true
  } else if (array.length === 0) {
    return null
  } else {
    return false
  }
}
