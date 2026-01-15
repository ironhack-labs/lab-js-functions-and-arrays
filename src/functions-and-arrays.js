// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
   if(num1>num2){
     return num1
   }else if(num2>num1){
    return num2
   }else{
    return num1
   }
}
console.log(maxOfTwoNumbers(5,10))




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if(array.length===0){
        return null
    }
    let longest="";
    for(let i=0;i<array.length;i++){
        if(array[i].length>longest.length){
            longest=array[i]
        }
    }
    return longest
}
console.log(findLongestWord(words))




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let sum=0;
  for(let i=0; i<array.length;i++){
    sum+=array[i]
  }
  return sum
}

console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if(array.length===0){
      return 0
    }
    if(array.length===1){
       let sum=sumNumbers(array)
       let avg=sum/array.length
       return avg;
    }
    let sum=sumNumbers(array)
    let avg=sum/array.length
    return avg;
}
console.log(averageNumbers(numbers))




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {
  if(array.length===0){
    return null
  }
  if(array.includes(word)){
     return true
  }else{
    return false
  }
}
 console.log(doesWordExist(words2,"machine"))  
