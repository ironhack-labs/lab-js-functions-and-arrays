// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1 , num2) {
    if(num1 > num2){

        return num1;
    }
    if(num2 > num1){
        return num2;
    }
    return num1;

   // return num1>num2  ? num1: num2
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let max = "";

    if(words.length === 0){
        return 0;
    }

    for(const element of words){
        if(element.length > max.length){
            max = element;
        }
    }
    return max;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for(const element of numbers){
        sum += element;
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if(numbers.length === 0){
        return 0;
    }
    return sumNumbers(numbers)/ numbers.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(searchArray, searchWord) {
    if(searchArray.length !== 0){
        for(const element of searchArray){
            if(element === searchWord){
                return true; 
            }
        }
        return false;
    }
    return null;
}
