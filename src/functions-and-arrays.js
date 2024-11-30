// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    if (a > b) {
        return a;
    }
    if (b > a){
        return b;
    }
    if (a==b){
    return a;
}
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord (word) {
    if (word.length === 0) {
      return 0;
    } 
    let longestWord = word[0];
    for (let i=0; i < word.length; i++) {
      if (word[i].length > longestWord.length){ 
  longestWord = word[i];
      }
    }
    return longestWord;
  }



// Iteration 3 | Sum Numbers

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];



function sumNumbers(sumNum) {
    let result = 0;
    for(let i=0; i<sumNum.length; i++) {
        result+=sumNum[i];
      }
      return result;
    }


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {

    if (numbersAvg.length == 0) return 0;

    let sum = sumNumbers(numbersAvg);

    return sum / numbersAvg.length;

}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, search) {
    if (wordsArray.length == 0) return null;
    return wordsArray.includes(search);
}
