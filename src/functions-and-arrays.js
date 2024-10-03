// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    if(a>b){
        return a
    }else{
        return b
    }
    
}
console.log(maxOfTwoNumbers(5,8));




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(n) {
    let result= n[0];
    for(let i=0;i<=n.length-1;i++){

    if(n[i].length>result.length){
    result=n[i];
}

    }
    return result;
}
console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let result1=0;
function sumNumbers(n) {
    for(let i=0;i<n.length;i++){
        result1+=n[i];
    }
    return result1;
}
console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
let result2 = 0;
function averageNumbers(n) {
    for(let i=0;i<n.length;i++){
        result2+=n[i];

    
    
}
return result2/n.length;
}
console.log(averageNumbers(numbers2));





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(n,k) {


for(let i=0;i<n.length;i++){
    if(n[i] === k){
        return true;
    }
}
return false;
}
console.log(doesWordExist(words2,"matter"));
