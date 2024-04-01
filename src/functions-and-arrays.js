// Iteration 1 | Find the Maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.
function maxOfTwoNumbers(num1,num2) {
    if(num1 > num2){
        return num1;
    }
    if(num1 < num2){
        return num2;
    }
    return num1, num2;
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if(array.length === 0){
        return null;
    }
    array.sort(function(a, b) {
        return b.length - a.length;
    });
    return array[0];
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array){
    let result = 0;
    // the number of elements and therefore length of the array is 10 but we start counting at 0 to access the first element > until [9].
    for(let i = 0; i < array.length; i++){
      result += array[i]
    }
    return result;
  }


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(input) {
    if(input.length===0){
        return 0;
    }
    let sum = sumNumbers(input);
    return sum/input.length;
}

// Iteration 5 | Find Elements
// Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.
// The function should return null if an empty array is passed as an argument.

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, searchString) {
    if(words.length===0){
        return null;
    }
    if(words.includes(searchString)){
        return true;
    } else {
        return false;
    }
}
