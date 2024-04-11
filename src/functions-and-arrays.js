// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numberOne,numberTwo) {
    if(numberOne > numberTwo){
        return numberOne;
    }
    else if(numberTwo>numberOne){
        return numberTwo
    }
    else{
        return numberOne = numberTwo
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    let maxLength = 0;
    let longestWord = "";
    if(array.length === 0){
        return null;
    }
    for(let i = 0; i < array.length; i++){
        currentWord = array[i]
        if(currentWord.length > maxLength){
            maxLength = currentWord.length
            longestWord = currentWord;
        }
        
        
    }
    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result += array[i]
    }
    return result;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if(arr.length === 0){
        return 0;
    }
    const sum = sumNumbers(arr)
    const result = sum / arr.length
    return result;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayToSearch,wordToSearch) {
    if(arrayToSearch.length === 0){
        return null;
    }
    if(arrayToSearch.includes(wordToSearch)){
        return true;
    }
    else {
        return false;
    }

}

    //Number 2
    
    // let found = false;
    // arrayToSearch.forEach(function(word) {
    //     if (word === wordToSearch){
    //         found = true;
    //     }
    // });
    // return found
    