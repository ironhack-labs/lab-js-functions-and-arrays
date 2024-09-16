// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1,num2) {
   if (num1>num2){
    return (num1);
    }
    if (num1<num2){
        return (num2);
        }
    else
      return (num1,num2);  
    
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(word){
    
    let longestWord = "";
    if (word.length === 0){
        return 0;
    }
    word.forEach((word1)=>{
        if(word1.length>longestWord.length){
            longestWord=word1;
        }
    })
     
return (longestWord);
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
    let sum=0;
    for (let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(nums) {

    if (nums.length === 0){
        return 0;
    }
    return (sumNumbers(nums)/nums.length);
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, equalWord) {
wordFound = false;
    if (words.length === 0){
        return null;
    }
    words.forEach(word =>{
        if (word === equalWord){
        wordFound = true
        }
        
    })

    if(wordFound===true){
        return true;
    }
    else{
        return false;
    }

    


}
