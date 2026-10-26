// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}

console.log(maxOfTwoNumbers(9, 10));




// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let longestWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(words));
console.log(findLongestWord([]));



// Iteration 3 | Sum Numbers
    const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum1 = 0;

    for (let i = 0; i < numbers.length; i++) { 
        sum1 = sum1 + numbers[i]; 
    } 
    return sum1; 
    
} 

console.log(sumNumbers(numbers)); 






// Iteration 4 | Numbers Average

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }
    
    let sum = 0;
       
    for (let i = 0; i < numbers2.length; i++) {  
        sum = sum + numbers2[i];
    }
    return sum / numbers2.length;

} 
console.log(averageNumbers(numbers2));   
console.log(averageNumbers([])); 





// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, wordSearch) { 
     if (arr.length === 0) {
        return null; 
     } 

     if (arr.includes(wordSearch)) {
        return true;
     } else {
        return false; 
     } 

} 

console.log(doesWordExist(words2, "subset")); // true
