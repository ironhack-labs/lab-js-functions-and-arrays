// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    
   if (a > b){
    return a; }
    else if (b > a) {
        return b; 
    } else {
        return a;
    }
    
    
}
console.log(maxOfTwoNumbers(2, 10));
    console.log(maxOfTwoNumbers(20, 10));
    console.log(maxOfTwoNumbers(2, 2));


// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {

    if (wordsArray.length === 0) {
        return null;
    }
    
    let longestWord = wordsArray[0];
    
    for (let i = 1; i < wordsArray.length; i++) {
   
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
          
    }
    
return longestWord;
}




console.log(findLongestWord(words)); 



//*Iteration 3 | Sum Numbers



function sumNumbers(numbersArray) {
    let total = 0;
    

    for (let i = 0; i < numbersArray.length; i++) {
        total += numbersArray[i];
    }
    
    return total;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

console.log(sumNumbers(numbers)); 

// Iteration 4 | Numbers Average

function sumNumbers(numbersArray) {
    let total = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        total += numbersArray[i];
    }
    return total;
}


function averageNumbers(numbersArray) {
    
    if (numbersArray.length === 0) {
        return 0; 
    }
    
    const sum = sumNumbers(numbersArray);
    const average = sum / numbersArray.length;
    
    return average;
}


const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

console.log(averageNumbers(numbers2));




// Iteration 5 | Find Elements
function doesWordExist(wordsArray, searchWord) {
    
    if (wordsArray.length === 0) {
        return null;
    }
    
   
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === searchWord) {
            return true; 
        }
    }
    
    return false;
}


const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

// Test cases
console.log(doesWordExist(words2, "machine"));
console.log(doesWordExist(words2, "subset"));  
console.log(doesWordExist(words2, "trouble")); 
console.log(doesWordExist(words2, "starting")); 
console.log(doesWordExist(words2, "matter"));
console.log(doesWordExist(words2, "eating"));
console.log(doesWordExist(words2, "truth"));
console.log(doesWordExist(words2, "disobedience")); 
console.log(doesWordExist(words2, "nonexistent"));
console.log(doesWordExist(words2, "Machine"));