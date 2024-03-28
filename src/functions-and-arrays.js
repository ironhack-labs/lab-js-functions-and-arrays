// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if(number1 > number2)
        return number1;
    if(number2 > number1)
        return number2;
    else
        return number1;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    if(words.length === 0){
        return 0;
    }
    for(let i= 0; i < words.length; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        } 
    }
    return longestWord;

}


findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    if(numbers.length === 0){
        return 0;
    }
    for(const index of numbers) {
        sum += index;
    }   
    return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let avg = 0;
    let sum = 0;
    if(numbers2.length === 0)
        return 0;
    for(const index of numbers2) {
        sum += index;
        avg = sum/numbers2.length;
    }
    return avg;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word3) {
  let index =  words.indexOf(word3)
  if(words2.length === 0)
    return null;
  if(index === -1){
    return false;
  }
    return true;
  
}
