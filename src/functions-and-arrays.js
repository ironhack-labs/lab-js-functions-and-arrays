// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2) { 
        return num1; } 
        else { return num2;}

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0)
        return null;
    let longestWord = words[0];
    for (let word of words) {
        if (word.length > longestWord.length) {longestWord=word;}
    } return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let totalSum = 0;
    for(let number of numbers) {
        totalSum+=number; }
    return totalSum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return null;
    }
    let totalSum = 0;
    for(let number of numbers2){
        totalSum+=number;
    }
    return totalSum / numbers2.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArr,wordToSearch) { if (wordArr.length === 0){
    console.log(" Nothign here")
      return null;
  }
  for (let i= 0; i < wordArr.length; i +=1){
      const currentWord = wordArr[i];
      if (currentWord === wordToSearch){
          console.log("word is found");
          return true;
      }
  }
  console.log("NOPE")
  return false;
}
