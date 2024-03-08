// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {

    if(a>b){
        return a;
    }
    else if(b>a){
        return b;
    }
    else 
        return a;

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(words.length){
   let max = words[0];
   words.forEach(element => {
    if(element.length>max.length)
    max = element;
});
    return max;
}
else return 0;

}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
let count = 0;
   numbers.forEach(element => {
    count=count+element;
   });
    return count;

}

console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if(numbers2.length!=0){
   return sumNumbers(numbers2)/numbers2.length;
    }
    else return 0;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words,myWord) {
    let check = false;
    if(words.length!=0)
    {
    words.forEach(element=>{
      
        if(element==myWord){
            check = true;
        }


    });
    return check;
}
else return null;

}

console.log(doesWordExist(words2,"subset"))


