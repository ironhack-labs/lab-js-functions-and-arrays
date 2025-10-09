// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    }else if (num1 < num2) {
        return num2;
    }else {
        return num1;
    }
}

console.log(maxOfTwoNumbers(5, 10));




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
   for (let i = 0; i < words.length; i++)
    if (words.length === "") {
        return null;
    } else if (words.length === 1) {
        return words[0];
    } else {
        let longestWord = "";
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
        }
        return longestWord;
    }



}

console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers( numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } return sum;
    
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers( numbers2) {
    let sum = 0;
    for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
    } return sum / numbers2.length;
   if (numbers2.length === 0) {
        return null;
    }  
} 




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2) {
    if (words2.length === 0) {
        return null;
    }else if (words2.includes("truth")) {
        return true;
    }else if ( words2.includes("dog")) {}
        return false;
    }
console.log(doesWordExist(words2));
 
