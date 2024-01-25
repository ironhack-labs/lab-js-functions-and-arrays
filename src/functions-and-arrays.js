// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {// COMPARO EL VALOR DEL PRIMER ARGUMENTO CON EL DEL SEGUNDO 
    return num1; // DEV EL VALOR DEL MAS GRANDE SI SE CUMPLE QUE LA VARIABLE NUM1 ES MAYOR QUE NUM2
  } else if (num2 > num1) { // COMPARO EL VALOR DEL SEGUNDO ARGUMENTO CON EL DEL PRIMER
    return num2; // SI NO SE CUMPLE Y NUM2 ES MAS GRANDE QUE NAM1 DEV NAM2
  } else { // SI NO SE CUMPLE NINGUNA DE LAS DOS DEV 0
    return num1;
  }
}
console.log(maxOfTwoNumbers(31, 20));
console.log(maxOfTwoNumbers(6, 3));

// Iteration 2 | Find the Longest Word

function findLongestWord(words) {
  if (words.length === 0) {//VALIDACIÓN CUANDO RECIBE UN ARRAY VACIO
    return 0;
  }
  let palabra = "";  // DECLARO UNA VARIABLE DE TIPO STRING VACIO 
  
  for (let i = 0; i < words.length; i++) { // RECORRO EL ARRAY QUE VOY A PASAR COMO ARGUMENTO EN MI FUNCION
     
    if (words[i].length > palabra.length) { //COMPARO LAS LONGITUD DE LAS PALABRAS CON LA LONGITUD DE LA PALABRA QUE VOY GUARDADNO EN LA VARIABLE  
      palabra = words[i];
    }
  }
  return palabra; // AL TERMINAR DESPUES DE COMPROBAR TOSAS LAS PALABRAS ME DEV LA VARIABLE GUARDADA EN PALABRA 
  
}
const words = [
  "mistery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
const longestWordResult = findLongestWord(words);// CONSTANTE QUE IGUALO A LA FUNCION Y PASA EL ARGUMENTO DEL ARRAY WORDS 
console.log(`La palabra más larga es: ${longestWordResult}`);



//Iteration 3 | Sum Numbers 
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sum) {  
    let result = 0;//DECLARO VARIABLE DE TIPO NUMBER Y LA IGUALO A 0
    for (let i = 0; i < sum.length; i++){ // RECORRO EL ARRAY DE LOS NUMEROS A SUMAR 
            
        result = result + sum[i];  // GUARDO EN LA VARIABLE INICIALIZADA A 0 LA SUMA DE LSO NUMERO QUE RECORRE ARRAY 
        }
    return result;//DEV EL VALOR ACTUALIZADO DE LA VARIABLE 
}
console.log(sumNumbers(numbers)); 

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist() {}
