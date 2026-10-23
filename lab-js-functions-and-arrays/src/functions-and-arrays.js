// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    return Math.max(a,b);
}
console.log(maxOfTwoNumbers(18,27));




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";

    for (let i = 0; i < words.length; i++){
        if (words[i].length > longestWord.length){
            longestWord = words [i];
        }
    }
    return longestWord
}
console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){
    let total = 0;

    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
        return total;
}
console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
        let totalSumForAverageNumbers = 0;

    for (let i = 0; i < numbers2.length; i++){
        totalSumForAverageNumbers += numbers2[i];
    }
        return totalSumForAverageNumbers/numbers2.length;
}

console.log(averageNumbers(numbers2));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, searchWordsToFind) {
    if (words2.length === 0) {
        return null;
    } 
    for (let i = 0; i < words2.length; i++){
        if (words2 [i] === searchWordsToFind {
            return true;
        }
    }
        return false;
}
