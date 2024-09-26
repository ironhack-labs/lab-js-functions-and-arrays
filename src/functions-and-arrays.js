// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

    if (num1 > num2){
        return num1;
    }

    else if (num1 < num2){
        return num2;
    }
    else {
        return "They are similar numbers" + num1, num2;
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
//const empty = [];
function findLongestWord(arr) {

    if (arr.length === 0) {
        return 0;
    }

    let biggestWord = " ";

    arr.forEach((e)=> {
        if(e.length > biggestWord.length){
            biggestWord = e;
        }
    })
    return biggestWord
}

//const theBiggestWord = findLongestWord(words);

//console.log(theBiggestWord);




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    if (array.length === 0) {
        return 0;
    }
    let total = 0;
    array.forEach((e)=> {
    total += e;          
});
    return total;
}

//const sum = sumNumbers(numbers)
//console.log(sum);



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nArr) {
    if (nArr.length === 0) {
        return 0;
    }
    let total = 0;
    nArr.forEach((e)=> {
        total += e;
    })
    let averageN = total / nArr.length;
    return averageN;
}

//const numAverage = averageNumbers(numbers2)
//console.log(numAverage)


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist (wArr,testArr) {

    if (wArr.length === 0) {
        return null
    }

    let foundWord = false;
    wArr.forEach((wArr)=>{
        if (wArr === testArr) {

            foundWord = true;
        }
    }); 
    return foundWord;

}

//const searchWord = "starting";
//const result = doesWordExist(words2, searchWord);

//console.log(result)