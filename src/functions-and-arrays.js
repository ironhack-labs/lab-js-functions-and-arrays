// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(numb1, numb2) {
  if (numb1 > numb2) {
    return numb1;
  } else if (numb2 > numb1) {
    return numb2;
  } else {
    return numb2;
  }
}
console.log(maxOfTwoNumbers(7, 11));




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord() {}
function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    let longestWord = "";   
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}       




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers() {}
function sumNumbers(numbers) {
    let sum = 0 ;
    for (let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }
    return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}

function averageNumbers(numbers2) {

      if (numbers2.length === 0) {
        return 0;
    }
     let sum = sumNumbers(numbers2);
    
     let average = sum / numbers2.length;

     return average;
      }




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word)
{
    
}

   //function doesWordExist(words2, word) {
  //  if (words2.length === 0) {
   //     return null;
   // }

  //  for (let i = 0; i < words2.length; i++) {
        if (words2[i] === word) {
            return true;
        }
  //  }

  //  return false;
//}


