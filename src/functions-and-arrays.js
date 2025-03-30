// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else {
      return a; // o b, da igual si son iguales
    }
  }

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null;
  
    let longest = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
  
    return longest;
  }


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) return 0;
  
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) return 0;
  
    const sum = sumNumbers(numbers);
    return sum / numbers.length;
  }



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {
    if (wordsArray.length === 0) return null;
  
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i] === wordToSearch) {
        return true;
      }
    }
  
    return false;
  }

  // Iteration 2
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

// Iteration 3
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Iteration 4
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

// Iteration 5
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];