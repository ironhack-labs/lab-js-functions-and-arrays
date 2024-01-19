// Iteration 1 | Find the Maximum
let num1 = 5;
let num2 = 3;

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
     return num1
    }
    else if (num1 < num2) {
        return num2;
    }
    else {
        return num1 || num2;
    }
}
maxOfTwoNumbers(num1, num2);

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(names) {
    let longestWord = "";
    names.forEach(name => {
        if (name.length > longestWord.length) {
            longestWord = name;
        }
        
    });
    if (longestWord === "") {
        return 0;
    }
    return longestWord;
}

findLongestWord (words);


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
    let sumNumbers = 0;

    for (let i = 0; i < nums.length; i++) {
        sumNumbers += nums[i];
    }

    return sumNumbers;
}

sumNumbers (numbers); 



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

 function averageNumbers(nums) {
    let sumNumbers = 0;

    for (let i = 0; i < nums.length; i++) {
        sumNumbers += nums[i];
    }
    if (nums.length === 0) {
    return 0;
    }
    return (sumNumbers / nums.length);
}
 averageNumbers (numbers2);

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray, searchWord) {

    if (wordArray.length === 0) return null

    for (let i = 0; i < wordArray.length; i++) {
         if (wordArray[i] === searchWord) {
            return true;
        }
    }
    return false;
    }

doesWordExist ();
