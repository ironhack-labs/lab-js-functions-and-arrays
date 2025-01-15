// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    
    if (arr.length>0){
        let max = arr[0];
        for(val of arr){
            // console.log(val);
            if (val.length > max.length){
                max = val;
                // console.log(max);
            }
        }
        return max;
    }else{
        return null;
    }
    
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
    let sum = 0;
    for(val of nums){
        sum += val;
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
    if (nums.length > 0){
        return sumNumbers(nums)/nums.length
    }else{
        return 0
    }
    
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr,word) {
    if(arr.length<1){
        return null;
    }else if(arr.includes(word)){
        return true;
    }else{
        return false;
    }
}
