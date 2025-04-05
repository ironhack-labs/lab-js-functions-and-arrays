// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numOne, numTwo) {
    let biggestNumber;
    if (numOne > numTwo) {
        biggestNumber = numOne;
    } else {
        biggestNumber = numTwo;
    }
    return biggestNumber;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;    
}






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    if (numbers.length === 0) {
        return sum;
    }
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        sum += currentNumber;
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersToAverage) {
    let averageNumber = 0;
    if (numbersToAverage.length === 0) {
        return averageNumber;
    }
    const sumOfNumbers = sumNumbers(numbersToAverage);
    const numbersQuantity = numbersToAverage.length;
    averageNumber = sumOfNumbers / numbersQuantity;
    return averageNumber;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToLookFor) {
    if (arrayOfWords.length === 0) {
        return null;
    }
    let found = false;
    for (let i = 0; i < arrayOfWords.length; i++) {
        const currentWord = arrayOfWords[i];
        if (wordToLookFor === currentWord) {
            found = true;
        }
    }
    return found;
}
