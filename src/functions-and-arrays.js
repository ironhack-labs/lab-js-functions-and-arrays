// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(nbr1, nbr2) {
    if (nbr1>nbr2) {
        return nbr1;
    }
    else { 
        return nbr2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let result = "";

if (arr.length === 0) {
 return null;
}

    for (const mot of arr) {
        console.log(mot);
        if (mot.length > result.length) {
            result = mot;
        }
    }

    return result;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    ajout = 0
    for (const num of arr) {
        ajout += num;
    }
    return ajout;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        return 0;
       }
    let total = sumNumbers(arr);
    aver = total / arr.length;
    return aver;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, toFind) {

    if (arr.length === 0) {
        return null;
       }

   for (const word of arr) {
    if (word === toFind) {
        return true;
    }
   }
  return false;
}
