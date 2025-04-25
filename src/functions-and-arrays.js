// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    else{
        return number2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if(arrayOfWords.length === 0)
        return null;

    let longest = arrayOfWords[0];
    for (let i = 1; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longest.length) {
          longest = arrayOfWords[i];
        }
    }
    return longest;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    let sum = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }

  return sum;
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers, numbers2) {
    
    let sum = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
    }
    return sum;

   let average = sum / numbers2.length;
   return average;



}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWord, arrayToSearch) {

    if(arrayOfWord.length === 0){
        return null;
    }
    for (let i = 0; i < arrayOfWord.length; i++) {
        if (arrayOfWord.length[i] === arrayToSearch) {
          return true;
        }
    }
    return false;
} 
    

