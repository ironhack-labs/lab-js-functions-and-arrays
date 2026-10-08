// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {

if(num1 > num2){
    return num1;
}
else if (num1 < num2){
    return num2;
}
else if(num1===num2){
    return num1;
}
else{
    return 'please provide numbers';
}
}

console.log(maxOfTwoNumbers(5,7));

console.log(maxOfTwoNumbers(7,7));

console.log(maxOfTwoNumbers(5,2));





// Iteration 2 | Find the Longest Word
//const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];



function findLongestWord(wordArray) {

    let longestWord=wordArray[0];

    if(wordArray.length === 0  ){

       return null; 
    }


for(let i=0;i<wordArray.length;i++){

    if(  wordArray[i].length>longestWord.length){

      longestWord=wordArray[i];
    }


}

  return longestWord;
}

console.log(findLongestWord(['ankit','Alex','sandra','teddybear']))




// Iteration 3 | Sum Numbers
//const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
let sum=0;
    for(let i=0;i<numberArray.length;i++){
sum=numberArray[i]+sum;
        
    }
    return sum;
}

let result=sumNumbers([24,30,112,78,89,99]);
//console.log(i);
console.log(result);



// Iteration 4 | Numbers Average
//const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avResult) {

     let sum=0;
     let averageNum=0;

    

    for(let i=0;i<avResult.length;i++){

        sum=sum+avResult[i];

         averageNum = sum/avResult.length;

    }


return averageNum;
}

let final=console.log(averageNumbers([8,9,56,45,21,11]));
console.log(final);
//console.log(averageNum);




// Iteration 5 | Find Elements
//const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray,words) {

    if(wordArray.length === 0  ){

       return null; 
    }

    for(let i=0;i<wordArray.length;i++){

 if(wordArray[i]===words)   {

 return   true;
    }


   
  
       
    

    }

return false;
}

console.log(doesWordExist(['james','ankit','machine'],'ankit'))

console.log(doesWordExist(['james','ankit','machine'],'machine'))

console.log(doesWordExist(['james','ankit','machine'],'trouble'))

console.log(doesWordExist(''))