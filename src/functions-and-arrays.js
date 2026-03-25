// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
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

function findLongestWord(words) {
  palabraMasLarga = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > palabraMasLarga.length) {
      palabraMasLarga = words[i];
    }
  }

  if (words.length == 0) {
    return null;
  } else {
    return palabraMasLarga;
  }
}
console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
/*
function sumNumbers(numbers) {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  return suma;
}
console.log(sumNumbers(numbers));
*/

function sumNumbers(numbers) {
  let suma = 0;
  numbers.forEach((numero) => (suma += numero));
  return suma;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  let suma2 = 0;
  numbers2.forEach((numero2) => (suma2 += numero2));
  let media = suma2 / numbers2.length;
  if (numbers2.length !== 0) {
    return media;
  } else {
    return 0;
  }
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

function doesWordExist(words2,palabraDada) {
    words2.forEach(palabra)
}
