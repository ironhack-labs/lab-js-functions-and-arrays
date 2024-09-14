// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null;
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }     
    }
    return longestWord;
}






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sumOf = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sumOf += numbers[i];
    }
    return sumOf;
}

console.log (sumNumbers());




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) return 0;

    let sumOf2 = 0;

    for (let i = 0; i < numbers2.length; i++) {
        sumOf2 += numbers2[i];
    }
    let average = sumOf2 / numbers2.length;

    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
