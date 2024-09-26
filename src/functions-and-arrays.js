let numberOne = "23";
let numberTwo = "23";

function maxOfTwoNumbers(numberOne, numberTwo) {
    if (numberOne > numberTwo) { 
        return (numberOne);
    } else if (numberOne < numberTwo) {
        return (numberTwo);
    } else {
        return (numberOne);
    }
}

let result = maxOfTwoNumbers(numberOne, numberTwo);
console.log(result);



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let theLongestWord = ''
    if (words.length === 0) return 0;

    words.forEach((currentWord)=> {
        if(currentWord.length > theLongestWord.length){
            theLongestWord = currentWord
        }
    });
    return theLongestWord
    }

const ourLongestWord = findLongestWord(words);
console.log(ourLongestWord);





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const totalSum = sum ;
    return totalSum;
}

const sumOfNumbers = sumNumbers(numbers); // Corrected the function call
console.log(sumOfNumbers);



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
    }
    const average = sum / numbers2.length;
    return average;
}
const finalAverageNumbers = averageNumbers(numbers2);
console.log(finalAverageNumbers);



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {
    if (array.length === 0) {
        return null;
    } else if (array.includes (word)) {
        return true;
    } else {
        return false;
    }
}
// const testDoesWordExist = doesWordExist(word);
// console.log(testDoesWordExist);


