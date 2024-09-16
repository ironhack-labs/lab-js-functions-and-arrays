// Iteration 1 | Find the Maximum
let number1 = "";
let number2 = "";

function maxOfTwoNumbers(number1, number2) {
    return Math.max(number1, number2)
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(names) {
    if (names.length === 0){
        return 0;}

        let longestWord = "";
        names.forEach((name)=>{
            if (name.length > longestWord.length) {
                longestWord = name;
            }
            else if (names.length === 0){
                return ;}
        } 
        )
        return longestWord;
    }
    findLongestWord(words);


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
    if  (nums.length === 0) {
    return 0;
    }
    else {
        return (sumNumbers(nums)/nums.length);
    }      
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayToSearch, word) {
        if (arrayToSearch.length === 0) {
        return null;
    }
        for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i] === word) {
            return true;
        }
        }
        return false;
    }
        console.log(doesWordExist(words2, "machine"))
           

