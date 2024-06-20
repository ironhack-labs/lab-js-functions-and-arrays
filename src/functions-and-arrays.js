// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1

    }
    else if(num1 < num2){
        return num2
    }
    else if(num1 = num2){
        return num1

    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr1) {
    
    
    if(arr1.length === 0){
        return null
            }

let max = ""; 

for (let i = 0; i < arr1.length; i ++){

    if(arr1[i].length > max.length){
        
     max = arr1[i];
         }
   
         
}
return max

}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
    let sum = 0;
    for(let i=0 ; i < arrNum.length; i++){

        sum = arrNum[i] + sum;

    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrAverage) {

    let numeArg = 0;
if(arrAverage.length === 0){
     return 0
}
    for(let i = 0; i < arrAverage.length; i++){
       numeArg = numeArg + arrAverage[i] 
    }
    numeArg = numeArg / arrAverage.length;
    return numeArg
  
    
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWord, word) {
   if (arrWord.length === 0){
     return null
   }
    for (let i = 0; i < arrWord.length; i ++){

      if(arrWord[i].includes(word)){
     return true
   }
}
return false
      
    
}
