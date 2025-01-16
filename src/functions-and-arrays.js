// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
    
    if (firstNumber > secondNumber) {
        return firstNumber;
        } 
        else if (secondNumber > firstNumber) {
            return secondNumber;
        }
        else {
            return firstNumber;
    }
} 



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
   
    // Devuelve null cuando el array words está vacío
    if(words.length === 0){
        return null
    }

    // Declaramos e iniciamos la variable longestWord con el primer elemento (index 0) del array words.
    // Esto establece la primera palabra (elemento con index 0) del array como la más larga, servirá de referencia para comparar con las demás.
    let longestWord = words[0];

    // Bucle 'for... if' para recorrer todos los elementos del array words
    for (let i = 1; i < words.length; i++) {

        // Compara la longitud de cada palabra con la longitud de la palabra más larga (longestWord). 
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
} 

console.log(findLongestWord(words));  // Devuelve "crocodile", la palabra más larga del array words
console.log(findLongestWord([]));     // Devuelve null al estar el array vacío
console.log(findLongestWord(["dog"])); // Devuelve "dog" al ser la única palabra en el array
console.log(findLongestWord(["banano", "banana"])); // Devuelve "banano" al ser la primera palabra más larga cuando hay varias con la misma longitud
   


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    
    // Declaramos e iniciamos la variable sum con el valor 0, donde sum se usará para sumar los elementos del array numbers
    let sum = 0;
    
    // Verificamos si el array numbers está vacío (si su longitud es 0), en cuyo caso devuelve 0
    if (numbers.length === 0)
        return 0;

    // Bucle para recorrer todos los elementos del array numbers
    for (let i = 0; i < numbers.length; i++) {
        
    // En cada iteración del bucle se suma el valor del elemento actual (numbers[i]) al valor de la variable sum
        sum += numbers[i];
    }

    // devuelve la suma de todos los números del array numbers
    return sum;
}

console.log(sumNumbers(numbers)); // Devuelve 89, la suma de todos los elementos del array numbers
console.log(sumNumbers([])); // Devuelve 0 al estar el array vacío
console.log(sumNumbers([6])); // Devuelve 6 al ser el único elemento del array



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    // Devuelve 0 si el array numbers2 está vacío
    if (numbers2.length === 0) {
        return 0;
      }
    
      // Declaramos una variable 'sum' con valor 0 para acumular la suma de los números
      let sum = 0;
    
      // Usamos un bucle for para recorrer el array y sumar sus elementos
      for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
      }
    
      // Calculamos el promedio dividiendo la suma entre el número de elementos
      return sum / numbers2.length;
}

console.log(averageNumbers(numbers2)); // Devuelve 6



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {

    // Devuelve null cuando el array words2 está vacío
    if(array.length === 0) {
        return null;
    }

    // Devuelve true si la palabra está en el array
   if(array.includes(word)) {
    return true
   } 
   
   // Devuelve false si la palabra no etsá en el array
   else {
    return false;
   }
}

console.log(doesWordExist(words2, "machine"));  // true
console.log(doesWordExist(words2, "machines"));     // false
console.log(doesWordExist([], "machine"));      // null
