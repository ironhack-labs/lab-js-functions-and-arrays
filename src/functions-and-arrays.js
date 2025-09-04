// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1,number2) {
    if(number1>number2){
        return number1;
    }
    else{
        return number2;
    }
}





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(words.length === 0){
        return null;
    }
    let longestWord = words[0];
    for(let i=1; i<words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if(numbers.length === 0){
        return 0;
    }
    sum =numbers[0];
    for(let i=1; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if(numbers2.length === 0){
        return 0;
    }
    if(numbers2.length === 1){
        return numbers2[0];
    }else{
        return sumNumbers(numbers2)/numbers2.length;
    }
   
}




// Iteration 5 | Find Elements
// const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, wordtoSearch) {
    console.log('.......');
    console.log(wordsArr);
    console.log(wordtoSearch);
    if(wordsArr.length === 0){
        return null;
    }

    for(let i=0; i<wordsArr.length; i++){
        if(wordsArr[i] === wordtoSearch){
            console.log("true");
            return true;
        }
                    

    }
    return false;
}
