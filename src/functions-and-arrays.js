// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    return Math.max(number1,number2)
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {
    return arrayWords[arrayWords.map(word => word.length).indexOf(Math.max(...arrayWords.map(word => word.length)))];
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){
    let i = 0;
    sum = 0;
    while (i<numbers.length){
      sum += numbers[i];
      i++;
    }
    return sum    
  }

console.log(sumNumbers(numbers))


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {}

function averageNumbers(numbers) {
    return sumNumbers(numbers)/numbers.length
  }


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsList = null, word) {
    
    if (wordsList == null || !Array.isArray(wordsList) || wordsList.length === 0) {
        return null;
    }
    
    return wordsList.includes(word);
}