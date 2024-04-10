// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(par1, par2) {
    return Math.max(par1, par2)
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let largoInicial = 0;
    let maxLongitud;
    if(arr.length==0){
        maxLongitud=null
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > largoInicial) {
        largoInicial = arr[i].length;
        maxLongitud = arr[i];
      }
    }
    
    return maxLongitud
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let respuesta=0;
function sumNumbers(numeros) {

    if(numeros.length>1){
        for(let i=0;i<numeros.length;i++){
            respuesta+=numeros[i]
        }
    }else if(numeros.length==1){
        respuesta=numeros[0]
    }else if(numeros.length==0){
        respuesta=0
    }

    return respuesta
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numeros2) {
    let respuesta2
    let suma=sumNumbers(numeros2)//suma es el resultado de la funcion sumNumbers//redondear

    if(numeros2.length==0){
        respuesta2=0
    }else if(numeros2.length==1){
        respuesta2 = suma / numeros2.length //media
    }else if(numeros2.length>1){
        respuesta2 = suma / numeros2.length //media
    }
 
    return Math.floor(respuesta2)
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
let respuesta3
function doesWordExist(arr, word) {
    if(arr.length==0){
        respuesta3 = null
    }else if(arr.indexOf(word)!==-1){
        respuesta3=true
    }else{
        respuesta3=false
    }
    return respuesta3
}
