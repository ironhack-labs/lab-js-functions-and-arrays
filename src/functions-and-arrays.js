// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Iteration 2 | Find the Longest Word
function findLongestWord(words) {
  if (words.length === 0) return null;
  
  let longestWord = words[0];
  
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  
  return longestWord;
}

// Iteration 3 | Sum Numbers
function sumNumbers(numbers) {
  if (!numbers) return 0;
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum;
}

// Iteration 4 | Numbers Average
function averageNumbers(numbers) {
  if (numbers.length === 0) return 0;
  
  const totalSum = sumNumbers(numbers);
  return totalSum / numbers.length;
}

// Iteration 5 | Find Element
function doesWordExist(wordsArr, wordToSearch) {
  if (wordsArr.length === 0) return null;
  
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === wordToSearch) {
      return true;
    }
  }
  
  return false;
}