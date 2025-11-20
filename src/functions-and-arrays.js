// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    // return num1 > num2 ? num1 : num2;
    if (num1 > num2) {
        return num1;
    }
    return num2;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    if (words.length === 1) {
        return words[0];
    }
    let LongestWord = words[0];
    words.forEach((word) => {
        if (word.length > LongestWord.length) {
            LongestWord = word;
        }
    });
    return LongestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum;

    // return numbers.reduce((acc, curr) => acc + curr, 0);
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    if (numbers2.length === 0) {
        return 0;
    }

    let sum = sumNumbers(numbers2);
    return sum / numbers2.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, inputWord) {
    
    if (words2.length === 0) {
        return null;
    };

    for (let word of words2) {
        if (word === inputWord) return true;
    }
    return false;
    // return words2.includes(inputWord);
    // return words2.find(word => inputWord === word) ? true : false;
}
