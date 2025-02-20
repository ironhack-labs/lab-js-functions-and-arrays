// Iteration 1 | Find the Maximum
function maxOfTwoNumbers( a , b) {

    if (a < b){
        return a
    }
 
    else{
        return b
    }
}
console.log(10 , 6)




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(words) {

    if(words.length === 0){

        return null
    }

    let LongestWord = words[0];

    for (let i = 0; i < words.length; i++){
        
          if (words[i] > LongestWord.length){

             LongestWord = words[i]
             }

         return LongestWord
    } }
 console.log(findLongestWord(words))


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){

    let sum = 0;  
    let i = 0;  
    
    
    while (i < numbers.length) {
      sum += numbers[i];  
      i++;  
    }
    
    return sum;  
  }

    //function sumNumbers(numbers){

   // return numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
    

    




// Iteration 4 | Numbers Average

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  
  if (numbers2.length === 0) {
    return 0;
  }
  

  if (numbers2.length === 1) {
    return numbers2[0];
  }
  
  const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  const average = sum / numbers2.length;
  
  return average;
}


  




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
