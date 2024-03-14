// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    if (num1 < num2) {
        return num2;
    }
        return num1;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    let longestWord = "";
    if (wordsArray.length === 0) {
        longestWord = 0;
    }
    for (let word of wordsArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(finalSum) {
    let newSum = 0;
  if (finalSum.length === 0) {
    newSum = 0;
  }
    
for (const i of finalSum) {
  newSum += i;
}
    return newSum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let allSum = 0;
    if (arr.length === 0) {
      return allSum;
    }
    for (const i of arr) {
    allSum += i;
  }
      return allSum / arr.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, wordFind) {
    if (wordsArr.length === 0) {
        return null;
    }
    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i] === wordFind) {
            return true;
        }
    }
    return false;

}
