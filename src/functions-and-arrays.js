// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1,n2) {
    if(n1>n2){
        return n1
    } else if (n2>n1){
        return n2
    }else {
        return n1,n2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = null; // Initialize longestWord to null
  
    for (let i = 0; i < words.length; i++) {
      if (!longestWord || words[i].length > longestWord.length) {
        longestWord = words[i]; // Update the longest word if a longer word is found
      }
    }
  
    return longestWord;
  }



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
      }
    let average=0;
    for (let i = 0; i < numbers2.length; i++) {
        average += numbers2[i];
    } 
    return average/numbers2.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];


function doesWordExist(arr, wrdsearch) {
    if (arr.length === 0) {
      return null; // Return null for an empty array
    } else if (arr.indexOf(wrdsearch) !== -1) {
      return true; // Word exists in the array
    } else {
      return false; // Word doesn't exist in the array
    }
  }
  