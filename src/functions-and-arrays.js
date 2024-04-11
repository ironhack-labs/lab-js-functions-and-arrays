// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1;
    }else{
        return num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if(arr.length === 0){
        return null
    }

    let longest_word = '';

    arr.forEach(item => {
        
        if(longest_word.length < item.length){
            longest_word = item;
        }
    })

    return longest_word;
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;
    arr.forEach(item => {
       sum += item
    })

    return sum;
}

let suma = sumNumbers(numbers);





// Iteration 4 | Numbers Average


const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(arr) {
    let sumTotal = sumNumbers(numbers2);
    if(arr.length === 0){
        return 0
    }

    let result = 0;
    result = sumTotal / arr.length;
    return result
}
let averageNum = averageNumbers(numbers2);




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
