// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a
    }
    else if (a < b) {
        return b
    }
    else {return a}

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if(array.length === 0) {return null} 
    else {
    let biggestWord = ""
    
        for (let i = 0; i < array.length; i++) {
            
            if (array[i].length > biggestWord.length) {
                biggestWord = array[i]
    
            };
        }
    
        return biggestWord
    }
}
    
    console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) { 
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum +=numbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {return 0} else{
    let sum = 0;
    for(let i = 0; i < numbers2.length; i++){
        sum +=numbers2[i];
    }
    return sum / numbers2.length
}
}








// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

    function doesWordExist(array, word) {
        if (array.length === 0) {return null} else {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === word) {
                    return true
                } 
                    }
    return false
    }
    }