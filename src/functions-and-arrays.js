// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
let max = 0;
for(let i = 0; i< maxOfTwoNumbers.length;i++){
    if(num1 > max){
        max = num1;
    }else if(num2 > num1){
        max = num2;
    }
}
return max
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";

    if(words.length === 0){
        return null;
    }
    for(let i = 0; i < words.length ; i++) {
        if(words[i].length > longestWord.length){
            longestWord = words[i]
        }
    };
    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let totalNum = 0;
    numbers.forEach(function (element) {
        totalNum += element;
    });
    return totalNum;
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }
    let totalAverNum = 0;
    for(let i = 0; i< numbers2.length;i++){
        totalAverNum += numbers2[i];
    }
    return totalAverNum / numbers2.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToFind) {
    if(words2.length === 0){
        return null;
    }
    for(let i = 0; i< words2.length; i++)
    if(words2[i]=== wordToFind){
        return true
    }
    return false
    }
