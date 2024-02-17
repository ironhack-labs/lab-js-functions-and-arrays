// Iteration 1 | Find the Maximum


function maxOfTwoNumbers(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return num1
    }
}

console.log(maxOfTwoNumbers(1,2))

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArray) {

    if (wordArray.length === 0) {
        return 0
    }

let longestWord =  ''
wordArray.forEach((element) => {
    if (element.length > longestWord.length ) {
        longestWord = element
    }
    
})
return longestWord

}

console.log(findLongestWord(word))

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sum = 0
    array.forEach ((element) => {
        sum += element
    })
    return sum
}

console.log (sumNumbers(numbers))




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array2) {

    if (array2.length === 0 ) {
        return 0
    } 

    const numbers2sum = sumNumbers (array2) 

    return numbers2sum / array2.length
}








// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array3, searchWord) {
 
    if (array3.length === 0){
        return null
    }


array3.forEach (( element) => {
if (searchWord === element) {
    return true
} else {
    return false
}

})

}

console.log (doesWordExist(word2, "starting"))
