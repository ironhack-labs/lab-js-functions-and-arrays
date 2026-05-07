// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1>num2){
        return num1
    } else if(num2>num1){
        return num2
    } else{
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArr) {

    let currentWord = '';
    if(wordsArr.length === 0){
        return null;
    }
    wordsArr.forEach(function(element, index, arr){
        if(element.length > currentWord.length){
            currentWord = element;
        } 
    })

    return currentWord;
}

console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
    let sumOfNumbers = 0;
    num.forEach(function(element,index){
        sumOfNumbers += element
    })
    return sumOfNumbers
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
    
function averageNumbers(num) {
    if(num.length === 0){
        return 0;
    }
    let sumOfNumbers = 0;
    num.forEach(function(element,index){
        sumOfNumbers += element;
    })
    const avg = sumOfNumbers/num.length;
    return avg;
}

console.log(averageNumbers((numbers)))



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
    let wordFound = true;

    function doesWordExist(words,wordToSearch) {
    if(words.length === 0){
        return null;
    }
    if(words.includes(wordToSearch)){
        return true;
    } else if(words !== wordToSearch){
        return false;
    }
}
