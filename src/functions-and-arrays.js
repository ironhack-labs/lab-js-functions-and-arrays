// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  // Return the larger of the two numbers
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Example usage:
console.log(maxOfTwoNumbers(3, 7));

// Iteration 2 | Find the Longest Word
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

// Example usage:
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
}

// Example usage:

console.log(sumNumbers(numbers));
// Iteration 4 | Numbers Average
function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  const sum = sumNumbers(numbers);
  return sum / numbers.length;
}

// Example usage:
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements
function doesWordExist(words, wordToSearch) {
  if (words.length === 0) {
    return null;
  }

  return words.includes(wordToSearch);
}

// Example usage:
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
console.log(doesWordExist(words2, "matter")); // Should print true
console.log(doesWordExist(words2, "hello")); // Should print false
console.log(doesWordExist([], "matter"));
