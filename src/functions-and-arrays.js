// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if(n1 > n2){ 
        return n1 //true
    } else {
return n2
    }
}

console.log(maxOfTwoNumbers(3,5))
console.log("hello")



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
if (!words.length){
return 0
}
return words.sort((a,b)=>b.length-a.length)[0]
}
console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (!numbers.length){
        return 0
    }
    return numbers.reduce((acc, cur)=>{
        acc+=cur
        return acc
    },0)

    }
console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
if (!numbers.length){
    return 0
}
return numbers.reduce((acc,cur)=>{
   acc += cur
   return acc
}) /numbers.length

}


console.log(averageNumbers(numbers2))




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words,str) {
if (!words.length){
    return null
} 
return words.includes(str)
}

console.log(doesWordExist(words2,"subset"))