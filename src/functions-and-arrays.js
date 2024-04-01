// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2){
        return number1;
      } else{
        return number2;
      }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    let longIndex =0;
    let longestWord=0;
   
    if (wordsArray.length===0){
      return null;
    }
    
    words.forEach(function(word,index)
     {if(word.length > longestWord){
          longestWord = word.length;
          longIndex = index;} 
     })
  
    return wordsArray[longIndex];
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum=0;
    numbers.forEach(function(num){
       sum += num;
    })
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers3) {
    if(numbers3.length === 0 ){
        return 0;
    }else{
        let average = sumNumbers(numbers3)/ numbers3.length;
        return average; 
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array1, word) {
    let existe = false;
    
    if (array1.length==0){
        return null;
    }

    for(let i=0; i<array1.length; i++){

        if(word==array1[i]) {
          existe = true;
        return existe;
        }  
    }
    return existe;
}
