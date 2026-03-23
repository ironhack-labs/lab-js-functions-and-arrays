// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
if (a>b) return a;
else if (b>a) return b;
else return a;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words){
    let wordLarga="";
    if (words.length === 0) return null;
    
    words.forEach((word) =>{
   if (word.length>wordLarga.length){
    wordLarga=word;}
   });
        return(wordLarga);
    
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){
    let i=0;
    let suma=0;
    while (i<numbers.length){
        suma += (numbers[i]);
            i++;
        }
        return(suma);
        
    
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0){
        return 0;
    } else
    {
return (sumNumbers(numbers2)/(numbers2.length));    
}
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, target) {
if (words2.length === 0) return null;

for(let i=0;i<words2.length;i++){
if (words2[i] === target){
    return true;
}
}
return false;

}
