// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  }
  if ((a = b)) {
    return a;
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

function findLongestWord(wordsList) {
  if (wordsList.length === 0) {
    return null;
  }

  let word = "";
  wordsList.forEach((element) => {
    if (element.length > word.length) {
      word = element 
    }
  });

  return word;
}

console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sum) {
let result = 0; 

for(let i = 0; i < sum.length; i++){
    result += sum[i];
}
   return result;
}
console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageNumbers) {
const result = sumNumbers(averageNumbers);

return result / averageNumbers.length 
}

console.log(averageNumbers(numbers2));

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

function doesWordExist(word, searchWord) {
   if(word.length === 0){
    return null;
   }
   for( let i = 0; i < word.length; i++){
    if(word[i]=== searchWord) {
        return true;
    }
   }
return false
}
console.log(doesWordExist(words2, "dog"));
