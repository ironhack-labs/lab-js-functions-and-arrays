// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {

    if(num1>num2){
        return num1;
    
    }
    else if(num1<num2){
        return num2;   
}
else
return num1;

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArr) {

    if(wordArr.length == 0)
        {
            return null;
        }

let LongestWord =wordArr[0];
wordArr.forEach(function(test){

    if(test.length>LongestWord.length){
        LongestWord=test;
    }
});
return LongestWord;

}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {

    let total =0;
numArr.forEach(function(num)
{
    total +=num;
})
return total;

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avgArr) {

    if(avgArr.length==0)
    {
        return 0;
    }
let avgTotal=0;
avgArr.forEach(function(avg){
avgTotal += avg;
});
let average = avgTotal/avgArr.length;
return average;


}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(elementArr,word) {

    if(elementArr.length==0){
        return null;
    }

    else if(elementArr.includes(word)){
        return true;
    }
    else
        {
            return false;
        }
}
