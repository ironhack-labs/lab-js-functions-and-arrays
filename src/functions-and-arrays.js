// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    console.log(num1)
    console.log(num2)
if(num1 > num2){
    return num1
}else if (num1 <num2) {
    return num2
    }else{
        return "Both numbers are the same"
    }
}
console.log(maxOfTwoNumbers(9, 3))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr){

    if(arr.length === 0 ){
        return null
    }
    let result2 = []
    for (let i =0 ; i< arr.length; i++){
      
        if(arr[i].length >result2.length){
            result2 = arr[i]
        }
    }
    return result2
}
console.log(findLongestWord(words))

 
    




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(arr){
    let result = 0
if(arr === []){
    return null
}
else{
    for(let i = 0; i<arr.length; i++){
    
        result += arr[i]
    }
    
}
return result
console.log(sumNumbers(numbers))
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

console.log(sumNumbers(numbers2))

function averageNumbers(arr){
let result = 0
if (arr === []){
    return null
}else{
for (i = 0; i < arr.length; i++){
        result += arr[i] /arr.length
    }
}

return result

}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr) {
    if(arr.length===0){
        return null
}else{
    for(let i= 0; i<arr.length; i++){
        if(arr.includes(arr[i])){
            return true
        }else{
            return false
        }
    }

}
return arr
}
