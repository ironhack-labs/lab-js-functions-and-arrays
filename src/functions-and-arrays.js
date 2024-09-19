// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    return Math.max(num1,num2);
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let currLongest = arr[0];
    if(arr.length){
        arr.forEach((e) =>{
            if(e.length > currLongest.length) currLongest = e;
        });
        return currLongest;
    }
    return null;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
    return nums.reduce((acc,curr) => acc+curr, 0);
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
    if(nums.length) return sumNumbers(nums)/nums.length;
    return 0;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr,target) {
    if(arr.length) return arr.includes(target);
    return null;
}
