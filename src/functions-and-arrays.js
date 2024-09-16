// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    return number1 >= number2 ? number1 : number2;  
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
   let longestWord = '';

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord ? longestWord : 0;

    // One way to do it in one line.
    //return words.sort((a, b) => b.length - a.length)[0] ? words[0] : 0;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let count = 0;
    numbers.forEach(number => count+=number);
    return count;

    // one way to do it in one line.
    //return numbers.reduce((a, b) => a + b, 0);
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    return numbers2.length ? numbers2.reduce((a, b) => a + b) / numbers2.length : 0;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
    return words2.length ? words2.includes(word) : null;
}


