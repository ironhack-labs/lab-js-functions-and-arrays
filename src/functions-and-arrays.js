// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(x,y) {
    if(x > y){
        return x;
    }else if (y > x){
        return y;
    }else if (y === x){
        return y;
    }
}

maxOfTwoNumbers(2,3);




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
let result;
let word;


if(words.length == 0){
    result = null;
}

for(let i = 0; i < words.length; i++){
    word = words[i];
    if(words.length < word.length){
        result = word;
    }
    
}
return result;
}
findLongestWord(words);





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

let sum = 0;

for(let i = 0; i <numbers.length; i++){
    sum+=numbers[i];
    
}
return sum;
}
sumNumbers(numbers);




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    let somme = sumNumbers(numbers);
    let result;

    if(numbers.length === 0){
        result = 0;
    }else if(numbers.length > 1){
        result = somme/numbers.length
    }else{
        result = somme;
    }
   return result
}

averageNumbers(numbers2);




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const word = "machine";

function doesWordExist(words2, word) {
    
    let result;
    for(let i = 0; i <words2.length; i++){
        if(word === words2[i]){
            result = true;
            break;
        } else {
            result = false;
        }
    }
    if(words2.length === 0){
        result = null;
    }
    return result;

    
}
doesWordExist(words2, word);


