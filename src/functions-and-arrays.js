// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
let biggestNumber = 0

if (num1 > num2){
return  num1

}else if ( num2 > num1){

return   num2
}else if ( num1 === num2){
return num1

}
}

console.log(maxOfTwoNumbers(45, 15 ))
maxOfTwoNumbers(45,1222)

maxOfTwoNumbers(45, 56) 


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"] 



function findLongestWord(wordsArray) {
let longestWord = wordsArray[0] || null  

for(let index=0;index < wordsArray.length; index++ ){

if (wordsArray && wordsArray[index].length > longestWord.length){

  longestWord = wordsArray[index]
}
}

return longestWord



}


/* console.log(findLongestWord([])) */


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const array = [12,12]

function sumNumbers( numbers ) {
let total = 0 
for(let i= 0; i < numbers.length; i++ ){

 total += numbers[i] 
}

return total

}

sumNumbers(numbers)
/* console.log(sumNumbers([1,2,2]))
 */
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers( numberArray ) {

 let sum =  sumNumbers(numberArray)

 let average = sum / numberArray.length

 console.log(numberArray.length)

return average || 0

}


averageNumbers(numbers2)


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {

  let result  = null
 

for(let i = 0 ; i < arrayOfWords.length ; i++){

  
if(!arrayOfWords ){

result = null

} else if( arrayOfWords  && arrayOfWords[i] == wordToSearch){

result =true 
break

}else if ( arrayOfWords && arrayOfWords[i] != wordToSearch ){

 result = false 

 
}

}
return result

}

console.log(doesWordExist(words2, "starting"))
