// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1,number2) {
    if (number1 > number2){
        return number1;
    } else if (number2 > number1){
        return number2;
    } else{
        return number1;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(array) {
    let longestWord = "";
    if (array.length === 0){ 
        return null; } 
        else{
    for(i = 0; i < array.length; i++){
        if (array[i].length> longestWord.length){
          longestWord = array[i];
        }
    }
    console.log(longestWord);
    return longestWord;
    }
}
findLongestWord(words);


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array2) {
    let sum = 0;
 array2.forEach((ditto) =>{
 sum = sum + ditto;})
 console.log(sum);
 return sum;    
}
sumNumbers(numbers);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array3) {
    if(array3.length === 0){ return 0;

    } else{
    let average = sumNumbers(array3)/array3.length;
    console.log(average);
    return average;
    }
}
averageNumbers(numbers2);



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
function doesWordExist(array4, search) {
    if(array4.length === 0){
        return null;
    }else{
    if(array4.includes(search)){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
}
doesWordExist(words2,"trouble");

