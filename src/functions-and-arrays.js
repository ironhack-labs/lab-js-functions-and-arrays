console.log("My name is Shannon and I'm figuring out JS");

// const anyNumber = 5.679345;
// const roundedToOne = 

// Iteration 1 | Find the Maximum
// Implement the function maxOfTwoNumbers that takes two numbers 
// as arguments and returns the bigger number.

function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2; //if else to ternary condition
}

const result = maxOfTwoNumbers(1, 209273);
console.log(result);



// Iteration 2 | Find the Longest Word
// Implement the function findLongestWord that takes as an argument an array of words 
// and returns the longest one. If there are 2 with the same length, 
// it should return the first occurrence.

// forEach() SYNTAX: 

// array.forEach(function(currentValue, index, array) {
//     // code to be executed for each element
// }, thisArg);


//for each element(item) in the array words 

function findLongestWord(words) {
    let longestWord = "";

    words.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    console.log("The longest word is:", longestWord);
}

const words = ["mystery", "brother", "aviator", "crocodile",
    "pearl", "orchard", "crackpot"];
findLongestWord(words);

//Do another exercise where  you find the longest word in an array




const fruits = ["apple", "banana", "orange", "grape", "kiwi"];



// Iteration 3 | Sum Numbers

// Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

// Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the reduce array method, making your work significantly easier. For now, let's practice the "declarative" way of adding values using loops.

// You can use the following array to test your solution:

function sumNumbers() {

    const result = numbers.reduce(
        (accumulator, currValue) => accumulator + currValue,
        0
    );

    return result;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log(sumNumbers());


// Iteration 4 | Numbers Average


function calculateAverage() {
    const numbersArray = [2, 6, 9, 10, 7, 4, 1, 9];
    const sum = numbersArray.reduce((acc, init) => acc + init, 0) //Prefer this format 
    const avg = sum / numbersArray.length;
    return avg;
}

console.log(calculateAverage());



// Iteration 5 | Find Elements
// Let's create a simple array search.
// Declare a function named doesWordExist that will take in an array of words 
// as one argument and a word to search for as the other. 
// Return true if the word exists in the array; otherwise, return false.
// The function should return null if an empty array is passed as an argument.

function doesWordExist(arrayOfWords, wordToSearch) {
    if (arrayOfWords.length === 0) {
        return null; //Stuck here
    }
}


const wordArray = ["machine", "subset", "trouble", "starting",
    "matter", "eating", "truth", "disobedience"];


