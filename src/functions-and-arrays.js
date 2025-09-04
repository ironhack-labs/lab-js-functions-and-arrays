// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
  
    if(num1>num2)
        {
            return num1;
        }

        else if(num1<num2)
            {
                return num2;
            }

            else
                {
                    return num1 ;
                }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let theOne=0
    let lenGth=0;
    if(words.length===0)
        {
            return null;
        }
        else
            {
               for(let i=0;i<words.length;i++)
        {
           if(lenGth<words[i].length){
              lenGth=words[i].length;
              theOne=i
            }
        }
            return words[theOne];
            }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sumNumbers) {
    let sumN=0;
    if(sumNumbers.length===0)
        {
            return 0;
        }
    else
        {
            for(let i=0;i<sumNumbers.length;i++)
                {
                    sumN+=sumNumbers[i];
                }
                return sumN;
        }

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) 

{
    let averageN;
    if(numbers2.length===0){
        return 0;
    }
    else
        {
         averageN=sumNumbers(numbers2)/numbers2.length;
         return averageN;
        }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,targetWord) 
{
    if(words2.length===0){
        
        return null;
    }
    else{
        if(words2.includes(targetWord)){
            return true;
        }
        else{
            return words.includes(targetWord)
        }
    }
}
