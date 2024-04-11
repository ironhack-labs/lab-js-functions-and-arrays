// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
if (a>b){
    return a;
} else if (b>a){
    return b;
} else if (a===b) {
    return a,b;
}

}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(str) {
   if (str.length === 0){
    return null;
   }


   let longWord = '';
    for (let i=0; i<str.length; i++){
        if (longWord.length < str[i].length ){
            longWord = str[i];
        }

    }
    return longWord;
}
const result = findLongestWord(words.length);
console.log(result);





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    if (arr.length === 0){
        return 0;
    }
    let sum = 0;
for (let i=0; i<arr.length; i++){
   sum += arr[i];
}
   return sum;
    }
   
console.log(sumNumbers(numbers));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr2)
 {
    if (arr2.length === 0){
        return 0
    }
    let sum2 = 0;
    for (let i=0; i<arr2.length; i++){
        sum2 += arr2[i];
        }return sum2/arr2.length;
    }
console.log(averageNumbers(numbers2));
console.log(averageN);



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array2, wordToSearch) {
  if (array2.length === 0){
    return null;
  }
  return array2.includes(wordToSearch);
}
