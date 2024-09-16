// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1,number2) {
    let maxNumber=0;
    if (number1>number2){
       maxNumber= number1;
    }
    else { 
    maxNumber=number2;
 }
 return maxNumber;
}




// Iteration 2 | Find the Longest Word
function findLongestWord(words) {
   
    if (words.length === 0) {
        return 0;
    }

    
    let longestWordIndex = 0;
    let longestWordLength = words[0].length;

    
    for (let i = 1; i < words.length; i++) {
        
        if (words[i].length > longestWordLength) {
            longestWordIndex = i;
            longestWordLength = words[i].length;
        }
    }

    
    return words[longestWordIndex];
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    if ( numbers.length===0){
        return 0;
    }
    // create varaible to collect sum
    let sum =0;
// pass all numbers
    for (let i=0; i< numbers.length;i++){
        sum+= numbers[i];
        return sum;
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;
    let sumAverage = 0;

    if (numbers2.length === 0) {
        return 0;
    }
    
    // toplamın tutulacağı değer ata
    for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
    }

    sumAverage = sum / numbers2.length;

    return sumAverage;
}








// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];


function doesWordExist(words2, search) {
    if (words2.length === 0) {
        return null; }

        if(words2.includes.search){
            return true;
        }
        else{
            return false;
        }
  
        const lookingWord = "trouble";
        console.log(doesWordExist(words2,lookingWord));

}
