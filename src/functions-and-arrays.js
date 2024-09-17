// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1>num2){
        return num1
    } else if( num1<num2){
        return num2
    } else if(num1===num2){
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestName(wordsArray) {
  let longestName = wordsArray[0];
  for (let i = 0; i < wordsArray.length; i++) {
    if(wordsArray[i].length > longestName.length) {
      longestName = wordsArray[i];
    }
  }
  return longestName;
}

console.log(findLongestName(words));





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


// ANOTHER WAY OF SOLVING

/* function sumNumbers (arrNumbers){
    const sum = arrNumbers.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);

    return sum
} */


 function sumNumbers(numberArr){

    let sum = 0;

    for(let i=0; i<numberArr.length; i++){
        sum += numberArr[i]
    }
    return sum
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray){
    return sumNumbers(numbersArray) / numbersArray.length
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordToFind) {
  return words2.includes(wordToFind);
}


console.log(doesWordExist("machine")); // true
console.log(doesWordExist("code")); // false




