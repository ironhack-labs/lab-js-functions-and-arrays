// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {

    if (number1 > number2){
        
        return number1;
    }

    else if (number2 > number1){

        return number2;

    }
    
    else {return number1};
    
}

console.log(maxOfTwoNumbers(85,403));




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {

    if (array.length === 0){

        return null;
    }

    let longestWord =array[0];

    array.forEach(function (word) {
    

        if (word.length > longestWord.length){

            longestWord = word;

        }

    });
    
    return longestWord;

}

console.log(findLongestWord(["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"]));






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {

    if( array.length === 0){

        return 0;
    }

    let sum = 0;

    array.forEach(function (digits) {

        sum += digits;
    } 
 
   )
     return sum;

}

console.log(sumNumbers([6, 12, 1, 18, 13, 16, 2, 1, 8, 10]));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {

    if (array.length === 0){

        return 0;
    }

    const sum = sumNumbers(array);

    return sum / array.length;
  
}
 
    console.log(averageNumbers([2, 6, 9, 10, 7, 4, 1, 9]));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(lotOfWords,word) {

    if (lotOfWords.length === 0){

        return null;
    }
    
    let wordFound = false;

    lotOfWords.forEach(function (index){

        if (index === word){

            wordFound = true;
        
        }

      }
  
    )

   return wordFound;

}

console.log(doesWordExist(words2,"subset"));
