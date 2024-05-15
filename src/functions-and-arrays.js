// // Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// // Iteration 2 | Find the Longest Word

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

// // Iteration 3 | Sum Numbers

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(sumNumbers(numbers)); // Output will be 87

// function sumNumbers(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }

// // Iteration 4 | Numbers Average

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  const sum = sumNumbers(numbers);
  return sum / numbers.length;
}

console.log(averageNumbers(numbers2)); // Output will be 5.375

// // Iteration 5 | Find Elements

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
