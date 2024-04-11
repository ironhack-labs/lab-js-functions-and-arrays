// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1<num2) {
    return num2;
}
else if (num1>num2) {
    return num1;
}
else {
    return num1 || num2;
}
}
console.log(maxOfTwoNumbers(1,2));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    
    if (words.length === 0) {
        return null;
    }
    let bigger = " ";
    for (let i =0; i < words.length; i++) {
        
        if (words[i].length > bigger.length) {
            bigger= words[i];
    }
    console.log(bigger);
    
    }
    return bigger;
}
findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sum = 0;
    if(array.length === 0){
        return 0;
    }
    else if (array.length === 1) {
        return array[0];
    }
    
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum; 

}
console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    let sum = 0;

    if(array.length === 0){
        return 0;
    }
    else if (array.length === 1) {
        return array[0];
    }
    
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum/array.length; 
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr,word) {
    if (arr.length === 0) {
        return null;
    }

    if(arr.indexOf(word) === -1) {
        return false
    }
    else {
        return true;
    }

}
