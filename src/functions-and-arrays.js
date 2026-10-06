// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1
    } else {
        return num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

const arr1 = ["naranja", "melon", "banana", "manzana"];

function findLongestWord(arr) {

    if (arr.length === 0){
        return null
       };

    let longestWord = arr[0];

    arr.forEach(element => {

       if (element.length > longestWord.length){
            longestWord = element;
       }

    });

    return longestWord;
    
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const numeros = [1,2,3,4,5,6,7];

function sumNumbers(numArr) {

    if (numArr.length === 0){
        return 0
    };

    let total = 0;

    numArr.forEach(function(nums){
        
        total += nums;
    })

    return total;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nuArr) {

    if (nuArr.length === 0){
        return 0
    };

    let totals = 0;

    nuArr.forEach(function(num){
        
        totals += num;
    });

    let average = totals / nuArr.length;

    return average;

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

const wordFind = "hola";

function doesWordExist(wordArr) {

    if (wordArr.length === 0){
        
        return null;
    }  ;

    let resultado = wordArr.includes(wordFind);

    return resultado;
    
}

console.log(doesWordExist(words2));