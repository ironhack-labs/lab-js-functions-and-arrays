// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
  if (a>b){
    return a;
  } else {
    return b;
  }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }
  let longWord = words[0];
  for(let i =0; i<words.length;i++){
    if (words[i].length> longWord.length){
      longWord = words[i];
    }
  }
  return longWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0;
  }
  return sumNumbers(numbers2)/numbers2.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, searchWord) {
  if (words2.length ===0){
    return null;
  }

  for (let i=0; i<words2.length;i++) {
    if (words2[i]===searchWord){
      return true;

    }

  }
  return false;
}
