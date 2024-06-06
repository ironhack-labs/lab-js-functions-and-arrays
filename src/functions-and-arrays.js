// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let result;
    if (num1 !== num2){
        result = Math.max(num1, num2);
    } else {
        result = num1;
    }
    return result
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let wordlengths = [];
    if (words.length){
        for (let i = 0; i < words.length; i++){
            wordlengths[i] = words[i].length
        }
        let maxlength = Math.max(...wordlengths);
        let index = wordlengths.indexOf(maxlength);
        result = words[index];
    } else {
        result = null;
    }
    
    return result
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {   
        let sum = 0;
        for (let i =0; i < numbers.length; i++){
            sum += numbers[i];
        }
 return sum;   
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let avg = 0;
    let sum =0;
    if (numbers2.length){
        for (let i =0; i < numbers2.length; i++){
            sum += numbers2[i];
        }
        avg = sum/numbers2.length
    }
        
    return avg
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, target) {
    let result;
    if (words.length){
        
        for (let i =0; i<words.length; i++){
            if (words[i] === target) {
                result = true;
                break;
            } else {
                result = false;
            }
        }

    } else {
        result = null;
    }
    return result;
}
