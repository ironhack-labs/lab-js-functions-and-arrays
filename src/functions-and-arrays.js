console.log(" Iteration 1 | Find the Maximum");
function maxOfTwoNumbers(a,b) {
    if (a>b){
        console.log(`${a} is larger than ${b}`)
    }
    else{
        console.log(`${b} is larger than ${a}`)  
    }

}

maxOfTwoNumbers(40,50);


console.log("Iteration 2 | Find the Longest Word");

const word = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }

    let LongestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > LongestWord.length) {
            LongestWord = words[i];
        }
    }

    const length = LongestWord.length;
    console.log(`${LongestWord} with the length ${length} is the longest word`);

    return LongestWord;
}

findLongestWord(word);

  

    






console.log("Iteration 3 | Sum Numbers");
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(number) {

    let addition=0;
    for (let i=0;i<number.length;i++){
        addition+=number[i];
    }
    console.log(addition);
    return addition;

}

sumNumbers(numbers);


console.log("Iteration 4 | Numbers Average");
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(number) {
    let sum=0;
    for (let i=0;i<number.length;i++){
        sum+=number[i];
        
    }
  average=sum/number.length;
    console.log(average);
    return average;
}
averageNumbers(numbers2);



console.log("Iteration 5 | Find Elements");
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(word, words) {
  if (words.includes(word)) {
    console.log("Word exists");
  } else {
    console.log("The word doesn't exist");
  }
}
doesWordExist("truth", words2);
doesWordExist("hello", words2); 