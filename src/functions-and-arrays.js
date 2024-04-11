// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}
maxOfTwoNumbers(2, 2);

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
// const longestWord = Math.max(words[3].length)
// console.log(longestWord)
function findLongestWord(arr) {
  //devolvemos null si el arg es un array vacío
  if (arr.length === 0) {
    return null;
  }

  //detectamos la palabra más larga
  let longestWord = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }

  return longestWord;
}

findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNumbers) {
  //devolvemos null si el argumento es un array vacío
  if (arrNumbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    sum += arrNumbers[i];
  }

  return sum;
}

sumNumbers(numbers);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(otroArrNumbers) {
  //devolvemos null si el argumento es un array vacío
  if (otroArrNumbers.length === 0) {
    return 0;
  }
  //media de la suma
  let average = sumNumbers(otroArrNumbers) / otroArrNumbers.length;
  return average;
}

averageNumbers(numbers2);

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

function doesWordExist(arrPalabras, palabra) {
  //devolvemos null si el argumento es un array vacío
  if (arrPalabras.length === 0) {
    return null;
  }
  //vemos si la palabra está incluida en el array del arg
  if (arrPalabras.includes(palabra)) {
    return true
  }else{
    return false
  }
}
