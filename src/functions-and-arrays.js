// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return (num1);
    }
    else if(num2 > num1){
        return (num2);
    }
    else{
        return (num1);
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let res = '';
    if (!words.length){
        res=null;
    }
    for (let i=0; i < words.length; i++){
        if (words[i].length > res.length){
            res = words[i]
        }
    }
    return (res);
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(datos) {
    let sum = 0;
    for (let i=0; i <datos.length; i++){
        sum += datos[i];
    }
    return (sum)
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(datos) {
    let sum = sumNumbers(datos);
    if (sum === 0){
        return (0);
    }
    return (sum / datos.length)
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, coincidence) {
    if (words.length === 0){
        return (null);
    }
    if (words.indexOf(coincidence) >= 0){
        return (true);
    }
    else{
        return (false);
    }
}
