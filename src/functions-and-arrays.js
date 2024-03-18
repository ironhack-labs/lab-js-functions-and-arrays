// --------- Iteration #1: Find the maximum -------

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

// --------- Iteration #2: Find longest word ---------

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsArr) {
  if (!wordsArr.length) return null;

  let longestWord = wordsArr[0];

  for (let i = 1; i < wordsArr.length; i++) {
    const word = wordsArr[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}


// --------- Iteration #3: Calculate the sum ---------

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (numbersArr) {
  if (!numbersArr) return null;
  let sum = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    const num = numbersArr[i];
    sum += num;
  }

  return sum;
}


// Iteration #4: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  if (numbersArray.length === 0) {
    return null;
  }
  else {
    return sumNumbers(numbersArray) / numbersArray.length;
  };
}


// --------- Iteration #5: Find elements ---------
const wordsFind = [ 'machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArr, word) {
  if (wordsArr.length === 0) {
    return null;
  }

  let doesExist = false;

  for (let i = 0; i < wordsArr.length; i++){
    if (wordsArr[i] === word){
      doesExist = true;
    }
  }
  
  return doesExist;

}


