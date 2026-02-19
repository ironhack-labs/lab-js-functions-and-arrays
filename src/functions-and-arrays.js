// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null;

    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }
    return longest;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0
    }
    let total3 = numbers[0]

    for (let i = 1; i < numbers.length; i++)
        total3 = (total3 + numbers[i])
    return total3;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0
    }
    let total3 = numbers2[0]

    for (let i = 1; i < numbers2.length; i++)
        total3 = (total3 + numbers2[i])
    total4 = (total3 / numbers2.length)

    return total4;


}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];



function doesWordExist(wordsArray, wordTofind) {
    if (wordsArray.length === 0) return null;
    for (let i = 0; i < wordsArray.length; i++)
        if (wordsArray[i] === wordTofind) {
            return true
        }
    return false
}
