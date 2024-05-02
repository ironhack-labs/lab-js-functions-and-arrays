// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(1, 2));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArr) {
    let longest = "";
    if (!wordsArr.length) {
      return null;
    } 
    for (let i = 0; i < wordsArr.length; i++) {
        if (longest.length < wordsArr[i].length) {
            longest = wordsArr[i];
        }
    }
        return longest;
  }
  
  console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum += numArr[i];
    }
    return sum;
  }

  console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
    let avg;
    if (numArr.length === 0) {
        return 0;
    }
    avg = (sumNumbers(numArr) / numArr.length);
    return avg;
}
console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArr, word) {
    if (wordArr.length === 0) {
        return null;
      }
    
      if (wordArr.includes(word)) {
        return true;
      }
      else {
        return false;
      }
    }

  console.log(doesWordExist(words2, "machine"));
  

