// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1 > num2){
        return num1;
    } else if(num1 < num2){
        return num2;
    } else {
        return num1
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayDePalabras) {
    let palabraLarga = "";
    if(arrayDePalabras.length === 0){
        return null;
    }

    for(let i = 0; i < arrayDePalabras.length; i++ ){
        if(arrayDePalabras[i].length > palabraLarga.length){
            palabraLarga = arrayDePalabras[i]
        }
    }
   return palabraLarga;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNums) {
    let sumaTotal = 0;
    for(let i = 0; i < arrayNums.length; i++){
        sumaTotal+= arrayNums[i]
    }
    return sumaTotal;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNumeros) {
    if(arrayNumeros.length === 0){
        return 0;
    }
     return sumNumbers(arrayNumeros)/ arrayNumeros.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayP, palabra) {
    if(arrayP.length === 0){
        return null;
    }
    for(let i = 0; i < arrayP.length; i++){
        if(arrayP[i]=== palabra){
            return true;
        } 
    }
 return false; 
}
