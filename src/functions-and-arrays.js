// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if(number1>number2){
    return (number1)}
    else if(number1<number2){
        return(number2)
    }
    else{
        return(number1)
    }
    
}

console.log(maxOfTwoNumbers)



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(word1) {
    let longestWord="";
    if(word1.length===0){
        return null;
    }
    word1.forEach(function(word2){
        if(word2.length>longestWord.length){
            longestWord=word2;
        }
    })
    return (longestWord)
}

/*console.long(findLongestWord)*/


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(manoloSpace) {
    let sumita=0
    for(let i=0; i < manoloSpace.length; i++)
    sumita+=manoloSpace[i]
return sumita
}




// Iteration 4 | Numbers Average
/*const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];*/

function averageNumbers(num) {
    let sum=0;
    if(num.length===0){
        return 0
    }
    for(let i=0;i<num.length;i++){
     sum+=num[i];
    }
    return sum/num.length;

}



// Iteration 5 | Find Elements
/*const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];*/

function doesWordExist(word) {
let emptyArr="";
if(!emptyArr){
    return null
}
if (typeof numbers===true){
    return false
}
}