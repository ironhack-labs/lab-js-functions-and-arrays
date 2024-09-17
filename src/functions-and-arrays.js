// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1, num2;
  }
}
maxOfTwoNumbers(5433, 7654);

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
function findLongestWord(word_names) {
  let longestWord = "";
  word_names.forEach((word_name) => {
    if (word_name.length > longestWord.length) {
      longestWord = word_name;
    }
    else if (word_names.length === 0){
        return 0;
    }
  });
  return longestWord;
}
findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let sum = 0;
function sumNumbers(array_numbers) {
  array_numbers.forEach((array_number) => {
    sum += array_number;
  });
  return sum;
}
sumNumbers(numbers);



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
let sum2 = 0;
function averageNumbers(array_numbers2) {
array_numbers2.forEach((array_number2)=>{
    sum2 +=  array_number2;
})
return console.log(`the average number is ${sum2/array_numbers2.length}`)
}
averageNumbers(numbers2)



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

function doesWordExist(array_of_words, word_to_search) {
    if(array_of_words.length === 0){
        return null;
    }
    return array_of_words.includes(word_to_search)
}
console.log(doesWordExist(words2, "ma"));

