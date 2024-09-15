// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(x, y) {
    if (x>y) {
        return x
    } else {
        return y 
}
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  if (words.length === 0) {
      return 0;
  }

  let longestWord = "";

  for (let word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }

  return longestWord;
}







// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let number of numbers) {
      sum += number;
  }
  return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
 let sum = 0;
  for (let number of numbers) {
      sum += number;
  }
  return sum;
}
function averageNumbers(numbers) {
  if (numbers.length === 0) {
      return 0; 
  }
  
  const sum = sumNumbers(numbers);
  return sum / numbers.length;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {

  if (array.length === 0) {
    return null; 
}

for (let currentWord of array) {
    if (currentWord === word) {
        return true; // Word found
    }
}

return false; // Word not found
}

