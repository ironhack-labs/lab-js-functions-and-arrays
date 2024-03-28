// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    // Check if num1 is greater than num2
    if (num1 > num2) {
        return num1; // Return num1 if it's greater
    } else {
        return num2; // Otherwise, return num2
    }
}




// Iteration 2 | Find the Longest Word

function findLongestWord(words) {
    // Check if the array is empty
    if (words.length === 0) {
        return null; // Return null if the array is empty
    }
    
    let longestWord = words[0]; // Initialize the longest word with the first word in the array
    
    // Loop through the array starting from the second word
    for (let i = 1; i < words.length; i++) {
        // Compare the length of the current word with the length of the longest word
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; // Update the longest word if the current word is longer
        }
    }
    
    return longestWord; // Return the longest word
}

// Testing the function with the provided array
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
console.log(findLongestWord(words)); // Output: "crocodile"


// Iteration 3 | Sum Numbers

function sumNumbers(numbers) {
    let sum = 0; // Initialize sum to 0
    
    // Loop through the array and adding each number to the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Adding the current number to the sum
    }
    
    return sum; // Return the sum
}

// Testing the function with the provided array
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log(sumNumbers(numbers)); // Output: 87


// Iteration 4 | Numbers Average

// Reusing the sumNumbers function to find the sum of numbers in the array
function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Function to calculate the average of numbers in an array
function averageNumbers(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return 0;
    }
    
    // Calculate the sum using the sumNumbers function
    const sum = sumNumbers(numbers);
    
    // Calculate the average by dividing the sum by the number of elements in the array
    const average = sum / numbers.length;
    
    return average;
}

// Test the function with the provided array
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers2)); // Output: 6.125



// Iteration 5 | Find Elements
function doesWordExist(words, word) {
    // Check if the array is empty
    if (words.length === 0) {
        return null; // Return null if the array is empty
    }

    // Loop through the array to search for the word
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            return true; // Return true if the word is found
        }
    }

    // Return false if the word is not found after looping through the entire array
    return false;
}

// Test the function with the provided array
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
console.log(doesWordExist(words2, "subset")); // Output: true
console.log(doesWordExist(words2, "hello")); // Output: false
console.log(doesWordExist([], "test")); // Output: null




