// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numOne, numTwo) {
    return Math.max(numOne,numTwo); 
    }

    console.log(maxOfTwoNumbers(35,87))




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {


    if(arr.length === 0) {
        return null;
    } else if (arr.length === 1) {
        return arr[0];
    }

    let firstWord = arr[0];
    let itsLength = arr[0].length;

    for(let i = 1; i < arr.length ; i++) {
        let actualWord = arr[i];
        let actualLength = arr[i].length

        if (actualLength > itsLength) {
            firstWord = actualWord;
            itsLength = actualLength;
        } else if (actualLength === itsLength && arr.indexOf(actualWord < words.indexOf(firstWord))){
            firstWord = actualWord
        }
    }
    return firstWord
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let resultado = 0;
    arr.forEach((element) => {
      resultado += element;
    });
    return resultado;
  }
  console.log(sumNumbers(numbers));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let result = 0;
    let average = 0;
    arr.forEach((element) => {
        result += element;
        average = result / arr.length;
    });
    return average;
}

console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return null
    }else if(arr.includes(word)) {
        return true;
    } else if (!arr.includes(word)){
        return false;
    }
};
