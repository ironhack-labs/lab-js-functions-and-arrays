// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if ( num1 > num2){
        return num1;
    }
    else if (num1 < num2){
        return num2;
    }
    else{
        return num1;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordInput) {
    let longestWord = "";
    if (wordInput.length === 0){
        return null;
    }
    wordInput.forEach(function (word1){
        if(word1.length>longestWord.length){
            longestWord=word1;
        }
    })
    return (longestWord)
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
    let add =0;
    for (let i=0; i<num.length; i++){
        add+=num[i];
    }
    return add;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num) {
    let add =0;
    if (num.length === 0){
        return 0
    }
   
   for (let i=0; i<num.length; i++){
    add+=num[i];
} 
return add/num.length;
}

    


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(palabros, wordSearch) {
    let emptyArray = ""
    if (!emptyArray){
        return null
    }
    palabros.forEach(function (equalWord){
        if (palabros === wordSearch){
            emptyArray = true
            
        }
    })
    return true}
    /*
    else if(palabros === wordSearch){
        emptyArray = true
    }
}
wordInput.forEach(function (word1){
        if(word1.length>longestWord.length){
            longestWord=word1;*/