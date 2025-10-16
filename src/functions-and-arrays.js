// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {

    if (a > b) {
        return a    
    } else {
        return b;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

    if (words.length === 0) {
            return null;
        }

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {

        word = words[i];

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    } return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    let sumNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        sumNumbers += num;
    }
    return sumNumbers;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    if (numbers2.length === 0) {
            return 0;
        }

    let average = 0;

    const totalNumbers = numbers2.length;

    const sumArray = sumNumbers(numbers2);

    average = sumArray / totalNumbers;

    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(word2, wordLooking) {
    
    if (word2.length === 0) {
            return null;
        }

    for (let i = 0; i < word2.length; i++) {
        word = word2[i];

        if(word === wordLooking) {
            return true;
        } 
    } return false;
}
