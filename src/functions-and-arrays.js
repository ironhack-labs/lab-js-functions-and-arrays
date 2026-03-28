// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1
  }

  return num2
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
  
  if ((arr.length === 2 && arr[0].length === arr[1].length) || arr.length === 1) {
    return arr[0]
  }

  if (arr.length === 0) {
    return null
  }
  
  let longest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    const word = arr[i];

    if (longest.length < arr[i].length) {
      longest = word
    }
  }
  
  return longest
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    
    sum += number
  }

  return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length === 0) {
    return 0
  }

  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    
    sum += number
  }

  return sum / arr.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordSearch) {
  if (arr.length === 0) {
      return null
    }
  
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    
    if (word === wordSearch) {
      return true
    }
  }

  return false
}
