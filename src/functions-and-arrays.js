// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
if(a >= b){
    return a;
}
return b;
}
maxOfTwoNumbers(89,99);
console.log("maximum number is: " );



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

let longestWord = words[0];
 words.forEeach(function (words) {
    if(words.length > longestWord.length){
        return longestWord;
    }else{
        return null;
    }

})
console.log(longestWord(words));






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(numbers) {
    let sum = 0; 
  
    
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum; 
  }
  
  console.log(sumNumbers(numbers)); 



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function sumNumbers(numbers2) {
    let sum = 0; 

    for (let i = 0; i < numbers2.length; i++) {
      sum += numbers2[i]; 
    }
    return sum; 
  }
  
  function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0; 
    
}else {
    
     return sum / numbers2.length;
}



// Iteration 5 | Find Elements

const words2  =  ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words , target) {
    let target = words[0];
     
    if(words.length === 0) {
        return null;
    }
       if(words[i] === target){
       return true;
       }
    }

console,log("target is found : " target);
