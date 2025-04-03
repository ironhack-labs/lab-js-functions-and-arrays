// Iteration 1 | Find the Maximum
function maxOfTwoNumbers (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return num1;
}}

//to test use console.log
console.log(maxOfTwoNumbers (5, 10));
console.log(maxOfTwoNumbers (22, 5));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longestWord = "";

    arr.forEach(function(word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

console.log(findLongestWord(words)); // should print "crocodile"




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(allNumbers) {
   let sum = 0;
    
    allNumbers.forEach(function (element) {
    sum += element;     
   });
   return sum;
};

//console.log(sumNumbers(numbers));


//code had many syntax mistakes had to run it to check
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) 
    return 0;

    let sum = 0;
    
    arr.forEach(function(num) {
        sum += num;
    });

    let average = sum / arr.length;
    return average;
}

//console.log(averageNumbers(numbers);)



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
//Instance of i in every single loop

function doesWordExist(arr, word) {
   if (arr.length === 0) {
    return null;
   }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === word){ 
        return true;
    }
  }
        return false;
}


  
    
  


