//Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.
function maxOfTwoNumbers(num1, num2) {
    if ( num1 >= num2 ) {
       return num1;
    }
    else  {
       return num2;
    }
}
console.log(maxOfTwoNumbers(5, 10));//Output 10
console.log(maxOfTwoNumbers(10, 15));//Output 15
console.log(maxOfTwoNumbers(5, 5));//Output 5

//*******************************Task 2*********Find the Longest Word

function findLongestWord(inputArray) {
    //Is Array empty?
    if (inputArray.length == 0) {
        return null;
    }

    //Array is not empty, find the index with the longest word
    let max_index = 0;
    let max_value = inputArray[max_index].length();
    for (let i = 1; i < inputArray.length; i++) {
        if ( max_value < inputArray[i].length()); {
          max_index = i;    
        }
    }  
    //Then return the word of max index
    return inputArray[max_index];
}
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
const test = ["m", "br", "avi", "croc", "pearl"];
const empty = [];
console.log(findLongestWord(words));//Output crocodile
console.log(findLongestWord(test));//Output pearl
console.log(findLongestWord(empty));//Output null


console.log(1);
let a = 4.5;
console.log(a);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
for (let year = 1; year <= 100; year++) {
    for (let day = 1; day <= 365; day++) {
         if ( day === "10 September")
            console.log("Happy Birthday Sofia");
         else if ( day === "5 April")
            console.log("Happy Birthday Anna");
    }
}
    