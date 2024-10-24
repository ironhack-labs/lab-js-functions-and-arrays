// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return num2;
    }
  }
  console.log(maxOfTwoNumbers(3, 7));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if (array.length === 0){
        return null;
    }
    else {
        let word = "";
        for (let i = 0; i < array.length; i++) {
          if (word.length < array[i].length) {
            word = array[i];
          }
        }
        return word;
      }
      
      function longestStringReduce(array) {
        return array.reduce((a, b) => a.length < b.length ? b : a, "");
      }

}


console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array1) {
    sum = 0;
    array1.forEach((element) => {
        sum +=element;
    });
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array2){ 
    if (array2.length === 0) {
        return 0;
    }
    else {
    let average = sumNumbers(array2)/array2.length
    return average
    }
}


console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(haystack) {
    if (haystack.length === 0)
                return null;
            }
   
