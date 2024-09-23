// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    return a > b ? a: b;
}
console.log(maxOfTwoNumbers(5, 10));// 10



// Iteration 2 | Find the Longest Word
function findLongestWord(words) {
    if (words.length === 0) {
      return null; // If array is empty, return null
    }
    
    let longestWord = words[0];
    
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i]; // Update longest word if the current one is longer
      }
    }
    
    return longestWord;
  }
  
  const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
  console.log(findLongestWord(words));// crocosile,




// Iteration 3 | Sum Numbers
 function sumNumbers(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; // Add each number to the sums
    }
    
    return sum;
  }
  
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  console.log(sumNumbers(numbers)); // Output: 87
  
  
  
// Iteration 4 | Numbers Average
    function averageNumbers(numbers) {
    if (numbers.length === 0) {
      return null; // Return null if the array is empty
    }
  
    let sum = sumNumbers(numbers); // Use the sumNumbers function to get the total sum
    return sum / numbers.length; // Calculate the average
  }
  
  const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
  console.log(averageNumbers(numbers2)); // Output: 6
  
  

// Iteration 5 | Find Elements

function doesWordExist(words, wordToFind) {
    if (words.length === 0) {
      return null; // If array is empty, return null
    }
    
    for (let i = 0; i < words.length; i++) {
      if (words[i] === wordToFind) {
        return true; // Return true if the word is found
      }
    }
    
    return false; // Return false if the word is not found
  }
  
  const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
  console.log(doesWordExist(words2, "matter")); // Output: true
  console.log(doesWordExist(words2, "apple")); // Output: false
     
