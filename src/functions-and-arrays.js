// Iteration 1 | Find the Maximum Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.
// Is a bigger than b?

function maxOfTwoNumbers(a, b) {   
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return a; // or b, since they are equal
    }  
}



// Iteration 2 | Find the Longest Word Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(arrayOfWords) {
  if (arrayOfWords.length === 0) {
    return null;
  }

  let longestWord = "";

  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }

  return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;


 }


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
    }
    let average = sum / numbers2.length;
    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist()   {
    for (let i = 0; i < words2.length; i++) {
        if (words2[i] === "truth") {
            return true;
        }
    }
    return false;
}
