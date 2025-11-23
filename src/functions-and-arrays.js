// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  return a >= b ? a : b;
}

// Iteration 2 | Find the Longest Word
function findLongestWord(words) {
  if (!words || words.length === 0) return null;

  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

// Iteration 3 | Sum Numbers
function sumNumbers(numbers) {
  if (!numbers || numbers.length === 0) return 0;

  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// Bonus - Iteration 3.1 | Sum (mixed array)
function sum(mixedArr) {
  if (!mixedArr || mixedArr.length === 0) return 0;

  let total = 0;

  for (let item of mixedArr) {
    switch (typeof item) {
      case "number":
        total += item;
        break;
      case "string":
        total += item.length;
        break;
      case "boolean":
        total += item ? 1 : 0;
        break;
      default:
        throw new Error("Unsupported data type sir or ma'am");
    }
  }

  return total;
}

// Iteration 4 | Numbers Average
function averageNumbers(numbers) {
  if (!numbers || numbers.length === 0) return null;

  return sumNumbers(numbers) / numbers.length;
}

// Iteration 4.1 | Average Word Length
function averageWordLength(words) {
  if (!words || words.length === 0) return null;

  let totalLength = 0;

  for (let word of words) {
    totalLength += word.length;
  }

  return totalLength / words.length;
}

// Bonus - Iteration 4.2 | Average of mixed array
function avg(mixedArr) {
  if (!mixedArr || mixedArr.length === 0) return null;
  return parseFloat((sum(mixedArr) / mixedArr.length).toFixed(2));
}

// Iteration 5 | Find Element
function doesWordExist(words, word) {
  if (!words || words.length === 0) return null;

  for (let item of words) {
    if (item === word) return true;
  }

  return false;
}

// Iteration 6 | Count Repetition
function howManyTimes(words, word) {
  if (!words || words.length === 0) return 0;

  let count = 0;

  for (let item of words) {
    if (item === word) count++;
  }

  return count;
}

// Iteration 7 | Bonus | Greatest Product (8 directions)
function greatestProduct(matrix) {
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      
      // horizontal
      if (j + 3 < matrix[i].length) {
        let product = matrix[i][j] *
                      matrix[i][j + 1] *
                      matrix[i][j + 2] *
                      matrix[i][j + 3];
        if (product > max) max = product;
      }

      // vertical
      if (i + 3 < matrix.length) {
        let product = matrix[i][j] *
                      matrix[i + 1][j] *
                      matrix[i + 2][j] *
                      matrix[i + 3][j];
        if (product > max) max = product;
      }
    }
  }

  return max;
}

// Bonus | Greatest Product of Diagonals
function greatestProductDiagonal(matrix) {
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      
      // diagonal down-right
      if (i + 3 < matrix.length && j + 3 < matrix[i].length) {
        let product =
          matrix[i][j] *
          matrix[i + 1][j + 1] *
          matrix[i + 2][j + 2] *
          matrix[i + 3][j + 3];

        if (product > max) max = product;
      }

      // diagonal down-left
      if (i + 3 < matrix.length && j - 3 >= 0) {
        let product =
          matrix[i][j] *
          matrix[i + 1][j - 1] *
          matrix[i + 2][j - 2] *
          matrix[i + 3][j - 3];

        if (product > max) max = product;
      }
    }
  }

  return max;
}
