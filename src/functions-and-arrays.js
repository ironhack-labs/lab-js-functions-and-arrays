// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1 > num2){
        return num1;
    }else if(num1 < num2){
        return num2;
    }
    else{
        return num1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(word) {
    if(!word.length) return null;
    let big = word[0];
    for(let i = 0; i < word.length; i++){
        let wordMaybe = word[i];
        if(big.length < wordMaybe.length){
            big = wordMaybe;
        }
    }
    return big;
}

 





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i ++){
        sum += numbers[i];
    }
    
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let average = 0;
    let total = 0;
    for(let i = 0; i < numbers2.length; i++){
    total += numbers2[i];
    average = total / numbers2.length;
    }
    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,word) {

    if(!words2.length) return null;

    if(words2.includes(word)){
        return true;
    }else{
        return false;
    }
}
