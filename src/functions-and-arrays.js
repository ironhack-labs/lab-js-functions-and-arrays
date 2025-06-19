// Iteration 1 | Find the Maximum
function maxOfTwoNumbers() {}

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) { 
  let longest = ""; 
 if (wordsArray.length === 0) {
    return null; 
 }
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longest.length) {
      longest = wordsArray[i];
    }
  }

  return longest;
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(AllNumbers) {
    let total = 0;
    for (let i = 0; i < AllNumbers.length; i++) {
        total = total + AllNumbers[i];  
    }
    return total;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        return 0; 
    }
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
console.log(total)



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, word) {
      if (wordsArray.length === 0) {
    return null;  
      }
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === word) {
      return true;  
    }
  }
  return false;  
}