// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(x,y) {
    if(x>y)
    {
        return x
    }
    else{
        return y
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(!words.length){
        return 0;
    }
    let longestWord=words[0];
    for( let i = 0 ; i <= words.length-1; i++)
    {
        if(words[i].length > longestWord.length)
        {
            longestWord=words[i];
        }
    }
    return longestWord;


}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum=0
    for(let i = 0 ; i < numbers.length ; i++)
    {
        sum+=numbers[i]
    }

    return sum;

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    if(!numbers2.length){
        return 0;
    }
    const totalSum=sumNumbers(numbers2);
    
    const findAVG = totalSum/numbers2.length;

    return findAVG;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {

    if(!(arrayOfWords.length)){
        return null;
    }

    if(arrayOfWords.includes(wordToSearch)){
        return true;
    }
    else{
        return false;
    }

   



   

  

}
