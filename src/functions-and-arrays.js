// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1
    // } else if (number1 < number2) {
    //     return number2
    } else {
        return number2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(wordsArr) {
    let longest = "";
    if (!wordsArr.length) {
      return null;
    } 
    for (let i = 0; i < wordsArr.length; i++) {
        if (longest.length < wordsArr[i].length) {
            longest = wordsArr[i];
        }
    }
        return longest;
  }




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(numbers) {
    let arraySum = 0;
    for(i = 0; i < numbers.length ; i++){
       arraySum += numbers[i];
    }
  return arraySum;
  }


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length===0)
        return 0
     let arrayAvg = 0;
        for(i = 0; i < arr.length ; i++){
           arrayAvg += arr[i];
        }
      return arrayAvg / arr.length;
      }

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(iter5, wordToSearch) {
    let exist = false;
    if (iter5.length === 0){
        return null
    }
 if(iter5.includes(wordToSearch)){
    return true
 } else {
    return false
 }
    // for (let i = 0 ; i < iter5.length; i++){
        
    //     if (wordToSearch === iter5[i]){
    //         exist = true;
    //     }
    // }
    // return exist
}
