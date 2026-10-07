// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1>num2){
        return num1
    }
    else {
        return num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(cadena){
    if (cadena.length === 0){
        return null
    }

    let longword = cadena[0]
    cadena.forEach(function(letter) {
        if (letter.length > longword.length){
            longword = letter
        }
    })
    return longword
}
console.log(findLongestWord(words))

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(suma) {
    if ( suma.length === 0){
        return 0
    }
    let sumatotal = 0
    suma.forEach(function(numeros){
        sumatotal = sumatotal + numeros
    })
    return sumatotal
}

console.log(sumNumbers(numbers))


// Iteration 4 | Numbers Average
const numero = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(average){
    if (average.length === 0){
        return 0
    }
     let suma = 0
     average.forEach(function(numero){
        suma += numero 
     })
     return suma/average.length
}
console.log(averageNumbers(numero))
// Iteration 5 | Find Elements


const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(findElements,letters) {
    if ( findElements.length === 0){
        return null
    }
        let FindLetter = false;

        findElements.forEach(function(words){
            if (words === letters){
                FindLetter = true;
            }

        })
        return FindLetter
    }
    console.log(doesWordExist(words2,"matter"))
