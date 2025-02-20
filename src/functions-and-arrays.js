// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
   if(num1 > num2){
    return num1;
   }else{
    return num2;
   }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(longWord) {
    let word = " ";

    if (longWord.length===0){
        return null;
    }

    for (let i=0; i < longWord.length;i++){
        if(word.length < longWord[i].length){
            word = longWord[i];   
           
        }
    }
    return word;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr2) {
    if (arr2.length===0){
        return 0;
    }
  //  let count = 0;
  //  for (let i=0; i<arr2.length;i++){
  //         count+=arr2[i];
  //  }
 //    let avg=count/arr2.length;

  //  return avg;
//}

let count = sumNumbers(arr2);
let result = count/arr2.length;
return result
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWord, searchWord) {
    if(arrWord.length>0){
    let position = arrWord.indexOf(searchWord)+1;
    if(position){
    return true;
    }
    else return false;
    
    }else if(arrWord.length===0){
     return null;
    }
    
    
}
