// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
 if (a > b){
    return a;
 } else if(a < b){
    return b;
 } else if (a === b){
    return a && b;
 }
}
const maximum= maxOfTwoNumbers(23, 42);
console.log(maximum);




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayw) {
    let maxword = "";
    if (arrayw.length === 0){
        return 0;
    }
 for (let i = 0; i < arrayw.length; i++){
    if (arrayw[i].length > maxword.length){
        maxword = arrayw[i];
        
    } 
    
 }
 return maxword;
}


const longword = findLongestWord (words);
console.log(longword);


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arraynumb) {
    let summary = 0;
if (arraynumb.length > 1){
  for(let i = 0; i < arraynumb.length;i++){
    summary += arraynumb[i];
  }
  return summary;

}
 else if (arraynumb.length === 1){
    return arraynumb[0];
}
 else if (arraynumb.length === 0){
    return 0;
 }
}

const sumanum = sumNumbers(numbers);
console.log(sumanum);


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(averages) {
    let twonumbers = 0;
    if (averages.length > 1){
        for(let i = 0; i < averages.length;i++){
          twonumbers += averages[i];
        }
        return twonumbers / averages.length;
      
      }
       else if (averages.length === 1){
          return averages[0];
      }
       else if (averages.length === 0){
          return 0;
       }
}

const averagenum = averageNumbers(numbers2);
console.log(averagenum);



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordarray, n1) {
if (wordarray.length === 0){
    return null;
}
 if (wordarray.includes(n1)){
    return true
 } else {
    return false;
 }
}

const check = doesWordExist (words2, "sunset")
console.log (check);
