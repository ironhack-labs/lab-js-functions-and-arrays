// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(param1, param2) {
    if (param1>param2) {
        return param1;}
        else if (param1<param2) {
            return param2;}
            else (param1=param2) 
                return param1, param2;}
            
        
    





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;

    }, "");
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(arr) {
    return arr.reduce((total, num) => total + num, 0);
    
}



// Test the function with the provided array








// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avg) {
return avg.reduce((total, num) => total + num, 0);

}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToSearch) {
    if (words.length === 0) {
        return null; 
    }
    
    return words.includes(wordToSearch); 
}


