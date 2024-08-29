// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numeroUno,numeroDos
) {
    if (numeroUno>numeroDos)
        return numeroUno
    else if (numeroDos>numeroUno)
        return numeroDos
    else{
        return numeroUno
    }
}





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(listaDePalabras) {
    let palabraLarga= ""
    if (listaDePalabras.length===0){
        return null
    }
    for (let i = 0; i < listaDePalabras.length; i++) {

            if (listaDePalabras[i].length > palabraLarga.length) {
              palabraLarga = listaDePalabras[i];
            };
          }
          return palabraLarga

    }




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(listaDeNumeros) {
    let suma= 0
    for (let i=0; i<listaDeNumeros.length; i++){
        suma = suma + listaDeNumeros [i]
        
    }
    return suma
    

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(listaDeNumeros) {

    if (listaDeNumeros.length===0){
        return 0
    }
   let promedio= sumNumbers(listaDeNumeros)/listaDeNumeros.length
   
    return promedio

}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(palabras,unaPalabra) {

    if (palabras.length===0){
        return null
    }
    for (let i = 0; i < palabras.length; i++){

        if (palabras[i] === unaPalabra) {
            return true;
          }
    }
    return false



}
