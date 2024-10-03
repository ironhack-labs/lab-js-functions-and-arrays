// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a>b) {
        return a
    } else {
        return b
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

let arrLengths = [];

function findLongestWord(arr) {
    if(arr.length === 0 ){
        return null ;
    } else {
        let arrLengths = [];
        for (let i = 0; i < arr.length; i++) {
          arrLengths.push(arr[i].length);
          console.log(arrLengths);
        }
        console.log(arrLengths);
        const max = Math.max.apply(null, arrLengths);
        //console.log(max);
        const indexMax = arrLengths.indexOf(max);
        //console.log(indexMax);
        return arr[indexMax];
    }
  }

  
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){
    let result = 0;
    for (let j=0; j < numbers.length; j++){
        result += numbers[j];
    }
 return result
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers (arrayOfNumbers) {
    let averageResult;
    if (arrayOfNumbers.length === 0) {
        averageResult = 0;
    } else {
        averageResult = (sumNumbers(arrayOfNumbers) / arrayOfNumbers.length);
    }
    return averageResult;
}


// Iteration 5 | Find Elements

// function doesWordExist(arrayOfWords, word) {
//     for (let k=0;  k < arrayOfWords.length; k++){
//         if (arrayOfWords[k] !== word) {
//             return false;
//         } else if (arrayOfWords[k] === word) {
//             return true;
//         } else if (arrayOfWords.length === 0) {
//             return null;
//         }
//     }
// }

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {
    let result = true;
    if (arrayOfWords.length === 0) {
     return null;
    } else {
     for (let k = 0; k < arrayOfWords.length; k++) {
      if (arrayOfWords[k] === word) {
       result = true;
       break;
      } else {
       result = false;
      }
     }
     return result;
    }
   }
