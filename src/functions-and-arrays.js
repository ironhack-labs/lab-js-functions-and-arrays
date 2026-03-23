// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

    if (words.length === 0) {
        return null;
    }

    let wordsbig = words[0];
    for(let i=0; i < words.length;++i){
        if(words[i].length>wordsbig.length){
                wordsbig=words[i];
        }
    }
    return wordsbig;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
if (numbers.length===0){
    return 0;
}


let sumTotal=0;
for(i=0;i< numbers.length;++i){

    sumTotal+=numbers[i];
}
return sumTotal;

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    if (numbers2.length === 0) {
        return 0;
    }

    let totalSum=0;

    for(i=0; i< numbers2.length; ++i){
        totalSum += numbers2[i];
    }

    return totalSum/numbers2.length;

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,wordsSearch) {
 if (words2.length===0){
    return null;
 }




for(i=0 ;i<words2.length;++i){

    if (words2[i]=== wordsSearch){
        return true;

    }
    
}
    return false;
    

}
