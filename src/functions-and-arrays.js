// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) { // number 1 y number 2 son los parametros entre los que estamos buscando, representan cualquier numero en este caso
    return Math.max(number1, number2)        // el metodo Math.max() returns el numero mayor(o maximo) entre los parametros number 1 y number 2 
}                                            



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words){
    let temp = words[0]
    if (words.length==0) {return null}

    for (let i=0; i<words.length; i++)
    {
        if(temp.length<words[i].length)
        {
            temp = words[i]
        }
    }
    return temp;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) 
{ 
    let sum = 0                              // inicializando la variable sum  

    for (let i = 0; i < numbers.length; i++) // hacemos un loop que empieza en el indice 0 (i = 0), siempre y cuando el valor de i sea menor (i <) al length del array numbers, se incrementa 1 (i++ significa incrementar 1 posicion en el indice), cuando i sea mayor al length de numbers, el loop termina.
    {
        sum += numbers[i]                 // sum = sum + numbers[i] - la variable sum = la variable + numbers en la posicion del indice i. estamos anadiendo cada elemento en el array al total y guardando el valor en la variable sum
    } 
    return sum 
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {return 0}   // base case: should return 0 if an empty array is called. si numbers2.length = 0, el array esta vacio

    sum = sumNumbers(numbers2)             // sum = sumNumbers (la funcion que creamos anteriormente) con el paramentro array numbers2

    let avg = (sum / numbers2.length)      

    return avg
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToSearch) //words2 y wordsToSearch son given variables. son los parametros de la funcion 
{
if (words2.length === 0) {return null}      // base case: lo que pasa antes de correr el loop, primero chequeamos si hay elementos adentro del array words2. se chequea buscando el length del array (con el metodo .length) si el length del array es 0 significa que esta vacio o que no tiene elementos adentro.

let wordExists= ""                          // unknown variable, boolean (true o false). no sabemos si la palabra existe o si es true or false

for (let i = 0; i < words2.length; i++)     // iteramos sobre array empezando el loop
{
    if (wordToSearch === words2[i])         // comparamos la variable wordToSearch (la palabra que estamos buscando con cada elemento adentro del array words2 (cada elemento es cada palabra adentro del array, un array contiene multiples elementos) en la posicion [i]. [i] significa el indice o la posicion de cada elemento. segun vamos iterando, incrementamos 1 posicion en el indice. (i++)
    {                                       // si wordToSearch, la palabra que estamos buscando es igual a la palabra en el array words2 en la posicion [i] da a true porque ambas palabras son iguales
    return true
    }
}
    return false                            // ponemos return false fuera del loop para que ese return se ejecute tan pronto terminemos de iterar a traves de cada elemento en el length del loop. (el loop esta contenido en los curly brackets que cierran antes de return false)
}
