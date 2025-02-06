// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
 
 console.log(maxOfTwoNumbers(5,7));
 console.log(maxOfTwoNumbers(21,17));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordLong) {

    if (wordLong.length === 0) {
        return null;
    }
    let longWord = "";

    for (let i = 0; i < wordLong.length; i++) {
        if (wordLong[i].length > longWord.length) {
            longWord = wordLong[i];
        }
    }
    return longWord;
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sum) {

let sum1 = 0;

for (let i = 0; i < sum.length; i++) {

sum1 += sum[i];
}
return sum1;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array1) {
let sum = 0;

if (array1.length === 0) {
    return 0
    }

for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
    }

return sum / array1.length;
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, findWords) {
    if (words.length === 0) {
        return null;
}
    for (let i = 0; i < words.length; i++) {
        if(words[i] === findWords) {
            return true;
    }
}
            return false;
}