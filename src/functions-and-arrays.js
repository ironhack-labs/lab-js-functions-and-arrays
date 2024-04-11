// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if ( num1 < num2){
        return num2
    }
    else if ( num1 > num2){
        return num1
    }
    else {
        return num1
    }


}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(longWord) {
    let findLongestWord1 = "";
    if (longWord.length === 0){
        return null;
    }
    longWord.forEach(function (word1){
        if(word1.length > findLongestWord1.length){
            findLongestWord1 = word1;
        }
     })
     return(findLongestWord1)
    }    
    
console.log 




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sumNumbers1) {
    let sum=0
    for(let i=0; i < sumNumbers1.length; i++){
        sum += sumNumbers1[i]
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageArr) 
{
     let sumNum = 0; 
     let averageNum = 0; 

     for (let i = 0; i < averageArr.length; i++)
     {
         sumNum += averageArr[i];

         averageNum = sumNum/averageArr.length
 
     }
    return averageNum; 

}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordExist, wordSearch) {
    let emptyArray = ""

    if(!emptyArray){
        return null
    } 
    
    else if( ){
        emptyArray = true
    }

}
