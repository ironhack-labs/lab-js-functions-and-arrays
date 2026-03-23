// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
//Comparamos los dos numeros y retornamos el mayor
    return a > b ? a : b;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    //Comprobamos que el array no este vacio
    if(words.length === 0) {
        return null;
    }
   
    //Se utiliza el metodo .reduce para recorrer el array y obtener el elemento mas largo
     return words.reduce((word1, word2) => word1.length >= word2.length ? word1 : word2, words[0]);
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  //Se necesita una variable para almacenar la suma
  let suma = 0;
  //Utilizamos el for para recorrer el array y sumar los elementos 
   for(let i = 0; i < numbers.length; i++){
     //suma acumulativa
     suma += numbers[i]
   }
   //retornamos la suma de los elementos del array
   return suma;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    //Comprobamos que el array no este vacio
    if(numbers2.length === 0){
        return 0;
    }
    //Se retorna el promedio. (sumNumbers(numbers2) / numbers2.length).
    return sumNumbers(numbers2) / numbers2.length;    
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
    //Comprobamos que el array no este vacio 
    if(words2.length === 0){
        return null; 
    }
    //Retornamos true si el elemento esta en el array  y false si no está.
    return !!words2.find(element => element === word);
}
