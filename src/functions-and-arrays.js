// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {

    if(num1 > num2){
        return num1;
    } else if(num2 > num1){
        return num2;
    }else{
        return num1
    }

}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(palabras) {

    if (palabras.length === 0){
        return null
    }else{
        let longestWord = '';
    
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i].length > longestWord.length) {
                longestWord = palabras[i];
            }
        }

        return longestWord;
    }
    
}

console.log(findLongestWord(words))

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numeros) {
    let suma = 0
        
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

return suma
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numeros2) {
    if(numeros2.length === 0){
        return 0;
    }else{
        let suma2 = 0
        for (let i = 0; i < numeros2.length; i++) {
            suma2 += numeros2[i];
        }
    return suma2 / numeros2.length  
    }

}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(palabras2, palabra) {


    if(palabras2.length === 0){
        return null
    }else {
        return palabras2.includes(palabra)
    }

}
