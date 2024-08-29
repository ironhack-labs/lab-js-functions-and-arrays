// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

    if(num1>num2){

        return  num1 
    }else if(num1<num2){

        return num2
    }else {

        return  num1 
    }

}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {

    if(arr.length==0){

        return null
    }
  
    let longest = ""
for(let i =0; i<arr.length; i++){

    if(arr[i].length>longest.length){

        longest = arr[i]
        

    }

    
    }
    return longest

 
}

findLongestWord(words)


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrSum) {

    let suma = 0
for(let i =0; i<arrSum.length; i++){

    suma += arrSum[i]
}

return suma

}

sumNumbers(numbers)


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
let promedio =0
function averageNumbers(arrNums) {

    if(arrNums.length==0){

        return 0
    }


    return promedio = sumNumbers(arrNums)/arrNums.length

    
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrSearch, palabra) {



    if(arrSearch.length==0){

        return null
    }

    if(arrSearch.includes(palabra)){

        return true
    }else {

        return false
    }


}

console.log(doesWordExist(words2))
