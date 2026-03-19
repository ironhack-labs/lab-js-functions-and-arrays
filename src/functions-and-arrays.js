// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2) {
        return num1
    } else {
        return num2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if ( words.length === 0) {
        return null;
    }

let longest = words[0];
for (let i = 0; i < words.length; i++) {
    if (longest.length < words[i].length) {
        longest = words[i];
    }
}
return longest;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }
    let total = sumNumbers(numbers2);
    let Average = total / numbers2.length;
    
    return Average
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {
  if (arrayOfWords.length === 0) {
    return null;
  } else if (arrayOfWords.includes(word)) {
    return true;
  } else {
    return false;
  }
}

// function doesWordExist(arrayOfWords, word) {
//     if (arrayOfWords.length === 0) {
//         return null;
//     }
//     return arrayOfWords.includes(word);

    
// }
