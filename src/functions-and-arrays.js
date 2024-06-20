// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1 > num2){
        return num1;
    } else if(num1 < num2){
        return num2;
    } else if(num1 === num2){
        return num1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArr){
   
    let long = "";
    if(wordArr.length === 0) {
        return null;
    }


    for(let i = 0; i < wordArr.length; i++){
        
        if(wordArr[i].length > long.length){
            long = wordArr[i];       
        } else if(wordArr.length === 1) {
            long = wordArr[0];
        } 
    }

  
        return long;
  
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
       
    let sum = 0;

    for(let i = 0; i < numArr.length; i++){
      sum += numArr[i];
    }

    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
    
    if(numArr.length === 0){
        return 0;
    }
    
    let averageSum = sumNumbers(numArr)/numArr.length;
    
    return averageSum;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArr2,word) {

    let isWord = false;

    if(wordArr2.length === 0){
        return null;
    }

    for(let i = 0; i < wordArr2.length; i++){
        if(wordArr2[i] === word){
            isWord = true;
        }
    }

    return isWord;
}
