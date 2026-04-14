// Iteration 1 | Find the Maximum

function maxValue(a, b) {
  if (a > b) {
    maxValue = a;
  } else if (a < b) {
    maxValue = b;
  } else {
    maxValue = a;
  }
  return maxValue;
}

console.log(maxValue(17, 9));

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
    let longestWord = "";
// iterate each word = > array[i]  : loop

    for (let i = 0; i < words.length; i++) {
    let eachWord = words[i];
    
// element.length  longestWord[i]
  if (eachWord.length > longestWord.length) {
     longestWord = eachWord;
  }

}
  return longestWord;
}
 console.log(findLongestWord(words));



//[] 2 parameters (elem1, elem) compare






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let sum = 0;
function total(numbers) {
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
}
console.log(sum);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function average(numbers2) {
  let sum = 0;
  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }
  let average = sum / numbers2.length;
  return average;
}
console.log(average(numbers2));

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

function functiondoesWordExist(wordArray, wordToSearch) {
  for (let i = 0; i < functiondoesWordExist.length; i++) {
    let char = functiondoesWordExist[i];
    if (char === 0) {
      console.log("null");
    } else if (char === false) {
      return "false";
    } else return "true";
  }

  console.Log(functiondoesWordExist);
}
