// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
    if(firstNumber > secondNumber){
        return firstNumber;
    }else{
        return secondNumber;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if(arrayOfWords.length ===0){
        return null
    }
    let longestWord= arrayOfWords[0];
    for(let i =0; i< arrayOfWords.length; i++){
        console.log(arrayOfWords[i].length);
        if(arrayOfWords[i].length> longestWord.length){
            longestWord= arrayOfWords[i];
        }
    }
    return longestWord;
}
findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arryOfNumbers) {
    if(arryOfNumbers.length===0){
        return 0;
    }
    let sum=0;
    for(let i=0; i< arryOfNumbers.length; i++){
        sum +=arryOfNumbers[i];
    }
    return sum;
}
console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers( arryOfNumbers) {
    if(arryOfNumbers.length===0){
        return 0;
    }
    let sum=0;
    for(let i = 0; i< arryOfNumbers.length; i++){
        sum += arryOfNumbers[i];
    }
    const average = sum / arryOfNumbers.length;
    return average;
}
console.log(averageNumbers(numbers2));
// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2Array, wordToFind) {
    if (words2Array.length === 0) {
        return null;
    }

    for (let i = 0; i < words2Array.length; i++) {
        if (words2Array[i] === wordToFind) {
            return true;
        }
    }
    return false;
}
