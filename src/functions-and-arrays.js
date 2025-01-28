// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a;
  }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  if (!words.length) {
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



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (!numbers.length) {
    return 0;
  }

  let sumTotal = 0;
  for (let num of numbers) {
    sumTotal += num;
  }

  return sumTotal;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (!numbers2.length) {
    return 0;
  }

  let sumTotal = 0;

  numbers2.forEach((currentElement) => {
    sumTotal += currentElement;
  });

  return sumTotal / numbers2.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, vocab) {
  if (!words2.length) {
    return null;
  }

  for (let i = 0; i < words2.length; i++) {
    if (words2[i].includes(vocab)) {
      return true;
    }
  }
  return false;
}
