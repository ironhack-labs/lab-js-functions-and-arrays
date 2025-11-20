// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1 , num2) {
if(num1>num2){
  return num1;
} else {
  return num2
}


}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(biggest) {

 
  if (biggest.length === 0) {
    return null;
  }

  
  if (biggest.length === 1) {
    return biggest[0];
  }

  
  let longest = "";

  for (let i = 0; i < biggest.length; i++) {
    if (biggest[i].length > longest.length) {
      longest = biggest[i];
    }
  }

  
  return longest;
}

console.log(findLongestWord(words)); // Output: "crocodile"




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(digits) {

  let sum = 0;

  for(let i =0; i<digits.length; i++){
    sum+=digits[i]
  }

  return sum
}

console.log(sumNumbers(numbers))
console.log(sumNumbers([]));





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(digits) {
if(digits.length ===0){
  return 0;
}

let sum = 0;
for(let i = 0; i<digits.length; i++){
  sum+=digits[i]
}

let average = sum/digits.length
return average


}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(sol1 , sol2) {
if (sol1.length ===0){
  return null;
}

for (let i = 0; i <sol1.length; i++){
  if(sol1[i]=== sol2){
    return true
  }
}
return false
}
