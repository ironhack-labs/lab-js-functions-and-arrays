// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

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

function findLongestWord(array) {
  let maxWord = "";
  let numIndex = 0;
  // if(array.length === 0){
  //     return null
  // }else {
  //     for(let i = 0; i <array.length; i++){
  //         if(numIndex < array[i].length  ){
  //             numIndex = array[i].length;
  //             maxWord = array[i];
  //             }
  //         }
  //     }
  //     return maxWord
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (numIndex < array[i].length) {
      numIndex = array[i].length;
      maxWord = array[i];
    }
  }
  return maxWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
    let sum = 0;
    for(let i = 0 ; i<numArray.length;i++) {
        sum += numArray[i]
    }
    return sum
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(avArray) {
    let sum = 0;

    if(avArray.length === 0 ){
        return 0
    }
    for(let i = 0 ; i<avArray.length;i++) {
        sum += avArray[i]
    }
    return sum/avArray.length
}

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

function doesWordExist(array,findable) {
    if(array.length === 0){
        return null
    }
    for(let i=0; i<array.length;i++){
        if (array.indexOf(findable) !== -1){
            return true
        }else {
            return false
        }
    }
}
