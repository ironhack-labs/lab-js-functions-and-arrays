// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(x, y) {
  if (x < y) return y;
  else if (y < x) return x;
  else {
    return y;
  }
}

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

function findLongestWord(arr1) {
  let longestword = "";
  if (arr1.length == 0) {
    return null;
  } else if (arr1.length == 1) {
    return arr1[0];
  } else {
    for (let word of arr1) {
      // Step 2: Loop through each word
      if (word.length > longestword.length) {
        // Step 3: Compare lengths
        longestword = word; // If current word is longer, update longestWord
      }
    }
//console.log(longestword);
    return longestword;
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbArr) {
  //return();
  let sum=0;
  for (let i=0;i<numbArr.length;i++){
    sum +=numbArr[i];
  }//console.log(sum);
  return(sum);
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
if(numbers2.length==0){
    return 0;
}
else{
    let sum2=0;
    let av=0;
    for (let i=0; i<numbers2.length;i++){
        sum2 += numbers2[i];
    }
    av=sum2/numbers2.length;
    console.log(av);
    return (av);
    }
}
   


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

function doesWordExist(arr3, word) {
if(arr3.length==0){
    return null;
}
else{
    for (let i=0;i<arr3.length;i++){
        if(arr3[i]==word){
        return true;}
    }
    return false;
}
}   
