// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    if (a > b) {
        return a;
    }

    else if (b > a){
        return b;
    }
    
    else {
        return a;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length == 0) {
        return null;
    }
    let longestWord = ""
    for (i=0; i<words.length; i++){
        if (words[i].length >longestWord.length){
        longestWord=words[i];}
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(numbers) {
    let sumNumbers=0;
    for (i=0; i<numbers.length; i++){  // me atasco, no entiendo porque o que poner en la siguiente línea si se supone que está ya me da
        sumNumbers=numbers[i] + sumNumbers;
    }
    return sumNumbers;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) return 0;
    let sum = sumNumbers(numbers2)  // no se ni hacer con el sum ni como, se que necesito to obtain but not how to star the line;
    let average = sum / numbers2.length;
    return average;
}





// Iteration 5 | Find Elements
//necesito comparar cada palabra con bucle
//necestio  comparar con ===
//si array vacio null
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {   //por que llamarlo así o que poner en ()
    if (words.length === 0) return null; 
    for (i=0; i<words.length; i++) {
        if (words[i]=== word) {
            return true;
        }
    }
    return false;
}
