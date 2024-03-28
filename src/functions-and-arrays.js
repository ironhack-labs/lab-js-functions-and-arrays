// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if(number1 > number2) {
       return number1;
    } else if(number2 > number1) {
        return number2;
     } else {
        return number1;
     }
}






// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++){
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
return sum;
}





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }
    let sumNum = 0; 
    let avgNum = 0;
    for (let i = 0; i < numbers2.length; i++) {
        sumNum += numbers2[i];
    }
    avgNum = sumNum / numbers2.length; 
    return avgNum;
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
    if(words2.length === 0){
        return null;
    }
    return words2.includes(word)
}

