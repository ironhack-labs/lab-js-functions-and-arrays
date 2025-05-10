// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if(a > b){
        return a;
    } else {
        return b;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  
  
  // Create a variable to store the longest word
  // You could start with the first word in the array
  let longest = words[0];
  
  // Loop through the array starting from the second element
  for (let i = 1; i < words.length; i++) {
    // Compare the current word's length with the longest word's length
    // words[i] is the current word in the loop
    // words[i].length gives you the number of characters in that word
    if (words[i].length > longest.length) {
      // If the current word is longer, update your longest word
      longest = words[i];
    }
  }
  
  // After the loop, return the longest word found
  return longest;
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total = 0;
    for (let i = 1; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
    let total = sumNumbers(numbers2);
    return total / numbers2.length;

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(searchWord, words2) {
    for (let i = 1; i <words2.length; i++) {
        if(words2[i] == searchWord)
            return true;
    }
    return false;
}
