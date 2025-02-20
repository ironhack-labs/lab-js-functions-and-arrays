// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    return Math.max(num1, num2);
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
let newArray = [];
if (array.length === 0) {
    return null;
}
array.forEach((element)=>{
    newArray.push(element.length)});  
    console.log(newArray);      
    const largeNum = Math.max(...newArray);
    const index = newArray.indexOf(largeNum);
    return array[index];
}    



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sumN = 0
    for (let i=0; i<array.length; i++) {
        sumN += array[i];
    }
    return sumN
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if (array.length === 0) {return 0}
    let sumN = 0
    for (let i=0; i<array.length; i++) {
        sumN += array[i];
    }
    console.log(sumN);
    return sumN / array.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];


function doesWordExist(array, searchWord) {
    if (array.length === 0) {return null}
    return array.includes(searchWord)}
//     array.forEach((element)=>{if (element === searchWord){
//         return true;
//     }})
    
    

  


