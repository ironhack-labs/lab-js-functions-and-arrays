// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let result = 0;
    result = Math.max(num1,num2);
    return result
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    let maxNumCharacters = 0;
    if (words.length === 0) {
        return null;
    }
    else {
    for (let i=0;i<words.length;i++){
            if (words[i].length > maxNumCharacters){
                maxNumCharacters = words[i].length;
                longestWord = words[i];
            }
        }   
return longestWord;
}
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;
    let avg = 0;
    if (numbers2.length === 0) {
        avg = 0;
    }
    else {
    for (let i=0; i<numbers2.length;i++){
        sum += numbers2[i];
        avg = sum/numbers2.length;
    }
  
}
return avg;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
    let doesExists = false;
    if (words2.length === 0) {
        return null;
    }
    else {
        for (let i=0;i<words2.length;i++){
            if (words2[i] === word){
                doesExists = true;
                break;
            }
        }
    }
    return doesExists
}
