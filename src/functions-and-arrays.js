// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 == num2) {
        return num1;
    } else {
        return num2;
    }
}

//console.log(maxOfTwoNumbers(3,2));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
//const words = [];

function findLongestWord(arr) {
    let word = '';
    if (arr.length === 0) {
        return null;
    } else {
        for (i = 0; i < arr.length; i++) {
            if (word.length < arr[i].length) {
                word = arr[i];
            }
        }
    }
    return word;
}

//console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) { 
    let sum=0;
    for(i=0;i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
//console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
//const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
const numbers2 = [];

function averageNumbers(arr) { 
    let average=sumNumbers(arr)/arr.length;
    if (arr.length===0){
        return 0;
    } else{
        return average;
    }
}
//console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) { 
    let exists=false;
    if (arr.length === 0){
        return null;
    } else{
        
        for(i=0;i<arr.length; i++){
            if(word===arr[i]){
                exists=true;break
            } else{
                exists=false;
            }
        }
    }
    return exists;
}

//console.log(doesWordExist(words2, 'eati'));