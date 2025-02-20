// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1; 
    } else if (num2 > num1) {
        return num2; 
    } else {
        return num1; 
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null; 
    if (words.length === 1) return words[0]; 
  
    let longestWord = words[0]; 
  
    for (let i = 1; i < words.length; i++) { 
      const testWord = words[i];
  
      if (testWord.length > longestWord.length) {
        longestWord = testWord; 
      }
    }
  
    return longestWord; 
  }



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
    if (numbers.length === 0) return 0; 
   
let sum = 0;
for (let i=0;  i < numbers.length; i++){
    sum += numbers[i];
}
 return (sum);
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
let avgNumber = 0;

function averageNumbers(numbers2) {
    let sum=0;
    if (numbers2.length === 0) return 0;
    for(let i=0; i <numbers2.length;i++){
      sum += numbers2[i];
    }
    avgNumber = sum / numbers2.length;
    return avgNumber;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, searchWord) {
    if (words2.length === 0) return null; 

    return words2.includes(searchWord); 
}