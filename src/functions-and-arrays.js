// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1
    }
    else if(num1 < num2){
        return num2
    }
    else{
        return num1
}
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "sfhdjsfhjsdfhjdsfh", "orchard", "crackpot"];

function findLongestWord(arr) {

    if(arr.length !== 0){
        let largest = arr[0];
        for( let i= 0; i < arr.length ; i++){
        if(arr[i].length > largest.length){
         largest = arr[i];
         }
     
         }
 return largest;
    }
    else{
        return 0
    }
    
}







// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if(arr.length !== 0){
        let sum1 = 0
        let avg =0;
        for( let i = 0; i < arr.length; i++){
            sum1 = sum1 + arr[i]
        }
        avg = sum1/arr.length
        return avg
    }
    else{
        return 0
    }
   
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr,word) {
    if(arr.length !== 0){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === word){
                return true
            }
        }
        return false
    }
    else{
        return null
    }
    
}
