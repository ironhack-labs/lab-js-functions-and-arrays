// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1>num2) {
        return num1
     } else if(num1<num2){
        return num2
     }
     else {
return num1
     }
    }



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(names){ 
    if(names.length !== 0){
    let largestWord = names[0]
    for(let i=0; i< names.length; i++){
        if(names[i].length > largestWord.length){
            largestWord =names[i];
        }
    }
    return largestWord
        }
        else {
            return 0
        }
}
findLongestWord(words)





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(nums) {
    let sum=0;
    for(let i = 0; i<nums.length;i++){
        sum += nums[i];
    }
    return sum;
    }
    sumNumbers(numbers);
      
   
   





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums){
    if(nums.length===0){
        return 0;
    }else{
            return sumNumbers(nums)/nums.length;
        }
    }
    averageNumbers(numbers2);
    





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords, word) {
    if(arrWords.length===0 ){
        return null;
    } 
    for(let i=0; i< arrWords.length; i++){
        if(arrWords[i]===word){
        return true;
    }
}
return false
}



