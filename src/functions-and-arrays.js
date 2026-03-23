// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {

  // Declarar a como valor por defecto
  let maximo = a
  // Comprobar si b es mayor que a, y asignar valor b mediante una condicional
  b > a ? maximo = b : maximo = a
  //Retorno el resultado de la operación anterior.
  return maximo
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

   // Primera condición, si el array está vacío, devuelve null
   if (words.length === 0) {return null}

   // Aquí le digo, declara una variable "wordLength" que se inicializa aplicando a word (el array) el method reduce. 
   // Declaro en el reduce el acumulador (wordLongest, donde se va acumulando el valor más alto) y el valor actual ( el que la función analiza en cada iteración)
   // => es función en flecha, y vincula lo anterior a la función: retorna la comparación entre cada iteración con el acumulado, si es mayor, se convierte en acumulado,
   // si es igual o menor, se mantiene inalterada la primera palabra mayor.
   let wordsLength = words.reduce((wordLongest, word) => { return word.length > wordLongest.length ? word : wordLongest});

   // retorno el resultado de lo anterior.
   return wordsLength
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

   // Condicional, por el cual si la longitud del array es 0, se devuelve 0
   if (numbers.length === 0) {return 0}

   // Se declara la variable suma, inicializada aplicando el method reduce al parámetro del array
   // como hice en el ejercicio 2
   let suma = numbers.reduce((sumatory, number) => sumatory + number)

   // retorno el resultado de lo anterior
   return suma
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
   // Con respecto al Iteration 3, añadí que si sólo tiene un dato en el array, devuelva ese.
   if (numbers2.length === 0) {return 0} else if (numbers2.length === 1) {return numbers2[0]}
   let suma = numbers2.reduce((sumatory, number) => sumatory + number)

   // de resto lo único distinto es que el resultado de la suma la divido entre el número de elementos del aray
   return suma / numbers2.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, lookedWord) {
   //Si la longitud del array es 0 (está vacío) de vuelve null, si no, devuelve el resultado
   // del method ".includes" que le pregunta a words2 si incluye lookedWord
   if (words2.length === 0) {return null} return words2.includes(lookedWord)
}


/* primera versión, antes de encontrar la versión includes.  

   if (words2.length === 0) {return null}
   for (let i = 0; i < words2.length; i++) {
      if (words2[i] === lookedWord) {
         return true
      }
   }
   if (doesWordExist !== true) {return false}
      } */
