// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber){
        return firstNumber
    }else {
        return secondNumber
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {

    if(array.length == 0){
        
        return null
    }
      
    let masGrande = array[0]
    for(let i = 0;i < array.length;i++){
        prueba = array[i].length

        if(prueba > masGrande.length) {
        
            masGrande = array[i]
          
        }
    
    }
    //console.log(masGrande)
    return masGrande

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sumatoria = 0
    for(i = 0;i < array.length;i++){
        sumatoria = sumatoria + array[i]
    }

    return sumatoria
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    if(numbers2.length == 0) {

        return 0
    }

    sumatoria = sumNumbers(numbers2)
    media = sumatoria/numbers2.length

    return media
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {

    if(array.length == 0){
        return null
    }

    for(i = 0;i < array.length;i++){

        if(array[i] == word){
            return true
        }
        
        continue
    }
    return false
}
