// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if ( a > b) {
        return a
    }
    else {
        return b 
    };
};




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null;

    let longestWord = "";
    

    words.forEach(element => {
        if (element.length > longestWord.length){
            longestWord = element;
        };
    });

    return longestWord;
}

console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sumAllNumbers = 0;

    numbers.forEach(number => {
        sumAllNumbers += number;
    });

    return sumAllNumbers;
};




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {

    if (arr.length === 0){
        return 0;
    }

    let total = 0;

  arr.forEach(function(number) {
    total = total + number 
  })  
  return total / arr.length
};




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordsToSearch) {

    if(arr.length == 0){
        return null
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === wordsToSearch) {
            return true
        }
    } 
    return false
}







