// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1 , num2) {
    if (num1 > num2){
        return num1
    }
    else if (num1 < num2){
        return num2
    }
    else{
        return num1
    }
}

//console.log(maxOfTwoNumbers(10 , 5));
//console.log(maxOfTwoNumbers(8 , 4));
//console.log(maxOfTwoNumbers(9, 9));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
      return 0;
    }
  
    let longestWord = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }

  //console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers

function sumNumbers(words){
    let sum = 0;
    for(let j = 0 ; j < words.length ; j++){
        sum += words[j]
    }
    return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let number2 = [];
let number3 = 5;

//console.log(sumNumbers(numbers))
//console.log(sumNumbers(number2))
//console.log(sumNumbers(number3))

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num){
    let sum = 0;
    if(num.length === 0){
        return 0;
    }
    
    for (let e = 0; e < num.length; e++){
        sum += num[e];
    }
    return (sum / num.length)
}


console.log(averageNumbers(number2))

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", 
"matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray , searchWord) {
    if(wordArray.length === 0){
        return null
    }
    for (let y = 0; y < wordArray.length; y++){
        if(wordArray[y] === searchWord){
            return true;
        }
    }
    return false;
}