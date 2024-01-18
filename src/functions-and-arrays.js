// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(value1,value2) {
    if (value1 > value2) {
        return value1;
    }

    else if (value1 < value2) {
        return value2;
    }

    else if (value1 === value2) {
        return value1,value2;
    }
    }


    

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(names) {
    if (names.length === 0){
        return 0;
    }
        let longestWord = "";
        names.forEach((word1) => {
            if(word1.length > longestWord.length){
                longestWord = word1
            }
        })
    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(nums) {

    let sum = 0;

    nums.forEach(num => {
        sum += num;
    });

    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {

    let sum = 0;

    if (nums.length === 0) {
        return 0;
    }

    for (let i=0; i<nums.length; i++) {
        sum += nums[i];

    }

    return sum/nums.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    
    if (arr.length === 0) {
        return null;
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }

    return false;

}
