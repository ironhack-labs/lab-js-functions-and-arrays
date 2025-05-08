// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
 let longestWord= '';
 if (array.length === 0){
    return null;
 }
array.forEach((array) => { 
    if (array.length > longestWord.length){
        longestWord = array;
    } 
});
return longestWord;

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNum) {
    let sumTotal = 0;
    for(i = 0; i < arrayNum.length; i++){
        sumTotal = sumTotal + arrayNum[i]
    }
    return sumTotal ;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if(numbersArray.length === 0){
        return 0;
    } 
    let total = sumNumbers(numbersArray);
    return total / numbersArray.length;
    
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2Array, inArray) {

    if(words2Array.length === 0){
        return null;
    }
    let isThere = false;
    words2Array.forEach((thingInside) => {
        if (thingInside === inArray){
            isThere = true;
        }
    })
    return isThere
}
