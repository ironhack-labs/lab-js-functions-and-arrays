// Iteration 1 | Find the Maximum
let max;
function maxOfTwoNumbers(num1, num2) {
 if (num1 > num2){
    max = num1;
 }  else {max = num2};
 return max;
}


console.log(maxOfTwoNumbers(55, 2));

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arra) {
    for (let i=0; i < arra.length; i++){

    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sum = 0;
    for (let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

sumNumbers(numbers);


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
      if (array.length === 0) {
    return 0;
  }
    let sum = 0;
        for (let i=0; i<array.length; i++){
        sum += array[i];
        }
        return sum / array.length;

}

console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {
    if array.length === 0 {
        return false;
    }
    return array.includes(word);
}

console.log(doesWordExist(words2, "matter"));