// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  console.log(maxOfTwoNumbers);

  if (number1 > number2) {
    return number1;
  } else if (number1 < number2) {
    return number2;
  } else if(number1 == number2){
    return number1;
  }
   else {
    number1;
  }
};

console.log(maxOfTwoNumbers(10, 20));

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(word){

 let cada = word[0];

 for(let i = 0; i < word.length; i++){
  

    if(word[i].length > cada.length){
       cada = word[i];
    
    }else{
      0;
    }
    

 }
 
  
  return cada;
};

console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(matrix) {

let cada = 0;

for(let i = 0; i < matrix.length; i++){
   cada = matrix[i] + cada;

}

return cada;

}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

let cada = 0;

function averageNumbers(prome){

for(let i = 0; i < prome.length; i++){
  cada = matrix[i] / matrix[1];
}

  return cada;
};

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(descu) {
  
  let cada = descu[0];
for(let i = 0; i < descu.length; i++){


  if(descu[i] === descu){
    cada = descu[i];

  }
}
return cada;
};
