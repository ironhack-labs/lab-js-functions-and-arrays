// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1> num2){
        return num1;
    }
    else if(num1<num2){
        return num2;
    }
    else{
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0){
        return null;
    }

let wordLongest= words[0];
for(let i=1; i<words.length; i++){
    if(words[i].length > wordLongest.length){
        wordLongest= words[i];
    }
}

return wordLongest;

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let totalSum= 0;
    for(let i=0; i<numbers.length; i++){
        totalSum += numbers[i];
        }

return totalSum;
}





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    if (numbers2.length === 0) {
        return 0;
      }

    let totalSuma= 0;
for(let i=0; i<numbers2.length; i++){
    totalSuma += numbers2[i];
    }
return totalSuma/numbers2.length;
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToSearch) {
    if (words2.length === 0) {
        return null;
      }
    

  for (let i = 0; i < words2.length; i++) {
    if (wordToSearch === words2[i]) {
      return true;
    }
    
  }
  return false;

  
}

