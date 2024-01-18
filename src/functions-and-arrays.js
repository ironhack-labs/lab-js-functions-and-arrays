// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2){
        return num1
    } else if (num2> num1){
        return num2
    } else {return num1 = num2}
}

      maxOfTwoNumbers(2,1)




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
let word = "";

function findLongestWord(arr){

    if(arr.length === 0) return 0;

    let longestWord = arr[0]

    for (let i = 0; i < arr.length; i++) { 

     if (arr[i].length > longestWord.length){
        longestWord = arr[i]
    }}

    
    return longestWord
  }


findLongestWord(words)


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(num) {
    let sum = 0;
    num.forEach(num => {
        sum += num
    })
    return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num) {
    if(num.length === 0) return 0;
    let sum = 0;
    for(let i = 0;i<num.length;i++){
    sum += num[i];
    }return sum/num.length;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

let exists = '';

function doesWordExist(arr,word) {
    if (arr.length === 0){
        return null;
    }
    for (let i = 0;i < arr.length;i++){
        if (arr[i] === word){ return true;
   }
}
    return false;
}
