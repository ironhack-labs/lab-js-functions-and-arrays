// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNum, secondNum) {
if(firstNum > secondNum) {
return firstNum;
}else{
    return secondNum;
}


}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArray) {
if(wordArray.length === 0){
    return null;
}
let longestWord = wordArray[0];
for(let i = 1; i < wordArray.length; i++) {
    if (wordArray[i].length>longestWord.length) {
        longestWord = wordArray[i];
}
}

return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {

    let finalSum = 0 
    for(let i = 0; i < numArray.length; i++){
    finalSum += numArray[i] 

}
return finalSum

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avNum) {

    if(avNum.length === 0){
        return 0
    }
    let finalSum = 0 
    for(let i = 0; i < avNum.length; i++){
    finalSum += avNum[i] 
}
return finalSum / avNum.length

}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArr, targetWord) {
    if(wordArr.length === 0){
        return null
    }
for(let i = 0; i < wordArr.length; i++)
if(wordArr[i] === targetWord){
    return true
}
return false
    }

