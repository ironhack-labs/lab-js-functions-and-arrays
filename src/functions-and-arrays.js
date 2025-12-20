// src/functions-and-arrays.js

// Iteración 1: Encuentra el máximo
function maxOfTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
  // Alternativa más corta: return a >= b ? a : b;
}

// Iteración 2: Encuentra la palabra más larga
function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// Iteración 3: Suma de números
function sumNumbers(numbers) {
  if (numbers.length === 0) {
    return 0; // Aunque las pruebas no lo exigen explícitamente, es buena práctica
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteración 4: Promedio de números
function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  return sumNumbers(numbers) / numbers.length;
}

// Iteración 5: Encontrar elemento (doesWordExist)
function doesWordExist(words, wordToSearch) {
  if (words.length === 0) {
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
      return true;
    }
  }
  return false;
}