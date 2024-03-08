// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
  if (a > b){
    return a;
  }else if (b > a){
    return b;
  }else if (a = b){
    return a || b;
  }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  let longest = [];
  if (words.length === 0){
    return 0;
  }
  else{
    for (let i=0 ; i< words.length ; i++){
      if (longest.length < words[i].length){
        longest = words[i];
      }
    }
    return longest;
  }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  if (numbers.length === 0){
    return 0;
  }
  else{
    for (let i=0 ; i< numbers.length ; i++){
      sum += numbers[i];
    }
    return sum;
  }
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0){
    return 0;
  }
  else{
    let avg = (sumNumbers(numbers2))/ numbers2.length;
    return avg;
  }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,find) {
  if (words2.length === 0){
    return null;
  }
  else{
    for (let i=0 ; i< words2.length ; i++){
      if(words2[i].includes(find)){
        return true;
      } 
    }
    return false;
  }
}
