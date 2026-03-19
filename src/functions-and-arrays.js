// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length=== 0){
        return null;
    }
    let longestWord = words[0];
    words.forEach(element =>{
        if(element.length > longestWord.length){
            longestWord = element;}

    });
    
    return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
   
    let sumTotal = 0;

    numbers.forEach(num =>{ 
        sumTotal += num;
    });
    return sumTotal;

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if(numbers2.length === 0){
        return 0
    }
    let counter = 0;

    numbers2.forEach(num =>{
        counter += num;
    });

    return counter/numbers2.length;


}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToFind) {

    if(words2.length === 0){
        return null;
        }
    const found = words2.filter(word=>{return word.includes(wordToFind)});

    if(found.length === 0){
        return false;
    }else{
        return true;
    }
}





