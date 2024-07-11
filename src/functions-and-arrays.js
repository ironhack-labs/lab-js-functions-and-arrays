// Iteration 1 | Find the Maximum

// Implement the function `maxOfTwoNumbers` that takes two numbers as arguments and returns the bigger number.

const smallernumb = 50
const biggerNumb = 100

function maxOfTwoNumbers(smallernumb, biggerNumb) {
    if (smallernumb > biggerNumb) {
        return smallernumb;
    } else {
        return biggerNumb;
    };
}
    console.log(maxOfTwoNumbers(smallernumb, biggerNumb));




// Iteration 2 | Find the Longest Word

/*
Implement the function `findLongestWord` that takes as an argument an array of words and returns the longest one.
If there are 2 with the same length, it should return the first occurrence.
The function should return `null` if an empty array is passed as an argument.
*/

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

/*
function findLongestWord(arrayOfWords) {

    for (let i = 0; i < arrayOfWords.length, i++)

}
*/



// Iteration 3 | Sum Numbers

/*
Calculating a sum can be as simple as iterating over an array and adding each of the elements together.
Implement the function named `sumNumbers` that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the `reduce` array method, making your work significantly easier. For now, let's practice _the "declarative"_ way of adding values using loops.
You can use the following array to test your solution:
*/
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {

    let sum = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }

    return sum;
}

console.log(sumNumbers(numbers));


// Iteration 4 | Numbers Average
/*
Calculating an average is a prevalent task. So let's practice it a bit.

**The logic behind this:**

1. Find the sum as we did in the first exercise (or how about reusing the function `sumNumbers()`?)
2. Divide that sum by the number of elements in the array.
Implement the function `averageNumbers` that expects an array of numbers and returns the average of the numbers.

You can use the following array to test your solution:
*/

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];



function averageNumbers() {}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
